import { motion, useScroll, useTransform } from "framer-motion";
import { Box } from "@mui/material";
import Castle from "./Castle";

const { div: MotionDiv } = motion;

const Mountains = () => {
  const { scrollY } = useScroll();

  const mountainBgY = useTransform(scrollY, [0, 500], [0, -20]);
  const mountainFgY = useTransform(scrollY, [0, 500], [0, 50]);
  return (
    <Box
      sx={{
        position: "relative",
        height: "260px",
        overflow: "hidden",
      }}
    >
      {/* Castle - more detailed and realistic */}
      <Castle bottom="-16%" />
      <Castle left="85%" bottom="0%" zIndex={3} />
      <Castle left="50%" bottom="-8%" zIndex={0} />
      {/* Background Mountains */}
      <MotionDiv
        style={{
          position: "absolute",
          width: "100%",
          height: "200px",
          bottom: 0,
          y: mountainBgY,
          zIndex: 2,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L100,120 L200,160 L300,100 L400,140 L500,80 L600,130 L700,90 L800,150 L900,110 L1000,130 L1000,200 Z"
            fill="#8896cc"
          />
        </svg>
      </MotionDiv>

      {/* Foreground Mountains */}
      <MotionDiv
        style={{
          position: "absolute",
          width: "100%",
          height: "150px",
          bottom: 0,
          y: mountainFgY,
          zIndex: 4,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 L100,100 L150,130 L250,80 L350,120 L450,70 L550,110 L650,60 L750,90 L850,50 L950,100 L1000,80 L1000,150 Z"
            fill="#5a678c"
          />
        </svg>
      </MotionDiv>
    </Box>
  );
};

export default Mountains;
