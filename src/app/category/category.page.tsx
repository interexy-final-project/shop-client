import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../app/components/product-card.comp";
import TypesFilter from "./components/types-filter.comp";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MultipleSizesSelector from "./components/multiple-sizes-selector.comp";
import MultipleColorsSelector from "./components/multiple-colors-selector.comp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getColors, getProducts, getSizes } from "./store/category.actions";
import { ProductSizes } from "../../enums/product-sizes.enum";
import { ProductColors } from "../../enums/product-colors.enum";
import { ProductTypes } from "../../enums/product-types.enum";
import { useTranslation } from "react-i18next";
import { PriceFilter } from "./components/price-filter";
import { useLocation } from "react-router-dom";
import { ProductCategories } from "../../enums/product-categories.enum";
import { setCategory, setPage, setType } from "./store/category.slice";
import Pagination from "@mui/material/Pagination";
import {
  numberOfProductsSelector,
  productsSelector,
  filterSelector,
} from "./store/category.selectors";
import CommonHeader from "../components/common-header";
import Footer from "../components/footer";

const NameBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1.25),
  paddingTop: theme.spacing(1.25),
  paddingLeft: theme.spacing(1.9),
  paddingRight: theme.spacing(1.9),
  border: "1px solid #BEBCBD",
  justifyContent: "space-between",
  display: "flex",
}));

const Category: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const type = searchParams.get("type");

  const [loadingProducts, setLoadingProducts] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<ProductSizes[]>([]);
  const [selectedColors, setSelectedColors] = useState<ProductColors[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const products = useSelector(productsSelector);
  const filter = useSelector(filterSelector);
  const numberOfProducts = useSelector(numberOfProductsSelector);

  const availableColors = useSelector(
    (state: RootState) => state.products.colors,
  );
  const availableSizes = useSelector(
    (state: RootState) => state.products.sizes,
  );
  const menu = [ProductTypes.JEANS, ProductTypes.SHIRT, ProductTypes.TSHIRT];

  const handleSizeSelection = (sizes: ProductSizes[]) => {
    setSelectedSizes(sizes);
  };

  const handleColorSelection = (colors: ProductColors[]) => {
    setSelectedColors(colors);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    console.log(value);
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage]);

  useEffect(() => {
    if (products && numberOfProducts) {
      setTotalPages(Math.ceil(numberOfProducts / 10));
    }
  }, [products]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoadingProducts(true);
      try {
        dispatch(getProducts(filter));
      } finally {
        setLoadingProducts(false);
      }
    };

    loadProducts();
    dispatch(getColors());
    dispatch(getSizes());
  }, []);

  useEffect(() => {
    console.log("click filter");
    dispatch(getProducts(filter));
  }, [filter]);

  useEffect(() => {
    console.log(products, "ggg");

    if (category) {
      dispatch(setCategory(category));
    }

    if (type) {
      dispatch(setType(type));
    }
  }, [category, type]);
  return (
    <>
      <CommonHeader />
      <Grid container justifyContent={"center"} direction={"row"} spacing={2}>
        <Grid item xs={3}>
          <Stack direction={"column"} spacing={4} justifyContent={"flex-start"}>
            <Box>
              <Stack>
                <NameBox justifyContent={"space-between"}>
                  <Typography variant="t4">{t("filter.title")}</Typography>

                  <Typography variant="t4">
                    <FilterListIcon fontSize="large" />
                  </Typography>
                </NameBox>
                <NameBox>
                  <TypesFilter types={menu}></TypesFilter>
                </NameBox>
              </Stack>
            </Box>
            <Box>
              <PriceFilter />
            </Box>

            <Box>
              <Stack>
                <NameBox>
                  {" "}
                  <Typography variant="t4">{t("filter.color")}</Typography>
                  <Typography variant="t4">
                    <KeyboardArrowUpIcon fontSize="large" />
                  </Typography>
                </NameBox>
                <NameBox>
                  {" "}
                  <MultipleColorsSelector
                    availableColors={availableColors}
                    selectedColors={selectedColors}
                    onSelectColor={handleColorSelection}
                  />
                </NameBox>
              </Stack>
            </Box>
            <Box>
              <Stack>
                <NameBox>
                  <Typography variant="t4">{t("filter.size")}</Typography>
                  <Typography variant="t4">
                    <KeyboardArrowUpIcon fontSize="large" />
                  </Typography>
                </NameBox>
                <NameBox>
                  <MultipleSizesSelector
                    availableSizes={availableSizes}
                    selectedSizes={selectedSizes}
                    onSelectSize={handleSizeSelection}
                  />
                </NameBox>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid
          container
          item
          xs={8}
          justifyContent={"center"}
          spacing={4}
          direction={"row"}
        >
          <Grid item>
            <Typography variant={"t3"}>
              {t("filter.category")}
              {loadingProducts && <CircularProgress size={20} />}{" "}
            </Typography>
          </Grid>

          <Grid
            item
            direction="row"
            justifyContent="center"
            spacing={2}
            flexWrap={"wrap"}
            container
          >
            {products.map((product) => (
              <Grid item key={product.name}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={totalPages ?? 0}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Category;
