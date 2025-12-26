import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const isMobile = window.innerWidth < 480;
const FLAP_COLOR = "#dddd";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

interface EnvelopeIntroProps {
  onFinish: () => void;
}

/* ===============================
   INVITATION CARD (BOTTOM)
================================ */
const InvitationCard: React.FC<{ revealed: boolean }> = ({ revealed }) => (
  <motion.div
    initial={{ y: isMobile ? -10 : -30 }}
    animate={{
      y: revealed ? (isMobile ? -110 : -150) : isMobile ? -10 : -30,
    }}
    transition={{
      duration: isMobile ? 0.5 : 0.8,
      ease: "easeOut",
    }}
    className="
      absolute
      inset-x-4 sm:inset-x-6
      top-4 sm:top-6 bottom-4 sm:bottom-6
      bg-[#faf8f3]
      shadow-md
      flex items-center justify-center
      z-10
    "
  >
    <img src="/monogram.png" className="h-16 opacity-80" />
  </motion.div>
);

/* ===============================
   ENVELOPE BODY (MIDDLE / MASK)
================================ */
const EnvelopeBody = () => (
  <>
    {/* INNER LINING — TRIANGULAR POCKET */}
    <div
      className="absolute top-0 left-0 right-0 h-[45%] z-15"
      style={{
        background: "#ffffff",
        clipPath: "polygon(0 0, 50% 65%, 100% 0)",
      }}
    />

    {/* OUTER BODY — SLIGHT OVERLAP */}
    <div
      className="absolute inset-0 bg-[#2a2a2a] shadow-xl z-20"
      style={{
        clipPath: "polygon(0 0, 50% 24%, 100% 0, 100% 100%, 0 100%)",
        boxShadow: "0 0 0 1px #F7E7CE",
      }}
    />

    {/* INNER EDGE SHADOW (DEPTH FIX) */}
    <div
      className="absolute top-0 left-0 right-0 h-[30%] z-25 pointer-events-none"
      style={{
        clipPath: "polygon(0 0, 50% 28%, 100% 0)",
        boxShadow: "inset 0 -6px 8px rgba(0,0,0,0.25)",
      }}
    />
  </>
);
/* ===============================
   FLAP (TOP)
================================ */
const EnvelopeFlap: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
  <motion.div
    initial={{ rotateX: 0 }}
    animate={{ rotateX: -160 }}
    transition={{
      duration: isMobile ? 0.6 : 0.9,
      ease: "easeInOut",
    }}
    onAnimationComplete={onOpen}
    style={{
      transformOrigin: "top",
      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
      boxShadow: "0 0 0 1px #F7E7CE",
    }}
    className="
      absolute top-0 left-0 right-0 h-1/2
      bg-white
      z-30
    "
  />
);

/* ===============================
   MAIN WRAPPER
================================ */
const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onFinish }) => {
  const [flapOpened, setFlapOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(onFinish, 2600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (prefersReducedMotion) {
    onFinish();
    return null;
  }

  return (
    <div className="fixed inset-0 z-[999] bg-[#F7E7CE] flex items-center justify-center">
      <div className="relative w-[240px] h-[160px] sm:w-[280px] sm:h-[190px] md:w-[320px] md:h-[220px] perspective-1000">
        {/* Bottom */}
        <InvitationCard revealed={flapOpened} />

        {/* Middle */}
        <EnvelopeBody />

        {/* Top */}
        <EnvelopeFlap onOpen={() => setFlapOpened(true)} />
      </div>
    </div>
  );
};

export default EnvelopeIntro;
