import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/components/ImageSlider.css';

export default function ImageSlider({ slides, autoPlayInterval = 6000 }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval, slides.length]);

  return (
    <div className="image-slider" role="region" aria-label="Image carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="image-slider__slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt || ''}
            className="image-slider__image"
          />
          <div className="image-slider__overlay" />
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <>
          <button
            className="image-slider__arrow image-slider__arrow--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className="image-slider__arrow image-slider__arrow--next"
            onClick={next}
            aria-label="Next slide"
          >
            &#8250;
          </button>
          <div className="image-slider__dots" role="tablist">
            {slides.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === current}
                aria-label={`Slide ${index + 1}`}
                className={`image-slider__dot ${index === current ? 'image-slider__dot--active' : ''}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
