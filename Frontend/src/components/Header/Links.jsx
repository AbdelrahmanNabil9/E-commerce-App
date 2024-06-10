import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
	return (
		<Box
			sx={{
				":hover .dropDown": { display: "block" },
				display: "flex",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Typography variant="body1">{title}</Typography>
			<ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
			<Box
				className="dropDown"
				sx={{
					position: "absolute",
					top: "100%",
					minWidth: "170px",
					left: "50%",
					transform: "translateX(-50%)",
					display: "none",
					zIndex: 20,
				}}
			>
				<Paper sx={{ mt: 2 }}>
					<nav aria-label="secondary mailbox folders">
						<List>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemText
										sx={{
											"& .MuiTyography-root": {
												fontSize: "15px",
												fontWeight: 300,
											},
										}}
										primary="Dshboard"
									/>
								</ListItemButton>
							</ListItem>
							<ListItem
								disablePadding
								sx={{ ":hover .subLink": { display: "block" } }}
							>
								<ListItemButton>
									<ListItemText
										sx={{
											"& .MuiTyography-root": {
												fontSize: "15px",
												fontWeight: 300,
											},
										}}
										primary="Products"
									/>
									<Box flexGrow={1} />
									<KeyboardArrowRightOutlined fontSize="small" />
								</ListItemButton>
								<Box
									className="subLink"
									sx={{
										display: "none",
										position: "absolute",
										top: 0,
										left: "100%",
									}}
								>
									<Paper sx={{ ml: 1, minWidth: 150 }}>
										<nav aria-label="secondary mailbox folders">
											<List>
												<ListItem disablePadding>
													<ListItemButton>
														<ListItemText primary="Trash" />
													</ListItemButton>
												</ListItem>
												<ListItem disablePadding>
													<ListItemButton component="a" href="#simple-list">
														<ListItemText primary="Spam" />
													</ListItemButton>
												</ListItem>
											</List>
										</nav>
									</Paper>
								</Box>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemText
										sx={{
											"& .MuiTyography-root": {
												fontSize: "15px",
												fontWeight: 300,
											},
										}}
										primary="Trash"
									/>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemText
										sx={{
											"& .MuiTyography-root": {
												fontSize: "15px",
												fontWeight: 300,
											},
										}}
										primary="Trash"
									/>
								</ListItemButton>
							</ListItem>
						</List>
					</nav>
				</Paper>
			</Box>
		</Box>
	);
};
export default Links;
