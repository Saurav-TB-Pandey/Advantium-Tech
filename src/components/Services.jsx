import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Sample services data
const services = [
  {
    title: "Web Development",
    desc: "Modern websites and web apps using React, Next.js, and Angular.",
    icon: "💻",
  },
  {
    title: "Backend Solutions",
    desc: "Scalable and secure backend development with Node.js, Express, and Python.",
    icon: "🔧",
  },
  {
    title: "Full Stack Development",
    desc: "Complete frontend and backend solutions with React, Next.js, and databases.",
    icon: "🌐",
  },
  {
    title: "Cloud Solutions",
    desc: "AWS, Azure, and Google Cloud infrastructure setup, migration, and management.",
    icon: "☁️",
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automate deployments and optimize infrastructure using Kubernetes, Docker, and Jenkins.",
    icon: "🚀",
  },
  {
    title: "Cybersecurity Consulting",
    desc: "Secure your applications and infrastructure with penetration testing and risk assessment.",
    icon: "🔒",
  },
  {
    title: "Enterprise Software Solutions",
    desc: "Custom ERP, CRM, and SaaS applications for large-scale enterprises.",
    icon: "🏢",
  },
  {
    title: "IT Strategy & Consulting",
    desc: "Technology roadmaps, IT audits, and digital transformation strategies.",
    icon: "📈",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric designs, wireframes, and prototypes for web and mobile apps.",
    icon: "🎨",
  },
  {
    title: "E-commerce Solutions",
    desc: "Scalable and high-performance e-commerce platforms using Shopify, WooCommerce, and custom builds.",
    icon: "🛒",
  },
  {
    title: "API Development & Integration",
    desc: "Custom APIs, third-party integrations, and microservices architecture.",
    icon: "🔗",
  },
  {
    title: "Cloud Migration & Optimization",
    desc: "Seamless migration of applications and data to cloud platforms with cost optimization.",
    icon: "☁️",
  },
  {
    title: "Tech Support & Maintenance",
    desc: "Ongoing IT support, troubleshooting, and software maintenance.",
    icon: "🛠️",
  },
];

// Styled components
const SectionTitle = styled(Typography)`
  position: relative;
  display: inline-block;
  margin-bottom: 60px;
  font-weight: 700;

  &:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #3f51b5;
  }
`;

const ServiceCard = styled(Card)`
  height: 100%;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const IconContainer = styled(Box)`
  font-size: 3rem;
  margin-bottom: 20px;
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 6, md: 2 },
        backgroundColor: "#f9fafc",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle variant={isMobile ? "h3" : "h2"}>
              Our Services
            </SectionTitle>
          </motion.div>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ✅ Using CSS Grid instead of MUI Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard>
                  <CardContent sx={{ p: 4 }}>
                    <IconContainer>{service.icon}</IconContainer>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "#1a237e",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#546e7a",
                        lineHeight: 1.6,
                      }}
                    >
                      {service.desc}
                    </Typography>
                  </CardContent>
                </ServiceCard>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
