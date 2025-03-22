import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import MovingGlobe from "./MovingGlobe";

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

    const mountainBgY = useTransform(scrollY, [0, 500], [0, -20]);
    const castleY = useTransform(scrollY, [0, 500], [0, -50]);
    const mountainFgY = useTransform(scrollY, [0, 500], [0, 50]);

    // Add more animated elements
    const titleY = useTransform(scrollY, [0, 200], [0, 20]);
    const buttonOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

    return (
        <>
            {/* Hero Section */}
            <HeroSection>
                {/* Animated Clouds */}
                <MovingGlobe />
                <MovingGlobe left="75%" />
                <motion.div style={{ y: titleY, zIndex: 2 }}>
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
                </motion.div>

                <Typography
                    variant="h6"
                    color="#2d1b69"
                    mt={2}
                    maxWidth="600px"
                    zIndex={2}
                >
                    CLI & version control for ELT without limitations
                </Typography>

                <motion.div style={{ opacity: buttonOpacity, zIndex: 2 }}>
                    <ButtonContainer>
                        <PrimaryButton variant="contained">
                            Explore Services
                        </PrimaryButton>
                        <SecondaryButton variant="outlined">
                            Contact Us
                        </SecondaryButton>
                    </ButtonContainer>
                </motion.div>
            </HeroSection>

            {/* Animated Mountains and Castle */}
            <Box
                sx={{
                    position: "relative",
                    height: "300px",
                    overflow: "hidden",
                }}
            >
                {/* Castle - more detailed and realistic */}
                <motion.div
                    style={{
                        position: "absolute",
                        left: "10%",
                        bottom: "30%",
                        y: castleY,
                        zIndex: 3,
                    }}
                >
                    <svg
                        width="160"
                        height="140"
                        viewBox="0 0 160 140"
                        fill="#8896cc"
                    >
                        {/* Main castle structure */}
                        <rect
                            x="40"
                            y="50"
                            width="80"
                            height="70"
                            fill="#a8b2cc"
                        />

                        {/* Castle towers */}
                        <rect
                            x="30"
                            y="40"
                            width="20"
                            height="80"
                            fill="#9ba6c0"
                        />
                        <rect
                            x="110"
                            y="40"
                            width="20"
                            height="80"
                            fill="#9ba6c0"
                        />
                        <polygon points="30,40 40,25 50,40" fill="#8896cc" />
                        <polygon points="110,40 120,25 130,40" fill="#8896cc" />

                        {/* Central tower */}
                        <rect
                            x="70"
                            y="20"
                            width="20"
                            height="30"
                            fill="#9ba6c0"
                        />
                        <polygon points="70,20 80,5 90,20" fill="#8896cc" />

                        {/* Windows and details */}
                        <rect
                            x="45"
                            y="60"
                            width="10"
                            height="15"
                            fill="#6b7a9c"
                        />
                        <rect
                            x="75"
                            y="60"
                            width="10"
                            height="15"
                            fill="#6b7a9c"
                        />
                        <rect
                            x="105"
                            y="60"
                            width="10"
                            height="15"
                            fill="#6b7a9c"
                        />
                        <rect
                            x="35"
                            y="50"
                            width="5"
                            height="10"
                            fill="#6b7a9c"
                        />
                        <rect
                            x="120"
                            y="50"
                            width="5"
                            height="10"
                            fill="#6b7a9c"
                        />
                        <rect
                            x="75"
                            y="30"
                            width="10"
                            height="10"
                            fill="#6b7a9c"
                        />

                        {/* Castle gate */}
                        <rect
                            x="65"
                            y="80"
                            width="30"
                            height="40"
                            fill="#6b7a9c"
                        />
                        <path d="M65,80 Q80,65 95,80" fill="#6b7a9c" />

                        {/* Bridge */}
                        <rect
                            x="10"
                            y="110"
                            width="30"
                            height="10"
                            fill="#8896cc"
                        />
                        <rect
                            x="120"
                            y="110"
                            width="30"
                            height="10"
                            fill="#8896cc"
                        />
                    </svg>
                </motion.div>

                {/* Background Mountains */}
                <motion.div
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
                </motion.div>

                {/* Foreground Mountains */}
                <motion.div
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
                </motion.div>
            </Box>
        </>
    );
};

export default MeltanoLandingPage;
