import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner16 from "../images/banner-16.jpg";
import banner17 from "../images/banner-17.jpg";
import banner15 from "../images/banner-15.jpg";
import banner25 from "../images/banner-25.jpg";
import "./slider.css";
import IconSection from "./IconSection";

const mySlider = [
  { text: "MEN", link: banner15 },
  { text: "WOMEN", link: banner25 },
];

export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{ pt: 2, mt: 2.5, display: "flex", gap: 2 }}>
        {/* Left Slider */}
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
        >
          {mySlider.map((item) => (
            <SwiperSlide key={item.text} className="parent-slider">
              <img src={item.link} alt={item.text} />

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
                  sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  variant="h3"
                >
                  {item.text}
                </Typography>

                <Stack
                  sx={{ justifyContent: { xs: "center", sm: "left" } }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography color="#333" mr={1} variant="h5">
                    SALE UP TO
                  </Typography>

                  <Typography color="#D23F57" variant="h5">
                    30% OFF
                  </Typography>
                </Stack>

                <Typography
                  color="#000"
                  fontWeight={300}
                  my={1}
                  variant="body1"
                >
                  Get free shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 0px 15px rgba(43,52,59,0.1)",
                    color: "#FFF",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    },
                  }}
                  variant="contained"
                >
                  Shop Now
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Banners */}
        <Box
          sx={{
            display: { xs: "none", md: "flex", width: "25%" },
            flexDirection: "column",
            gap: 2,
            minWidth: "26%",
          }}
        >
          {/* Banner 1 */}
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={banner17}
              alt="Summer Collection"
              sx={{ width: "100%", borderRadius: 1 }}
            />

            <Stack
              spacing={1}
              sx={{
                position: "absolute",
                top: "50%",
                left: 24,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
                variant="caption"
                fontWeight={600}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
                variant="h5"
                fontWeight={700}
              >
                SUMMER
              </Typography>

              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
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
                <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Link>
            </Stack>
          </Box>

          {/* Banner 2 */}
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={banner16}
              alt="Gaming Collection"
              sx={{ width: "100%", borderRadius: 1 }}
            />

            <Stack
              spacing={1}
              sx={{
                position: "absolute",
                top: "50%",
                left: 24,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
                variant="caption"
                fontWeight={600}
              >
                GAMING 4K
              </Typography>

              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
                variant="h6"
                fontWeight={700}
              >
                DESKTOPS <br /> & LAPTOPS
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
                <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
}
