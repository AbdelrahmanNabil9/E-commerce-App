import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTopBtn = () => {
	return (
		<Zoom in={useScrollTrigger({threshold: 100})}>
			<Fab
        onClick={() =>{
          window.scrollTo(0,0)
        }}
				size="small"
				variant="circular"
				sx={{ position: "fixed", bottom: 33, right: 33 }}
				color="primary"
				aria-label="add"
			>
				<KeyboardArrowUp fontSize="medium" />
			</Fab>
		</Zoom>
	);
};
export default ScrollToTopBtn;
