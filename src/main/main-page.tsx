import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CommonHeader from "../app/components/common-header";
import HeroImage from "../assets/imgs/shop-hero.png";
import Footer from "../app/components/footer";
import { colors, theme } from "../assets/themes";
import HeroLeaves from "../assets/imgs/hero-leaves.png";
import HeroShopnow from "../assets/imgs/hero-shopnow.png";
import { ITypeCardProps, TypeCard } from "./components/type-card";
import { ProductTypes } from "../enums/product-types.enum";
import JeansMen from "../assets/imgs/jeans-men.png";
import ShirtMen from "../assets/imgs/shirt-men.png";
import TShirtMen from "../assets/imgs/tshirt-men.png";
import JeansWomen from "../assets/imgs/jeans-women.jpg";
import ShirtWomen from "../assets/imgs/shirt-women.png";
import TShirtWomen from "../assets/imgs/tshirt-women.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  getProducts,
  getProductsByCategory,
} from "../app/category/store/category.actions";
import { useNavigate } from "react-router";
import { ProductCategories } from "../enums/product-categories.enum";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t } = useTranslation();

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

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const filter = useSelector((state: RootState) => state.products.filter);

  // const category = useSelector((state: RootState) => state.products.category);

  const handleCategory = () => {
    dispatch(getProducts(filter));
  };

  const handleCategoryWomen = () => {
    navigate("/category/?=women");
  };

  const handleCategoryMen = () => {
    navigate("/category/?=men");
  };

  const handleCategoryChildren = () => {
    navigate("/category/?=children");
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
              {t("main.clothes")}
            </Typography>
            <Typography variant="h1" color={colors.white}>
              {t("main.summerSale")}
            </Typography>
            <Typography variant="h4" color={colors.white}>
              {t("main.clothDesc")}
            </Typography>

            <Button variant="shop-white-button" onClick={scrollToTarget}>
              {t("main.shopNow")}
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
              {t("main.slogan1")}
            </Typography>
            <Typography variant="h6" color={colors.white}>
              {t("main.slogan2")}
            </Typography>
            <Button variant="shop-white-button">{t("main.shopNow")}</Button>
          </Stack>
        </Box>

        <Box ref={targetRef}>
          <Stack m="2rem">
            <Link
              underline="hover"
              variant="h3"
              color={colors.secondary}
              sx={verticalLineStyle}
              onClick={handleCategoryMen}
            >
              {t("main.menCategory")}
            </Link>

            <Grid container spacing={5} justifyContent="center" p="2rem 0">
              {typesMen.map((type) => (
                <Grid item key={type.typeName + Math.random()}>
                  <TypeCard
                    image={type.image}
                    typeName={type.typeName}
                    handleCategory={handleCategory}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack m="2rem">
            <Link
              underline="hover"
              variant="h3"
              color={colors.secondary}
              sx={verticalLineStyle}
              onClick={handleCategoryWomen}
            >
              {t("main.womenCategory")}
            </Link>

            <Grid container spacing={5} justifyContent="center" p="2rem 0">
              {typesWomen.map((type) => (
                <Grid item key={type.typeName + Math.random()}>
                  <TypeCard
                    image={type.image}
                    typeName={type.typeName}
                    handleCategory={handleCategory}
                  />
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

export default MainPage;
