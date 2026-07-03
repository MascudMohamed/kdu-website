import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/components/DeptEventsSlider.css";

export default function DeptEventsSlider({ events = [] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (events.length <= 1 || paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [events, paused]);

  if (!events.length) return null;

  const next = () =>
    setCurrent((prev) => (prev + 1) % events.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + events.length) % events.length);

  const event = events[current];

  return (
    <aside
      className="dept-events-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="dept-events-slider__top">

        <div>
          <span className="dept-events-slider__eyebrow">
            Department Life
          </span>

          <h2>Current Events</h2>
        </div>

        <span className="dept-events-slider__counter">
          {current + 1} / {events.length}
        </span>

      </div>

      <AnimatePresence mode="wait">

        <motion.article
          key={current}
          className="dept-events-slider__card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: .4 }}
        >

          <div className="dept-events-slider__image-wrap">

            <img
              src={event.banner}
              alt={event.title}
              className="dept-events-slider__image"
            />

            <span className="dept-events-slider__type">
              {event.type}
            </span>

          </div>

          <div className="dept-events-slider__content">

            <h3>{event.title}</h3>

            <p className="dept-events-slider__meta">
                📅 {event.date}
            </p>

            <p className="dept-events-slider__meta">
                📍 {event.venue}
            </p>

            <p className="dept-events-slider__description">
              {event.description}
            </p>

            {event.link && (
              <a
                href={event.link}
                className="dept-events-slider__button"
              >
                Learn More →
              </a>
            )}

          </div>

        </motion.article>

      </AnimatePresence>

      <div className="dept-events-slider__footer">

        <button onClick={prev}>
          ←
        </button>

        <div className="dept-events-slider__dots">

          {events.map((_, index) => (

            <button
              key={index}
              className={`dept-events-slider__dot ${
                index === current ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

        <button onClick={next}>
          →
        </button>

      </div>

    </aside>
  );
}