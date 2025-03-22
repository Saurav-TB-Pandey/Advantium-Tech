import styled from "@emotion/styled";
import LogoImage from "../assets/logo.svg";
import { Box, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";

// Header component
const HeaderDiv = styled(Box)`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 10;
`;

const Logo = styled(Box)`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #2d1b69;
    img {
        height: 40px;
        margin-right: 10px;
    }
`;

const NavMenu = styled(Box)`
    display: flex;
    gap: 2rem;
    a {
        color: #2d1b69;
        text-decoration: none;
        font-weight: 500;
    }
`;

const IconGroup = styled(Box)`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderDiv>
            <Header>
                <Logo>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                        fill="#2d1b69"
                    >
                        <path d="M50 10C26.8 10 8 28.8 8 52s18.8 42 42 42 42-18.8 42-42S73.2 10 50 10zm0 70c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z" />
                        <path
                            d="M65 40L35 60M35 40L65 60"
                            strokeWidth="8"
                            stroke="#2d1b69"
                            fill="none"
                        />
                    </svg>
                    <span>meltano</span>
                    <Typography variant="body2" sx={{ ml: 1, opacity: 0.7 }}>
                        by arch
                    </Typography>
                </Logo>
                <NavMenu>
                    <a href="#services">Services</a>
                    <a href="#technologies">Technologies</a>
                    <a href="#carrier">Carrier</a>
                    <a href="#about-us">About Us</a>
                    <a href="#contact-us">Contact Us</a>
                </NavMenu>
                <IconGroup>
                    <FaGithub size={24} color="#2d1b69" />
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#2d1b69"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                </IconGroup>
            </Header>
        </HeaderDiv>
    );
};

export default Header;
