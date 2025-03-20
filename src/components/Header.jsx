import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.svg";

// Styled components using emotion
const StyledAppBar = styled(AppBar)`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoText = styled(Typography)`
  font-weight: 700;
  font-size: 1.5rem;
  color: #3f51b5;
  cursor: pointer;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #3f51b5;

    &:after {
      width: 100%;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3f51b5;
    transition: width 0.3s ease;
  }
`;

const MenuIconButton = styled(IconButton)`
  color: #333;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavContainer = styled(Box)`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ];

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: 250,
        paddingTop: 6,
        paddingX: 2,
      }}
      role="presentation"
      onClick={toggleMenu}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              borderBottom: "1px solid #eee",
              "&:hover": {
                backgroundColor: "rgba(63, 81, 181, 0.08)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 500,
                color: "#333",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <StyledAppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: { xs: "2px 0", md: "9px 0" },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={Logo} alt="Advantium Tech" width={150} />
            </motion.div>

            <NavContainer>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink href={item.href}>{item.label}</NavLink>
                </motion.div>
              ))}
            </NavContainer>

            <MenuIconButton
              edge="end"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ display: { md: "none" } }}
            >
              <FaBars />
            </MenuIconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleMenu}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  );
};

export default Header;
