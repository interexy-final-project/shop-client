import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import CommonHeader from "../app/components/common-header";
import HeroImage from "../assets/imgs/shop-hero.png";
import Footer from "../app/components/footer";
import { colors } from "../assets/themes";
import HeroLeaves from "../assets/imgs/hero-leaves.png";
import HeroShopnow from "../assets/imgs/hero-shopnow.png";

export const MainPage: React.FC = () => {
  return (
    <>
      <CommonHeader />

      <Box
        sx={{ height: "100vh" }}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${HeroImage})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Stack
            spacing={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              p: "8rem 12rem",
            }}
          >
            <Typography variant="h5" color={colors.white}>
              T-shirt / Tops
            </Typography>
            <Typography variant="h1" color={colors.white}>
              Summer Value Pack
            </Typography>
            <Typography variant="h4" color={colors.white}>
              cool / colorful / comfy
            </Typography>

            <Button variant="shop-white-button">Shop now</Button>
          </Stack>
        </Box>

        <Box margin="0 6.25rem">
          <Stack direction="row" justifyContent="center" position="relative">
            <img src={HeroLeaves} />
            <img src={HeroShopnow} />
          </Stack>

          <Stack
            spacing={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              p: "8rem 12rem",
            }}
            position="absolute"
          >
            <Typography variant="h1">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </Typography>
            <Typography variant="h4">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </Typography>
            <Button variant="shop-white-button">Shop now</Button>
          </Stack>
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
