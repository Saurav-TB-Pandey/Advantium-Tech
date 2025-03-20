import {
  Box,
  Typography,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaCloud,
  FaServer,
  FaRobot,
  FaShieldAlt,
  FaCode,
  FaEthereum,
  FaMobileAlt,
  FaLaptopCode,
  FaCog,
  FaShoppingCart,
  FaCogs,
  FaChartLine,
  FaTools,
  FaGlobe,
  FaSync,
  FaClipboardCheck,
} from "react-icons/fa";

// Styled components
const TechCard = styled(Paper)`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled(Box)`
  margin-bottom: 1rem;
`;

const TechName = styled(Typography)`
  font-weight: 600;
  margin-top: 1rem;
`;

const SectionTitle = styled(Typography)`
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;

  &:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #3f51b5;
    border-radius: 2px;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Technology data
const techData = [
  {
    icon: FaReact,
    name: "React",
    color: "#61DAFB",
    description: "Building responsive and dynamic web applications.",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "#68a063",
    description: "Scalable backend development for web applications.",
  },
  {
    icon: FaJs,
    name: "JavaScript",
    color: "#F7DF1E",
    description: "Powerful scripting language for interactive web apps.",
  },
  {
    icon: FaDatabase,
    name: "Databases",
    color: "#00758F",
    description: "Efficient data storage and management solutions.",
  },
  {
    icon: FaCloud,
    name: "Cloud Computing",
    color: "#2196F3",
    description: "AWS, Azure, and Google Cloud infrastructure solutions.",
  },
  {
    icon: FaServer,
    name: "DevOps & CI/CD",
    color: "#FF9800",
    description: "Automating deployments and cloud infrastructure.",
  },
  {
    icon: FaShieldAlt,
    name: "Cybersecurity",
    color: "#9C27B0",
    description: "Protecting applications with security best practices.",
  },
  {
    icon: FaCode,
    name: "Full Stack Development",
    color: "#4CAF50",
    description: "End-to-end development using modern web technologies.",
  },
  {
    icon: FaLaptopCode,
    name: "Enterprise Software",
    color: "#795548",
    description: "Custom ERP, CRM, and business software solutions.",
  },
  {
    icon: FaShoppingCart,
    name: "E-commerce Solutions",
    color: "#FF5722",
    description:
      "Building online stores with Shopify, WooCommerce, and custom platforms.",
  },
  {
    icon: FaCogs,
    name: "API Development",
    color: "#FFEB3B",
    description: "Custom API development and third-party integrations.",
  },
  {
    icon: FaTools,
    name: "Tech Support & Maintenance",
    color: "#607D8B",
    description: "Ongoing IT support and troubleshooting services.",
  },

  {
    icon: FaSync,
    name: "Cloud Migration",
    color: "#3F51B5",
    description: "Seamless migration of applications and data to the cloud.",
  },
];

const Technologies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="technologies"
      sx={{
        py: { xs: 6, md: 4 },
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionTitle variant="h3" component="h2">
              Technologies We Use
            </SectionTitle>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
                px: { xs: 2, md: 0 },
              }}
            >
              We leverage cutting-edge technologies to build robust and scalable
              solutions for our clients
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* ✅ Replaced MUI Grid with CSS Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            {techData.map((tech) => (
              <Box key={tech.name} sx={{ width: "100%" }}>
                <motion.div variants={itemVariants}>
                  <TechCard>
                    <IconWrapper>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <tech.icon
                          size={isMobile ? 40 : 50}
                          color={tech.color}
                        />
                      </motion.div>
                    </IconWrapper>
                    <TechName variant="h6">{tech.name}</TechName>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {tech.description}
                    </Typography>
                  </TechCard>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Technologies;
