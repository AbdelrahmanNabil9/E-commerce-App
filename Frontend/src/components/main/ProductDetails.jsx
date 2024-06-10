import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material"


const ProductDetails = () => {
  return(
    <Box sx={{ display:"flex", alignItems:"center", gap: 2.5,
      flexDirection: { xs: "column", sm: "row"}
    }}>
      <Box sx={{ display: "flex"}}>
        <img src="assets\t-shirts-products\1\images.jpg" alt="" width={300} />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left"}}}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="body1" sx={{ color: "red"}}>
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        <Stack direction={"row"} gap={1} my={2} sx={{justifyContent: { xs: "center", sm: "left"}}}>
          {[`assets\t-shirts-products\\1\images.jpg`, "assets\t-shirts-products\\2\\2.jpg"].map((item) => {
            return(
              <img src={item} key={item} width={90} height={100} style={{ borderRadius: 3}} />
            )
          })}
        </Stack>
        <Button
          sx={{ textTransform: "capitalize", mb: 1}}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1}} fontSize="small"/>
          Buy now
        </Button>  
      </Box>
    </Box>

  )
}
export default ProductDetails;