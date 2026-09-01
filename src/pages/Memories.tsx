import { useState } from "react";
import type { MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { photos } from "../data/content";

export function Memories() {
  const [open, setOpen] = useState<number | null>(null);
  const next = (e?: MouseEvent) => {
    e?.stopPropagation();
    setOpen((v) => (v === null ? 0 : (v + 1) % photos.length));
  };
  const prev = (e?: MouseEvent) => {
    e?.stopPropagation();
    setOpen((v) => (v === null ? 0 : (v - 1 + photos.length) % photos.length));
  };
  return (
    <section className="page memories-page">
      <div className="inner">
        <header className="page-head memories-head">
          <span className="kicker">
            <Sparkles size={13} /> chapter two · little pieces of us
          </span>
          <h2>
            Our <em>memories</em> ♡
          </h2>
          <p>
            Five little snapshots. A million feelings. Tap any one and keep it
            close for a moment.
          </p>
        </header>
        <div className="memory-grid">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              className={`memory-card memory-${i + 1}`}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, rotate: 0, scale: 1.018 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(i)}
            >
              <span className="memory-image">
                <img src={p.src} alt={p.caption} />
                <span className="image-glow" />
                <span className="memory-heart">
                  <Heart size={15} fill="currentColor" />
                </span>
              </span>
              <span className="memory-info">
                <small>memory · 0{i + 1}</small>
                <strong>{p.caption}</strong>
                <span className="memory-arrow">open ♡</span>
              </span>
            </motion.button>
          ))}
        </div>
        <div className="memory-bottom">
          <span>♡ five moments</span>
          <span>and so many more to come ✦</span>
        </div>
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button className="lightbox-close" onClick={() => setOpen(null)}>
              <X />
            </button>
            <button className="lightbox-arrow left" onClick={prev}>
              <ChevronLeft />
            </button>
            <button className="lightbox-arrow right" onClick={next}>
              <ChevronRight />
            </button>
            <motion.div
              className="lightbox-card"
              initial={{ scale: 0.88, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-photo">
                <img src={photos[open].src} alt={photos[open].caption} />
              </div>
              <div className="lightbox-copy">
                <small>memory · 0{open + 1}</small>
                <h3>{photos[open].caption}</h3>
                <span>♡ a little piece of us</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
