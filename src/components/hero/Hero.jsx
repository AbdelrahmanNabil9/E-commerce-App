import { Box, Container, Stack, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const Hero = () => {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center"}}>
      <Box flexGrow={1}>
        slider
      </Box>

      <Box sx={{display: {xs: "none", md: "block"}}}>
        <Box sx={{ position: "relative"}}>
          <img src="assets\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-17.jpg" alt="" />
          <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "30px"}}>
            <Typography variant= "caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography variant= "h6"
              sx={{
                color: "#2B3445",
                lineHeight: "18px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography variant= "h6"
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

              "&:hover":{
                color: "#D23F57"
              },
            }}
            href="#"
            underline="none"
            >
              Shop Now
              <ArrowForwardIcon sx={{ fontSize: "13px"}} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative"}}>
         <img src="assets\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-16.jpg" alt="" />
         <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "30px"}}>
            <Typography variant= "caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              GAMING 4K
            </Typography>
            <Typography variant= "h6"
              sx={{
                color: "#2B3445",
                lineHeight: "18px",
                mt: 1,
              }}
            >
              DESKTOPS &
            </Typography>
            <Typography variant= "h6"
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

              "&:hover":{
                color: "#D23F57"
              },
            }}
            href="#"
            underline="none"
            >
              Shop Now
              <ArrowForwardIcon sx={{ fontSize: "13px"}} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}
export default Hero;