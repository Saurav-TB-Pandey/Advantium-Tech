import { motion, useScroll, useTransform } from "framer-motion";

const { div: MotionDiv } = motion;

const Castle = ({ left = "10%", bottom = "-6%", zIndex = 3 }) => {
  const { scrollY } = useScroll();
  const castleY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <MotionDiv
      style={{
        position: "absolute",
        y: castleY,
        left,
        bottom,
        zIndex,
      }}
    >
      <svg width="160" height="140" viewBox="0 0 160 140" fill="#8896cc">
        {/* Main castle structure */}
        <rect x="40" y="50" width="80" height="70" fill="#a8b2cc" />

        {/* Castle towers */}
        <rect x="30" y="40" width="20" height="80" fill="#9ba6c0" />
        <rect x="110" y="40" width="20" height="80" fill="#9ba6c0" />
        <polygon points="30,40 40,25 50,40" fill="#8896cc" />
        <polygon points="110,40 120,25 130,40" fill="#8896cc" />

        {/* Central tower */}
        <rect x="70" y="20" width="20" height="30" fill="#9ba6c0" />
        <polygon points="70,20 80,5 90,20" fill="#8896cc" />

        {/* Windows and details */}
        <rect x="45" y="60" width="10" height="15" fill="#6b7a9c" />
        <rect x="75" y="60" width="10" height="15" fill="#6b7a9c" />
        <rect x="105" y="60" width="10" height="15" fill="#6b7a9c" />
        <rect x="35" y="50" width="5" height="10" fill="#6b7a9c" />
        <rect x="120" y="50" width="5" height="10" fill="#6b7a9c" />
        <rect x="75" y="30" width="10" height="10" fill="#6b7a9c" />

        {/* Castle gate */}
        <rect x="65" y="80" width="30" height="40" fill="#6b7a9c" />
        <path d="M65,80 Q80,65 95,80" fill="#6b7a9c" />

        {/* Bridge */}
        <rect x="10" y="110" width="30" height="10" fill="#8896cc" />
        <rect x="120" y="110" width="30" height="10" fill="#8896cc" />
      </svg>
    </MotionDiv>
  );
};

export default Castle;
