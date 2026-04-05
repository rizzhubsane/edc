import { motion } from 'framer-motion';

/* ── Animated SVG Backgrounds ─────────────────────────────────────────── */

/** BGMission – concentric rings that expand outward on hover (target/focus) */
const BGMission = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.3 } }}
    transition={{ duration: 1, ease: 'backInOut' }}
    className="absolute inset-0 z-0"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.7, y: -20 } }}
      transition={{ duration: 1, ease: 'backInOut', delay: 0.1 }}
      cx="160"
      cy="340"
      r="75"
      fill="rgba(255,255,255,0.10)"
    />
    <motion.circle
      variants={{ hover: { scaleY: 0.6, y: -30 } }}
      transition={{ duration: 1, ease: 'backInOut', delay: 0.15 }}
      cx="160"
      cy="340"
      r="130"
      fill="rgba(255,255,255,0.07)"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.2, y: -25 } }}
      transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
      cx="160"
      cy="340"
      rx="75"
      ry="25"
      fill="rgba(255,255,255,0.08)"
    />
  </motion.svg>
);

/** BGVision – layered diamond paths that ascend on hover (aspiration/sight) */
const BGVision = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.2 } }}
    transition={{ duration: 1, ease: 'backInOut' }}
    className="absolute inset-0 z-0"
  >
    <motion.path
      variants={{ hover: { y: -45 } }}
      transition={{ duration: 1, ease: 'backInOut', delay: 0.3 }}
      d="M160 310 L215 360 L160 410 L105 360 Z"
      fill="rgba(255,255,255,0.12)"
    />
    <motion.path
      variants={{ hover: { y: -45 } }}
      transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
      d="M160 260 L235 340 L160 420 L85 340 Z"
      fill="rgba(255,255,255,0.08)"
    />
    <motion.path
      variants={{ hover: { y: -45 } }}
      transition={{ duration: 1, ease: 'backInOut', delay: 0.1 }}
      d="M160 210 L255 330 L160 450 L65 330 Z"
      fill="rgba(255,255,255,0.05)"
    />
  </motion.svg>
);

/** BGWork – two offset rectangles that swap positions on hover (action/movement) */
const BGWork = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: 'backInOut' }}
    className="absolute inset-0 z-0"
  >
    <motion.rect
      x="20"
      width="140"
      height="140"
      rx="14"
      fill="rgba(255,255,255,0.10)"
      variants={{ hover: { y: 230, rotate: '90deg', scaleX: 2 } }}
      style={{ y: 220 }}
      transition={{ delay: 0.2, duration: 1, ease: 'backInOut' }}
    />
    <motion.rect
      x="160"
      width="140"
      height="140"
      rx="14"
      fill="rgba(255,255,255,0.07)"
      variants={{ hover: { y: 20, rotate: '90deg', scaleX: 2 } }}
      style={{ y: 230 }}
      transition={{ delay: 0.2, duration: 1, ease: 'backInOut' }}
    />
  </motion.svg>
);

/* ── Card data (defined after BGComponents so refs resolve) ───────────── */

const pillars = [
  {
    id: 'mission',
    label: 'Our Purpose',
    title: 'Our Mission',
    description:
      'To foster a culture of innovation and entrepreneurship among students by providing the right resources, mentorship, and network to build scalable ventures.',
    background: 'bg-[#0F2557]',
    BGComponent: BGMission,
  },
  {
    id: 'vision',
    label: 'Our Future',
    title: 'Our Vision',
    description:
      'To make IIT Delhi the premier hub for student startups in Asia, where every innovative idea has the opportunity to become a global enterprise.',
    background: 'bg-[#2D1B66]',
    BGComponent: BGVision,
  },
  {
    id: 'work',
    label: 'What We Do',
    title: 'Our Work',
    description:
      'We organize hackathons, pitching sessions, mentorship clinics, and networking events that bridge the gap between academic learning and real-world execution.',
    background: 'bg-[#065F5F]',
    BGComponent: BGWork,
  },
];

/* ── Components ───────────────────────────────────────────────────────── */

const PillarCard = ({ label, title, description, background, BGComponent }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: 'backInOut' }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 ${background} shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
          {label}
        </span>
        <motion.h3
          initial={{ scale: 0.9 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: 'backInOut' }}
          className="my-2 block origin-top-left font-heading font-extrabold text-4xl leading-tight"
        >
          {title}
        </motion.h3>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{description}</p>
      </div>
      <BGComponent />
    </motion.div>
  );
};

export const MissionVisionWork = () => {
  return (
    <div className="mx-auto flex w-fit flex-wrap justify-center gap-6">
      {pillars.map((pillar) => (
        <PillarCard key={pillar.id} {...pillar} />
      ))}
    </div>
  );
};
