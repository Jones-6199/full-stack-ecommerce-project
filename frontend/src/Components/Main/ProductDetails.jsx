import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Picture2 from "../images/1.jpg";
import Picture3 from "../images/se.png";
import Img from "../images/img.png";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {/* Main Image */}
      <Box sx={{ display: "flex" }}>
        <img width={300}  src={Picture2} alt="Main Product" />
      </Box>

      {/* Product Info */}
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography
          my={0.4}
          fontSize={"22px"}
          color={"crimson"}
          variant="h6"
        >
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        {/* Small Images */}
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {[Picture3, Img].map((item, index) => (
            <img
              style={{ borderRadius: 3 }}
              height={100}
              width={90}
              key={index}
              src={item}
              alt={`product-${index}`}
            />
          ))}
        </Stack>

        {/* Buy Button */}
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
