import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Styled components
const FormContainer = styled(Paper)`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const ContactButton = styled(Button)`
  margin-top: 1rem;
  background-color: #3f51b5;
  color: white;
  &:hover {
    background-color: #2c387e;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 2 },
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Typography variant="h3" component="h2">
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "600px", mx: "auto", mt: 2 }}
            >
              Have a question or want to work with us? Fill out the form below.
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FormContainer elevation={3}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                onChange={handleChange}
                value={formData.message}
                required
              />
              <ContactButton variant="contained" type="submit">
                Send Message
              </ContactButton>
            </form>
          </FormContainer>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactForm;
