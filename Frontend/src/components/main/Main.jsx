import {
	Box,
	Container,
	Dialog,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import "./Main.css";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../redux/product";

const Main = () => {
	const [alignment, setAlignment] = useState("left");

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	const theme = useTheme();
	const { data, error, isLoading } = useGetProductByNameQuery('products?populate=*')

	if (data) {
		return (
			<Container sx={{ py: 9 }}>
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
					flexWrap={"wrap"}
					gap={3}
				>
					<Box>
						<Typography variant="h6"> Selected Products</Typography>
						<Typography variant="body1" fontWeight={300}>
							All our New Arrivals in an exclusive Brand Collection
						</Typography>
					</Box>
	
					<ToggleButtonGroup
						value={alignment}
						exclusive
						onChange={handleAlignment}
						aria-label="text alignment"
						color="error"
					>
						<ToggleButton
							className="toggle-button"
							value="left"
							aria-label="left aligned"
							sx={{ color: theme.palette.text.primary }}
						>
							All Products
						</ToggleButton>
						<ToggleButton
							className="toggle-button"
							value="center"
							aria-label="centered"
							sx={{ mx: "16px !important", color: theme.palette.text.primary }}
						>
							Men Category
						</ToggleButton>
						<ToggleButton
							className="toggle-button"
							value="right"
							aria-label="right aligned"
							sx={{ color: theme.palette.text.primary }}
						>
							Women Category
						</ToggleButton>
					</ToggleButtonGroup>
				</Stack>
	
				<Stack
					direction={"row"}
					flexWrap={"wrap"}
					justifyContent={"space-between"}
				>
					{data.data.map((item) => {
						return (
							<Card
								sx={{
									maxWidth: 333,
									mt: 6,
									":hover .MuiCardMedia-root": {
										rotate: "1deg",
										scale: "1.1",
										transition: "0.3s",
									},
								}}
							>
								<CardMedia
									sx={{ height: 275 }}
									image={`http://localhost:1337${item.attributes.productImg.data[0].attributes.url}`}
									title="green iguana"
								/>
								<CardContent>
									<Stack
										direction={"row"}
										justifyContent={"space-between"}
										alignItems={"center"}
									>
										<Typography gutterBottom variant="h6" component="div">
											{item.attributes.productTitle}
										</Typography>
										<Typography variant="subtitle1" component="p">
										${item.attributes.productPrice}
										</Typography>
									</Stack>
									<Typography variant="body2" color="text.secondary">
									{item.attributes.productDescription}
									</Typography>
								</CardContent>
								<CardActions sx={{ justifyContent: "space-between" }}>
									<Button
										onClick={handleClickOpen}
										sx={{ textTransform: "capitalize" }}
										size="small"
									>
										<AddShoppingCartOutlinedIcon
											sx={{ mr: 1 }}
											fontSize="small"
										/>
										add to cart
									</Button>
									<Rating precision={0.1} name="read-only" value={item.attributes.productRating} readOnly />
								</CardActions>
							</Card>
						);
					})}
				</Stack>
	
				<Dialog
					onClose={handleClose}
					open={open}
					sx={{ " .MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
				>
					<IconButton
						sx={{
							":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
							position: "absolute",
							top: 0,
							right: 10,
						}}
						onClick={handleClose}
					>
						<Close />
					</IconButton>
	
					<ProductDetails/>
				</Dialog>
			</Container>
		);
	}
};
export default Main;
