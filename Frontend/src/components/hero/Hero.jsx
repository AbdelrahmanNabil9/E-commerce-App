import {
	Box,
	Container,
	Stack,
	Link,
	Typography,
	Button,
	useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";

const Hero = () => {
	const theme = useTheme();
	return (
		<Container>
			<Box
				sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
			>
				<Swiper
					pagination={{ dynamicBullets: true }}
					loop={true}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src="assets\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-15.jpg" />
						<Box
							sx={{
								[theme.breakpoints.up("sm")]: {
									position: "absolute",
									left: "10%",
									textAlign: "left",
								},
								[theme.breakpoints.down("sm")]: {
									pt: 4,
									pb: 6,
								},
							}}
						>
							<Typography sx={{ color: "#222" }} variant="h6">
								LIFESTYLE COLLECTION
							</Typography>
							<Typography
								sx={{
									color: "#222",
									fontWeight: 400,
									my: 1,
								}}
								variant="h4"
							>
								MEN
							</Typography>
							<Stack
								sx={{ justifyContent: { xs: "center", sm: "left" } }}
								direction={"row"}
								alignItems={"center"}
							>
								<Typography color={"#333"} mr={1} variant="h5">
									SALE UP TO
								</Typography>
								<Typography color={"#D23F57"} variant="h5">
									30% OFF
								</Typography>
							</Stack>
							<Typography
								sx={{ color: "000", fontWeight: 300, my: 1 }}
								variant="body1"
							>
								Get Free Shipping on Orders over $99.00
							</Typography>
							<Button
								sx={{
									px: 5,
									py: "1",
									mt: "2",
									backgroundColor: "#222",
									boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
									color: "#fff",
									borderRadius: "1px",
									"&:hover": {
										bgcolor: "#151515",
										boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
									},
								}}
								variant="contained"
							>
								shop now
							</Button>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<img src="assets\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-25.jpg" />
						<Box
							sx={{
								[theme.breakpoints.up("sm")]: {
									position: "absolute",
									left: "10%",
									textAlign: "left",
								},
								[theme.breakpoints.down("sm")]: {
									pt: 4,
									pb: 6,
								},
							}}
						>
							<Typography sx={{ color: "#222" }} variant="h6">
								LIFESTYLE COLLECTION
							</Typography>
							<Typography
								sx={{
									color: "#222",
									fontWeight: 400,
									my: 1,
								}}
								variant="h4"
							>
								WOMEN
							</Typography>
							<Stack
								sx={{ justifyContent: { xs: "center", sm: "left" } }}
								direction={"row"}
								alignItems={"center"}
							>
								<Typography color={"#333"} mr={1} variant="h5">
									SALE UP TO
								</Typography>
								<Typography color={"#D23F57"} variant="h5">
									30% OFF
								</Typography>
							</Stack>
							<Typography
								sx={{ color: "000", fontWeight: 300, my: 1 }}
								variant="body1"
							>
								Get Free Shipping on Orders over $99.00
							</Typography>
							<Button
								sx={{
									px: 5,
									py: "1",
									mt: "2",
									backgroundColor: "#222",
									boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
									color: "#fff",
									borderRadius: "1px",
									"&:hover": {
										bgcolor: "#151515",
										boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
									},
								}}
								variant="contained"
							>
								shop now
							</Button>
						</Box>
					</SwiperSlide>{" "}
				</Swiper>

				<Box sx={{ display: { xs: "none", md: "block", minWidth: "27%" } }}>
					<Box sx={{ position: "relative" }}>
						<img
							width={"100%"}
							src="assets\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-17.jpg"
							alt=""
						/>
						<Stack
							sx={{
								position: "absolute",
								top: "50%",
								transform: "translateY(-50%)",
								left: "30px",
							}}
						>
							<Typography
								variant="caption"
								sx={{
									color: "#2B3445",
									fontSize: "18px",
								}}
							>
								NEW ARRIVALS
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: "#2B3445",
									lineHeight: "18px",
									mt: 1,
								}}
							>
								SUMMER
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: "#2B3445",
								}}
							>
								SALE 20% OFF
							</Typography>
							<Link
								sx={{
									color: "#2B3445",
									display: "flex",
									alignItems: "center",
									gap: "5px",
									transition: "0.2s",

									"&:hover": {
										color: "#D23F57",
									},
								}}
								href="#"
								underline="none"
							>
								Shop Now
								<ArrowForwardIcon sx={{ fontSize: "13px" }} />
							</Link>
						</Stack>
					</Box>
					<Box sx={{ position: "relative" }}>
						<img
							width={"100%"}
							src="assets\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-16.jpg"
							alt=""
						/>
						<Stack
							sx={{
								position: "absolute",
								top: "50%",
								transform: "translateY(-50%)",
								left: "30px",
							}}
						>
							<Typography
								variant="caption"
								sx={{
									color: "#2B3445",
									fontSize: "18px",
								}}
							>
								GAMING 4K
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: "#2B3445",
									lineHeight: "18px",
									mt: 1,
								}}
							>
								DESKTOPS &
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: "#2B3445",
								}}
							>
								LAPTOPS
							</Typography>
							<Link
								sx={{
									color: "#2B3445",
									display: "flex",
									alignItems: "center",
									gap: "5px",
									transition: "0.2s",

									"&:hover": {
										color: "#D23F57",
									},
								}}
								href="#"
								underline="none"
							>
								Shop Now
								<ArrowForwardIcon sx={{ fontSize: "13px" }} />
							</Link>
						</Stack>
					</Box>
				</Box>
			</Box>
			<IconSection />
		</Container>
	);
};
export default Hero;
