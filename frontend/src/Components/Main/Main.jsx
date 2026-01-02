import {
  Box,
  Button,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useState } from "react";
import { useGetProductsQuery } from "../../redux/product";

const Main = () => {
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

  const [endpoint, setEndpoint] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetProductsQuery(endpoint);

  if (isLoading) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography sx={{ py: 10, textAlign: "center" }}>
        Error fetching products
      </Typography>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <ToggleButtonGroup
        value={endpoint}
        exclusive
        onChange={(e, value) => value && setEndpoint(value)}
        sx={{ mb: 4 }}
      >
        <ToggleButton value={allProductsAPI}>All</ToggleButton>
        <ToggleButton value={menCategoryAPI}>Men</ToggleButton>
        <ToggleButton value={womenCategoryAPI}>Women</ToggleButton>
      </ToggleButtonGroup>

      <Stack direction="row" flexWrap="wrap" gap={4}>
        {data?.data.map((item) => (
          <Card key={item.id} sx={{ width: 280 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={`http://localhost:1337${item.attributes.productImg?.data?.[0]?.attributes?.url}`}
            />
            <CardContent>
              <Typography variant="h6">
                {item.attributes.productTitle}
              </Typography>
              <Typography>${item.attributes.productPrice}</Typography>
            </CardContent>
            <CardActions>
              <Button>
                <AddShoppingCartOutlinedIcon />
              </Button>
              <Rating
                value={item.attributes.productRating || 4}
                readOnly
              />
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default Main;
