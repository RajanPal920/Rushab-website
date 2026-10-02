import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { heroSlides } from '../../data/heroSlides';
import '../../styles/hero.css';

export default function HeroSlider() {
  const slidesCount = heroSlides.length; // Exactly 4 slides

  // Build cloned slides array: [Clone(Slide 4), Slide 1, Slide 2, Slide 3, Slide 4, Clone(Slide 1)]
  const extendedSlides = [
    { ...heroSlides[slidesCount - 1], cloneKey: 'clone-prev' },
    ...heroSlides.map((s) => ({ ...s, cloneKey: `real-${s.id}` })),
    { ...heroSlides[0], cloneKey: 'clone-next' }
  ];

  // Index 1 corresponds to real Slide 1
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const isTransitioningRef = useRef(false);
  const autoplayTimerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Active slide number (1 to 4)
  let activeSlideNumber = 1;
  if (currentIndex === 0) {
    activeSlideNumber = slidesCount;
  } else if (currentIndex === slidesCount + 1) {
    activeSlideNumber = 1;
  } else {
    activeSlideNumber = currentIndex;
  }

  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const safetyTimeoutRef = useRef(null);

  const startTransitionLock = () => {
    isTransitioningRef.current = true;
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    safetyTimeoutRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
    }, 1000);
  };

  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    startTransitionLock();
    setIsAnimated(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    startTransitionLock();
    setIsAnimated(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

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

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;

    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    isTransitioningRef.current = false;

    // Reset when transitioning to clone slides
    if (currentIndex === slidesCount + 1) {
      setIsAnimated(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setIsAnimated(false);
      setCurrentIndex(slidesCount);
    }
  };

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

  useEffect(() => {
    clearAutoplayTimer();

    if (!isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, 5500);
    }

    return () => {
      clearAutoplayTimer();
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [isPaused, handleNext, clearAutoplayTimer, currentIndex]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartXRef.current - touchEndXRef.current;
    if (swipeDistance > 45) {
      handleNext();
    } else if (swipeDistance < -45) {
      handlePrev();
    }
  };

  return (
    <section
      className="hero-section"
      aria-label="Rushab Metal Industries Hero Showcase"
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
              {/* Background Image: Natural, crystal clear without heavy solid blue cover */}
              <img
                src={slide.image}
                alt={slide.eyebrow}
                className="hero-slide-bg"
                loading={idx === 1 ? 'eager' : 'lazy'}
              />

              {/* Subtle bottom vignette gradient to ensure control legibility without covering image */}
              <div className="hero-subtle-vignette" />

              {/* Slide Content with Frosted Glass Container matching reference screenshot */}
              <div className="hero-container-inner">
                <div className="hero-glass-card">
                  {/* Eyebrow with horizontal dash line */}
                  <div className="hero-eyebrow-line">
                    <span className="eyebrow-dash">—</span>
                    <span className="eyebrow-text">{slide.eyebrow}</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="hero-headline">
                    {slide.titleLine1}{' '}
                    <span className="headline-highlight">{slide.titleHighlight}</span>
                    <br />
                    {slide.titleLine2}
                  </h1>

                  {/* Description */}
                  <p className="hero-desc">{slide.description}</p>

                  {/* CTA Actions */}
                  <div className="hero-btn-row">
                    <Link to={slide.primaryButton.link} className="hero-btn-primary">
                      {slide.primaryButton.text}
                    </Link>
                    <Link to={slide.secondaryButton.link} className="hero-btn-secondary">
                      {slide.secondaryButton.text}
                    </Link>
                  </div>

                  {/* Bottom Badge Inside Glass Card */}
                  {slide.badgeText && (
                    <div className="hero-card-bottom-pill">
                      <span className="card-pill-dot" />
                      <span className="card-pill-text">{slide.badgeText}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar: Timeline Phase Indicator on Left, Navigation Arrows on Right */}
      <div className="hero-bottom-controls">
        <div className="hero-controls-inner">
          {/* Phase 01 / 04 Capsule + Steps */}
          <div className="hero-phase-capsule">
            <div className="phase-label-wrap">
              <span className="phase-pulse-dot" />
              <span className="phase-title">PHASE 0{activeSlideNumber}</span>
              <span className="phase-total">/ 0{slidesCount}</span>
            </div>

            <div className="phase-ticks-row">
              {heroSlides.map((slide, i) => {
                const num = i + 1;
                const isActive = num === activeSlideNumber;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    className={`phase-tick-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleGoTo(num)}
                    aria-label={`Go to slide 0${num}`}
                  >
                    <span className="phase-tick-bar" />
                    <span className="phase-tick-num">0{num}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows on Bottom Right matching reference */}
          <div className="hero-arrows-group">
            <button
              type="button"
              className="hero-arrow-btn prev"
              onClick={handlePrev}
              aria-label="Previous Slide"
              title="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="hero-arrow-btn next"
              onClick={handleNext}
              aria-label="Next Slide"
              title="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
