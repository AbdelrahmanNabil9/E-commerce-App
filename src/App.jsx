import Header2 from "./components/Header/Header2";
import Header1 from "./components/Header/Header1";
import Header3 from "./components/Header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTopBtn from "./components/Scroll/ScrollToTopBtn";
function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider
			// @ts-ignore
			value={colorMode}
		>
			<ThemeProvider
				// @ts-ignore
				theme={theme}
			>
				<CssBaseline />
				<Header1 />
				<Header2 />
				<Header3 />
				<Box sx={{ bgcolor: theme.
// @ts-ignore
				palette.bg.main }}>
					<Hero />

					<Main/>
				</Box>
				<Footer/>

				<ScrollToTopBtn/>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
