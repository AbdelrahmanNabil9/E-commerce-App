import { Box, Typography } from "@mui/material"

const Footer = () => {
  return(
    <Box sx={{
      bgcolor: "#2B3445",
      py: 1.3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }}>
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{fontSize: 18}}
      >
        Designed and Developed By BILLY @2024
      </Typography>
    </Box>
  )
}
export default Footer;