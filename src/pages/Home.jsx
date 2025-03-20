import {
  Box,
  Container,
  useMediaQuery,
  useTheme,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <Header />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <HeroSection />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            style={{
              padding: isMobile
                ? "20px 16px"
                : isTablet
                ? "30px 24px"
                : "40px 0",
              backgroundColor: "#ffffff",
            }}
          >
            <Container maxWidth="lg">
              <Services />
            </Container>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            style={{
              padding: isMobile
                ? "20px 16px"
                : isTablet
                ? "30px 24px"
                : "40px 0",
              backgroundColor: "#f0f2f5",
            }}
          >
            <Container maxWidth="lg">
              <Technologies />
            </Container>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            style={{
              padding: isMobile
                ? "20px 16px"
                : isTablet
                ? "30px 24px"
                : "40px 0",
              backgroundColor: "#ffffff",
            }}
          >
            <Container maxWidth="lg">
              <ContactForm />
            </Container>
          </motion.div>
        </motion.div>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
