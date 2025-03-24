import { motion, useScroll, useTransform } from "framer-motion";

const {
  div: MotionDiv,
  svg: MotionSVG,
  circle: MotionCircle,
  line: MotionLine,
} = motion;

const MovingGlobe = ({ left = "5%", top = "15%" }) => {
  const { scrollY } = useScroll();
  const cloudLeftY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <MotionDiv
      style={{
        position: "absolute",
        left,
        top,
        y: cloudLeftY,
        zIndex: 0,
      }}
    >
      {/* Globe made of bits/particles with purple theme */}
      <MotionSVG
        width="150"
        height="150"
        viewBox="0 0 150 150"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Circular grid lines - lighter and more subtle */}
        <circle
          cx="75"
          cy="75"
          r="50"
          fill="none"
          stroke="rgba(215, 205, 255, 0.4)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <circle
          cx="75"
          cy="75"
          r="35"
          fill="none"
          stroke="rgba(215, 205, 255, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />

        {/* Orbit lines - matching the soft purple theme */}
        <ellipse
          cx="75"
          cy="75"
          rx="50"
          ry="15"
          fill="none"
          stroke="rgba(215, 205, 255, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <ellipse
          cx="75"
          cy="75"
          rx="50"
          ry="15"
          fill="none"
          stroke="rgba(215, 205, 255, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          transform="rotate(60 75 75)"
        />

        {/* Data points/bits - using colors from the theme */}
        {/* Inner ring */}
        <MotionCircle
          cx="75"
          cy="45"
          r="3"
          fill="#9b8aff"
          animate={{
            cx: [75, 105, 75, 45, 75],
            cy: [45, 75, 105, 75, 45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <MotionCircle
          cx="105"
          cy="75"
          r="3"
          fill="#9b8aff"
          animate={{
            cx: [105, 75, 45, 75, 105],
            cy: [75, 105, 75, 45, 75],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2.5,
          }}
        />
        <MotionCircle
          cx="75"
          cy="105"
          r="3"
          fill="#9b8aff"
          animate={{
            cx: [75, 45, 75, 105, 75],
            cy: [105, 75, 45, 75, 105],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
        <MotionCircle
          cx="45"
          cy="75"
          r="3"
          fill="#9b8aff"
          animate={{
            cx: [45, 75, 105, 75, 45],
            cy: [75, 45, 75, 105, 75],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 7.5,
          }}
        />

        {/* Middle ring - with pink accent color from the slashes */}
        <MotionCircle
          cx="75"
          cy="35"
          r="2.5"
          fill="#f783ac"
          animate={{
            cx: [75, 115, 75, 35, 75],
            cy: [35, 75, 115, 75, 35],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        <MotionCircle
          cx="115"
          cy="75"
          r="2.5"
          fill="#f783ac"
          animate={{
            cx: [115, 75, 35, 75, 115],
            cy: [75, 115, 75, 35, 75],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 4.75,
          }}
        />
        <MotionCircle
          cx="75"
          cy="115"
          r="2.5"
          fill="#f783ac"
          animate={{
            cx: [75, 35, 75, 115, 75],
            cy: [115, 75, 35, 75, 115],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 8.5,
          }}
        />
        <MotionCircle
          cx="35"
          cy="75"
          r="2.5"
          fill="#f783ac"
          animate={{
            cx: [35, 75, 115, 75, 35],
            cy: [75, 35, 75, 115, 75],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 12.25,
          }}
        />

        {/* Random bits across the globe - more subtle and fewer */}
        {[...Array(8)].map((_, i) => (
          <MotionCircle
            key={i}
            cx={75 + (Math.random() * 80 - 40)}
            cy={75 + (Math.random() * 80 - 40)}
            r={Math.random() * 1.5 + 1} // Increased size for visibility
            fill={Math.random() > 0.3 ? "rgba(215, 205, 255, 0.9)" : "#f783ac"} // Brighter colors
            animate={{
              opacity: [0, 0.9, 0], // Increased opacity
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Data transfer lines - bold and visible */}
        {[...Array(3)].map((_, i) => {
          const angle1 = Math.random() * Math.PI * 2;
          const angle2 = Math.random() * Math.PI * 2;
          const radius = Math.random() * 25 + 25;

          const x1 = 75 + Math.cos(angle1) * radius;
          const y1 = 75 + Math.sin(angle1) * radius;
          const x2 = 75 + Math.cos(angle2) * radius;
          const y2 = 75 + Math.sin(angle2) * radius;

          return (
            <MotionLine
              key={i + "line"}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(215, 205, 255, 0.8)" // Brighter stroke
              strokeWidth="1.2" // Increased stroke width
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.8, 0.8, 0], // Increased opacity
              }}
              transition={{
                duration: Math.random() * 4 + 5,
                repeat: Infinity,
                delay: Math.random() * 15,
                times: [0, 0.4, 0.6, 1],
              }}
            />
          );
        })}
      </MotionSVG>
    </MotionDiv>
  );
};

export default MovingGlobe;
