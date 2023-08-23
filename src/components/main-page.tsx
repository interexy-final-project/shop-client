import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommonHeader from "../app/components/common-header";
import HeroImage from "../assets/imgs/shop-hero.png";
import Footer from "../app/components/footer";
import { colors } from "../assets/themes";
import HeroLeaves from "../assets/imgs/hero-leaves.png";
import HeroShopnow from "../assets/imgs/hero-shopnow.png";
import { ITypeCardProps, TypeCard } from "../app/components/type-card";

export const MainPage: React.FC = () => {
  const [types, setTypes] = useState<ITypeCardProps[]>([]);

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

        <Box margin="0 6.25rem" position="relative">
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

        <Box>
          <Stack>
            <Typography variant="h3" color={colors.secondary} sx={{}}>
              Categories For Men
            </Typography>
            {types.map((type) => (
              <Grid item key={type.id}>
                <TypeCard
                  id={type.id}
                  image={type.image}
                  typeName={type.typeName}
                />
              </Grid>
            ))}
          </Stack>

          <Stack>
            <Typography variant="h3" color={colors.secondary}>
              Categories For Women
            </Typography>
            {types.map((type) => (
              <Grid item key={type.id}>
                <TypeCard
                  id={type.id}
                  image={type.image}
                  typeName={type.typeName}
                />
              </Grid>
            ))}
          </Stack>
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
