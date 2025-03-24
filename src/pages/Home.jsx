import {
  Box,
  useMediaQuery,
  useTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import styled from "@emotion/styled";
import Header from "../components/Header";
import MeltanoLandingPage from "../components/MeltanoLandingPage";

// Styled components
const PageWrapper = styled(Box)`
  background: linear-gradient(180deg, #c8b6ff 0%, #a0a3ff 100%);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

function Home() {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down("sm"));
  useMediaQuery(theme.breakpoints.between("sm", "md"));

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
