import { Box, Container, Stack, Typography, useTheme } from "@mui/material"
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import { useState } from "react";
import "./Main.css"

const Main = () => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme()
  return(
    <Container sx={{py:9}}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
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
      <ToggleButton className="toggle-button" value="left" aria-label="left aligned" sx={{ color: theme.palette.text.primary}}>
        All Products
      </ToggleButton>
      <ToggleButton className="toggle-button" value="center" aria-label="centered" sx={{ mx: "16px !important", color: theme.palette.text.primary}}>
        Men Category
      </ToggleButton>
      <ToggleButton className="toggle-button" value="right" aria-label="right aligned" sx={{ color: theme.palette.text.primary}}>
        Women Category
      </ToggleButton>
    </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {["Aaa", "bbb", "ccc"].map(() =>{
          return(
            <Card sx={{ maxWidth: 333, mt: 6,
              ":hover .MuiCardMedia-root":{rotate:"1deg", scale:"1.1", transition:"0.3s"}
             }}>
            <CardMedia
              sx={{ height: 275 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Stack 
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
              <Typography gutterBottom variant="h6" component="div">
                T-shirt
              </Typography>
              <Typography variant="subtitle1" component="p">
                $12.99
              </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between"}}>
              <Button sx={{ textTransform: "capitalize"}} size="small">
                <AddShoppingCartOutlinedIcon sx={{ mr:1}} fontSize="small"/>
                add to cart
              </Button>
              <Rating precision={0.1} name="read-only" value={4.5} readOnly />
            </CardActions>
          </Card>
          )
        })}
      </Stack>
    </Container>
  )
}
export default Main;