import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { ProductCategories } from "../enums/product-categories.enum";
import { AppDispatch, RootState } from "../store";
import { colors, theme } from "../assets/themes";
import { ProductTypes } from "../enums/product-types.enum";

//======================  COMPONENTS  =========================//

import CommonHeader from "../app/components/common-header";
import Footer from "../app/components/footer";
import { TypeCard } from "./components/type-card";

//======================  IMAGES  =========================//

import JeansMen from "../assets/imgs/jeans-men.png";
import ShirtMen from "../assets/imgs/shirt-men.png";
import TShirtMen from "../assets/imgs/tshirt-men.png";
import JeansWomen from "../assets/imgs/jeans-women.jpg";
import ShirtWomen from "../assets/imgs/shirt-women.png";
import TShirtWomen from "../assets/imgs/tshirt-women.png";
import JeansChildren from "../assets/imgs/kid-jeans.jpg";
import ShirtChildren from "../assets/imgs/kid-shirt.jpg";
import TShirtChildren from "../assets/imgs/kid-tshirt.jpg";
import HeroLeaves from "../assets/imgs/hero-leaves.png";
import HeroShopnow from "../assets/imgs/hero-shopnow.png";
import HeroImage from "../assets/imgs/shop-hero.png";

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  const typesMen = [
    {
      typeName: ProductTypes.JEANS,
      image: JeansMen,
      category: ProductCategories.MEN,
    },
    {
      typeName: ProductTypes.SHIRT,
      image: ShirtMen,
      category: ProductCategories.MEN,
    },
    {
      typeName: ProductTypes.TSHIRT,
      image: TShirtMen,
      category: ProductCategories.MEN,
    },
  ];

  const typesWomen = [
    {
      typeName: ProductTypes.JEANS,
      image: JeansWomen,
      category: ProductCategories.WOMEN,
    },
    {
      typeName: ProductTypes.SHIRT,
      image: ShirtWomen,
      category: ProductCategories.WOMEN,
    },
    {
      typeName: ProductTypes.TSHIRT,
      image: TShirtWomen,
      category: ProductCategories.WOMEN,
    },
  ];

  const typesChildren = [
    {
      typeName: ProductTypes.JEANS,
      image: JeansChildren,
      category: ProductCategories.CHILDREN,
    },
    {
      typeName: ProductTypes.SHIRT,
      image: ShirtChildren,
      category: ProductCategories.CHILDREN,
    },
    {
      typeName: ProductTypes.TSHIRT,
      image: TShirtChildren,
      category: ProductCategories.CHILDREN,
    },
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

  const handleCategoryWomen = () => {
    navigate("/category/?category=women");
  };

  const handleCategoryMen = () => {
    navigate("/category/?category=men");
  };

  const handleCategoryChildren = () => {
    navigate("/category/?category=children");
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
            <Box style={{ position: "relative" }}>
              <img
                src={HeroLeaves}
                alt="hero-leaves"
                style={{ width: "100%" }}
              />
              <Stack
                spacing={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  p: "4rem 12rem",
                  position: "absolute",
                  top: "0%",
                  right: "-10%",
                  maxWidth: "50rem",
                }}
              >
                <Typography variant="h2" color={colors.white}>
                  {t("main.slogan1")}
                </Typography>
                <Typography variant="h6" color={colors.white}>
                  {t("main.slogan2")}
                </Typography>
                <Button variant="shop-white-button" onClick={scrollToTarget}>
                  {t("main.shopNow")}
                </Button>
              </Stack>
            </Box>
            <Box style={{ position: "relative" }}>
              <img
                src={HeroShopnow}
                alt="hero-shop-now"
                style={{ width: "100%" }}
              />
            </Box>
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
                    category={type.category}
                    // handleCategory={() => handleCategory(type.typeName)}
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
                    category={type.category}

                    // handleCategory={() => handleCategory(type.typeName)}
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
              onClick={handleCategoryChildren}
            >
              {t("main.childrenCategory")}
            </Link>

            <Grid container spacing={5} justifyContent="center" p="2rem 0">
              {typesChildren.map((type) => (
                <Grid item key={type.typeName + Math.random()}>
                  <TypeCard
                    image={type.image}
                    typeName={type.typeName}
                    category={type.category}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainPage;
