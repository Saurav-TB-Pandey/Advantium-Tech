import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Styled components
const HeroContainer = styled(Box)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 100px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0 60px;
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: #3f51b5;
  font-weight: 600;
  text-transform: none;
  font-size: 1rem;
  padding: 12px 32px;
  border-radius: 50px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeroContainer>
      {/* Background shapes */}
      <motion.div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          zIndex: 0,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          zIndex: 0,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? "2.5rem" : "4rem",
                marginBottom: 2,
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              Welcome to Advantium Tech
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                marginBottom: 5,
                lineHeight: 1.5,
                opacity: 0.9,
              }}
            >
              We build scalable and high-performance software solutions.
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <StyledButton variant="contained" size="large" href={"#services"}>
                Get Started
              </StyledButton>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
