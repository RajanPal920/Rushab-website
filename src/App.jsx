import React from 'react';
import Navbar from './components/header/Navbar';
import HeroSlider from './components/hero/HeroSlider';
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';

export default function App() {
  return (
    <div className="app-layout">
      {/* 1. Top Contact Bar & Main Sticky Navbar */}
      <Navbar />

      {/* 2. Full-Width 4-Slide Infinite Hero Slider */}
      <main id="main-content">
        <HeroSlider />
      </main>
    </div>
  );
}
