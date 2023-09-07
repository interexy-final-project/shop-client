import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CommonHeader from "../app/components/common-header";
import HeroImage from "../assets/imgs/shop-hero.png";
import Footer from "../app/components/footer";
import { colors, theme } from "../assets/themes";
import HeroLeaves from "../assets/imgs/hero-leaves.png";
import HeroShopnow from "../assets/imgs/hero-shopnow.png";
import { ITypeCardProps, TypeCard } from "../main/type-card";
import { ProductTypes } from "../enums/product-types.enum";
import JeansMen from "../assets/imgs/jeans-men.png";
import ShirtMen from "../assets/imgs/shirt-men.png";
import TShirtMen from "../assets/imgs/tshirt-men.png";
import JeansWomen from "../assets/imgs/jeans-women.jpg";
import ShirtWomen from "../assets/imgs/shirt-women.png";
import TShirtWomen from "../assets/imgs/tshirt-women.png";

export const MainPage: React.FC = () => {
  const typesMen = [
    { typeName: ProductTypes.JEANS, image: JeansMen },
    { typeName: ProductTypes.SHIRT, image: ShirtMen },
    { typeName: ProductTypes.TSHIRT, image: TShirtMen },
  ];

  const typesWomen = [
    { typeName: ProductTypes.JEANS, image: JeansWomen },
    { typeName: ProductTypes.SHIRT, image: ShirtWomen },
    { typeName: ProductTypes.TSHIRT, image: TShirtWomen },
  ];

  const targetRef = useRef(null);

  function scrollToTarget() {
    if (targetRef.current) {
      (targetRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const verticalLineStyle = {
    position: "relative",
    paddingLeft: 3,
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: 6,
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10,
    },
  };

  return (
    <>
      <CommonHeader />

      <Box
        height="100vh"
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

            <Button variant="shop-white-button" onClick={scrollToTarget}>
              Shop now
            </Button>
          </Stack>
        </Box>

        <Box margin="0 6.25rem" position="relative">
          <Stack direction="row" justifyContent="center">
            <img src={HeroLeaves} />
            <img src={HeroShopnow} />
          </Stack>

          <Stack
            spacing={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              p: "4rem 12rem ",
              position: "absolute",
              top: "0%",
              left: "5%",
              maxWidth: "50rem",
            }}
          >
            <Typography variant="h2" color={colors.white}>
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </Typography>
            <Typography variant="h6" color={colors.white}>
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </Typography>
            <Button variant="shop-white-button">Shop now</Button>
          </Stack>
        </Box>

        <Box ref={targetRef}>
          <Stack m="2rem">
            <Typography
              variant="h3"
              color={colors.secondary}
              sx={verticalLineStyle}
            >
              Categories For Men
            </Typography>
            <Grid container spacing={5} justifyContent="center" p="2rem 0">
              {typesMen.map((type) => (
                <Grid item key={type.typeName + Math.random()}>
                  <TypeCard image={type.image} typeName={type.typeName} />
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack m="2rem">
            <Typography
              variant="h3"
              color={colors.secondary}
              sx={verticalLineStyle}
            >
              Categories For Women
            </Typography>
            <Grid container spacing={5} justifyContent="center" p="2rem 0">
              {typesWomen.map((type) => (
                <Grid item key={type.typeName + Math.random()}>
                  <TypeCard image={type.image} typeName={type.typeName} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
