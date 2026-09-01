import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
export function Surprise() {
  const [open, setOpen] = useState(false);
  return (
    <section className="page surprise-page">
      <div className="inner">
        <span className="eyebrow">the last little secret</span>
        {!open ? (
          <>
            <h2>One more thing...</h2>
            <p>I saved the sweetest part for last. 🎀</p>
            <motion.button
              className="gift"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
            >
              <span>🎀</span>
              <Gift size={78} />
              <small>open your surprise</small>
            </motion.button>
          </>
        ) : (
          <motion.div
            className="final"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="final-heart">
              <Heart size={50} fill="currentColor" />
            </div>
            <img src={`${import.meta.env.BASE_URL}images/photo-05.jpg`} alt="Mariam" />
            <h2>You're my favorite person. ♡</h2>
            <p>
              If I could give you one thing today, it would be the ability to
              see yourself through my eyes for one minute — just so you could
              see how incredibly special you are to me.
            </p>
            <b>Happy Birthday, Sweetie. I love you. 💗</b>
          </motion.div>
        )}
      </div>
    </section>
  );
}
