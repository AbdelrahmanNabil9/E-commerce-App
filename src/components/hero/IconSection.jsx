import {
	Box,
	Container,
	Divider,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const IconSection = () => {
	const theme = useTheme();
	return (
		<Container
			sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff", mt: 2 }}
		>
			<Stack
				direction={"row"}
				alignItems={"center"}
				sx={{ flexWrap: "wrap" }}
				divider={
					useMediaQuery("(min-width:600px)") ? (
						<Divider orientation="vertical" flexItem />
					) : null
				}
			>
				<MyBox
					icon={<ElectricBoltIcon fontSize="large" />}
					title={"Fast Delivery"}
					subtitle={"Start From 10$"}
				/>
				<MyBox
					icon={<CreditScoreOutlinedIcon fontSize="large" />}
					title={"Money Guarantee"}
					subtitle={"7 Days Back"}
				/>
				<MyBox
					icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
					title={"365 Days"}
					subtitle={"for Free Return"}
				/>
				<MyBox
					icon={<AccessAlarmOutlinedIcon fontSize="large" />}
					title={"Payment"}
					subtitle={"Secure System"}
				/>
			</Stack>
		</Container>
	);
};
export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subtitle }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: 250,
				display: "flex",
				flexGrow: 1,
				gap: 3,
				justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
				alignItems: "center",
				py: 1,
			}}
		>
			{icon}
			<Box>
				<Typography variant="body1">{title}</Typography>
				<Typography
					sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
				>
					{subtitle}
				</Typography>
			</Box>
		</Box>
	);
};
