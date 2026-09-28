import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { heroSlides } from '../../data/heroSlides';

export default function HeroSlider() {
  const slidesCount = heroSlides.length; // Exactly 4 slides

  // Build cloned slides array: [Clone(Slide 4), Slide 1, Slide 2, Slide 3, Slide 4, Clone(Slide 1)]
  const extendedSlides = [
    { ...heroSlides[slidesCount - 1], cloneKey: 'clone-prev' },
    ...heroSlides.map((s) => ({ ...s, cloneKey: `real-${s.id}` })),
    { ...heroSlides[0], cloneKey: 'clone-next' }
  ];

  // Index 1 corresponds to the real Slide 1
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const isTransitioningRef = useRef(false);
  const autoplayTimerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Calculate the active slide number (1 to 4) for pagination & counter
  let activeSlideNumber = 1;
  if (currentIndex === 0) {
    activeSlideNumber = slidesCount;
  } else if (currentIndex === slidesCount + 1) {
    activeSlideNumber = 1;
  } else {
    activeSlideNumber = currentIndex;
  }

  // Clear existing autoplay timer
  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  // Safety timeout ref to avoid permanently locking transitions
  const safetyTimeoutRef = useRef(null);

  const startTransitionLock = () => {
    isTransitioningRef.current = true;
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    safetyTimeoutRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
    }, 1100);
  };

  // Advance to next slide smoothly
  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    startTransitionLock();
    setIsAnimated(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Move to previous slide smoothly
  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    startTransitionLock();
    setIsAnimated(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Jump to specific slide (1-indexed: 1, 2, 3, 4)
  const handleGoTo = useCallback(
    (targetNumber) => {
      if (isTransitioningRef.current) return;
      if (targetNumber === activeSlideNumber) return;
      startTransitionLock();
      setIsAnimated(true);
      setCurrentIndex(targetNumber);
    },
    [activeSlideNumber]
  );

  // Seamless infinite loop transition reset
  const handleTransitionEnd = (e) => {
    // Only handle transform transition on track itself, ignore bubbled events
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;

    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    isTransitioningRef.current = false;

    // If we transitioned to the clone of Slide 1 at the end
    if (currentIndex === slidesCount + 1) {
      setIsAnimated(false);
      setCurrentIndex(1); // Jump seamlessly to real Slide 1
    }

    // If we transitioned to the clone of Slide 4 at the start
    if (currentIndex === 0) {
      setIsAnimated(false);
      setCurrentIndex(slidesCount); // Jump seamlessly to real Slide 4
    }
  };

  // Re-enable animation in the next paint cycle if it was temporarily disabled for instant reset
  useEffect(() => {
    if (!isAnimated) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimated(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isAnimated]);

  // Autoplay management: 4.5 seconds per slide, paused on desktop hover
  useEffect(() => {
    clearAutoplayTimer();

    if (!isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4500);
    }

    return () => {
      clearAutoplayTimer();
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [isPaused, handleNext, clearAutoplayTimer, currentIndex]);

  // Mobile Touch / Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      handleNext();
    } else if (swipeDistance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section
      className="hero-section"
      aria-label="Hero Image Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Track with CSS Transform */}
      <div
        className={`hero-slider-track ${isAnimated ? 'is-animated' : 'no-animation'}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => {
          const isCurrentActive = idx === currentIndex;
          return (
            <div
              key={`${slide.cloneKey}-${idx}`}
              className={`hero-slide ${isCurrentActive ? 'is-active' : ''}`}
              aria-hidden={!isCurrentActive}
            >
              {/* Background Image with object-fit: cover */}
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-bg"
                loading={idx === 1 ? 'eager' : 'lazy'}
              />

              {/* Slide Content */}
              <div className="container hero-content-wrapper">
                <div className="hero-content">
                  <div className="hero-content-panel">
                    {/* Eyebrow badge */}
                    <div className="hero-eyebrow">
                      <span className="hero-eyebrow-dot" />
                      <span>{slide.eyebrow}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-title">{slide.title}</h1>

                    {/* Description */}
                    <p className="hero-description">{slide.description}</p>

                    {/* Call to Action Buttons */}
                    <div className="hero-actions">
                      <a
                        href={slide.primaryButton.link}
                        className="btn-primary"
                      >
                        <span>{slide.primaryButton.text}</span>
                        <FaArrowRight />
                      </a>

                      <a
                        href={slide.secondaryButton.link}
                        className="btn-secondary"
                      >
                        <span>{slide.secondaryButton.text}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrow: Previous */}
      <button
        type="button"
        className="slider-arrow prev"
        onClick={handlePrev}
        aria-label="Previous Hero Slide"
        title="Previous slide"
      >
        <FaChevronLeft />
      </button>

      {/* Navigation Arrow: Next */}
      <button
        type="button"
        className="slider-arrow next"
        onClick={handleNext}
        aria-label="Next Hero Slide"
        title="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Controls Bar at Bottom: Slide Counter & 4 Pagination Indicators */}
      <div className="hero-controls-bar">
        <div className="hero-controls-container">
          {/* Numeric Slide Indicator (e.g. 01 / 04) */}
          <div className="slide-counter" aria-live="polite">
            <span className="slide-counter-current">
              0{activeSlideNumber}
            </span>
            <span className="slide-counter-divider">/</span>
            <span className="slide-counter-total">
              0{slidesCount}
            </span>
          </div>

          {/* 4 Clickable Pagination Indicators */}
          <nav
            className="pagination-indicators"
            aria-label="Hero Slide Pagination"
          >
            {heroSlides.map((slide, i) => {
              const slideNum = i + 1;
              const isActive = slideNum === activeSlideNumber;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`pagination-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleGoTo(slideNum)}
                  aria-label={`Go to slide ${slideNum}: ${slide.title}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span className="pagination-dot" />
                  <span className="pagination-label">0{slideNum}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
