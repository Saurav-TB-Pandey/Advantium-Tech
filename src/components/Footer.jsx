import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Styled components
const FooterContainer = styled(Box)`
  background-color: #0a0a0a;
  color: white;
  padding: 1rem 0;
  text-align: center;
`;

const FooterText = styled(Typography)`
  font-size: 0.9rem;
  color: #b0b0b0;
`;

// Animation variant
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <FooterContainer>
        <Container maxWidth="lg">
          <FooterText>
            &copy; {new Date().getFullYear()} Advantium Tech. All Rights
            Reserved.
          </FooterText>
        </Container>
      </FooterContainer>
    </motion.div>
  );
};

export default Footer;
