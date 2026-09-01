import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown, Flower2 } from "lucide-react";
export function Home() {
  return (
    <section className="page home-page">
      <div className="hero-art">
        <span>♡</span>
        <span>✦</span>
        <span>❀</span>
        <span>♡</span>
      </div>
      <div className="hero inner">
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          a tiny world made just for you
        </motion.div>
        <motion.div
          className="hero-orbit"
          animate={{ rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          <i />
          <i />
          <i />
        </motion.div>
        <motion.div className="hero-heart">
          <Heart size={34} fill="currentColor" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Happy Birthday,
          <br />
          <em>Sweetie</em>
          <span> ♡</span>
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Hi Mariam... I made this little place because one birthday message
          could never hold everything I want to tell you.
        </motion.p>
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.86, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
        >
          <span className="photo-tape">for you 🎀</span>
          <img src={`${import.meta.env.BASE_URL}images/photo-04.jpg`} alt="Mariam" />
          <span className="photo-caption">my pretty girl ♡</span>
          <span className="photo-spark">✦</span>
        </motion.div>
        <div className="actions">
          <Link className="btn primary" to="/story">
            start our little story <Heart size={17} fill="currentColor" />
          </Link>
          <Link className="btn ghost" to="/letter">
            I have something to tell you <span>♡</span>
          </Link>
        </div>
        <motion.div
          className="scroll-cue"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          scroll softly <ArrowDown size={14} />
        </motion.div>
        <Sparkles className="spark spark-a" />
        <Flower2 className="spark spark-b" />
      </div>
    </section>
  );
}
