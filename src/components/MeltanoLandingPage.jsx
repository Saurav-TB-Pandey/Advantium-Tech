import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import MovingGlobe from "./MovingGlobe";
import Mountains from "./Animations/Mountains";

const { div: MotionDiv } = motion;

// Hero section (keeping the existing code)
const HeroSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 0rem 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const PrimaryButton = styled(Button)`
  background-color: #4c6ef5;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  &:hover {
    background-color: #3b5bdb;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #4c6ef5;
  padding: 0.6rem 1.5rem;
  border: 1px solid #4c6ef5;
  border-radius: 4px;
  &:hover {
    background-color: rgba(76, 110, 245, 0.1);
  }
`;

// MeltanoLandingPage Component
const MeltanoLandingPage = () => {
  const { scrollY } = useScroll();

  // Add more animated elements
  const titleY = useTransform(scrollY, [0, 200], [0, 20]);
  const buttonOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        {/* Animated Clouds */}
        <MovingGlobe />
        <MovingGlobe left="75%" top="35%" />
        <MotionDiv style={{ y: titleY, zIndex: 2 }}>
          <Typography
            variant="h1"
            color="#2d1b69"
            fontSize="5rem"
            fontWeight="700"
            lineHeight="1"
          >
            Extract & Load
            <br />
            <Box component="span" sx={{ color: "#f783ac" }}>
              /
            </Box>
            with joy
            <Box component="span" sx={{ color: "#f783ac" }}>
              /
            </Box>
          </Typography>
        </MotionDiv>

        <Typography
          variant="h6"
          color="#2d1b69"
          mt={2}
          maxWidth="600px"
          zIndex={2}
        >
          CLI & version control for ELT without limitations
        </Typography>

        <MotionDiv style={{ opacity: buttonOpacity, zIndex: 2 }}>
          <ButtonContainer>
            <PrimaryButton variant="contained">Explore Services</PrimaryButton>
            <SecondaryButton variant="outlined">Contact Us</SecondaryButton>
          </ButtonContainer>
        </MotionDiv>
      </HeroSection>

      {/* Animated Mountains and Castle */}
      <Mountains />
    </>
  );
};

export default MeltanoLandingPage;
