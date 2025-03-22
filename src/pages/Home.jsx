import {
    Box,
    useMediaQuery,
    useTheme,
    CssBaseline,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import Header from "../components/Header";
import MeltanoLandingPage from "../components/MeltanoLandingPage";

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

// Styled components
const PageWrapper = styled(Box)`
    background: linear-gradient(180deg, #c8b6ff 0%, #a0a3ff 100%);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
`;

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageWrapper>
                <Header />
                <MeltanoLandingPage />
            </PageWrapper>
        </ThemeProvider>
    );
}

export default Home;
