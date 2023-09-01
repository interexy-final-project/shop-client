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
import { ProductListParams, fetchProducts } from "./services/productService";
import TypesFilter from "./components/types-filter.comp";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { findNodePath } from "./utils/tree-utils";
import { Product } from "./types/product.type";
import MultipleSizesSelector from "./components/multiple-sizes-selector.comp";
import MultipleColorsSelector from "./components/multiple-colors-selector.comp";
import l from "../../lang/l";

const menu = [
  {
    id: "1",
    name: "trousers",
    kinds: [
      {
        id: "2",
        name: "jeans",
      },
      {
        id: "3",
        name: "breeches",
      },
    ],
  },
  {
    id: "4",
    name: "skirts",
    kinds: [
      {
        id: "5",
        name: "mini",
      },
      {
        id: "6",
        name: "not-mini",
      },
    ],
  },
  {
    id: "7",
    name: "shirts",
    kinds: [
      {
        id: "8",
        name: "short",
      },
      {
        id: "9",
        name: "long",
      },
    ],
  },
  {
    id: "10",
    name: "pants",
    kinds: [
      {
        id: "11",
        name: "nice",
      },
      {
        id: "12",
        name: "not nice",
      },
    ],
  },
];

const NameBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1.25),
  paddingTop: theme.spacing(1.25),
  paddingLeft: theme.spacing(1.9),
  paddingRight: theme.spacing(1.9),
  border: "1px solid #BEBCBD",
  justifyContent: "space-between",
  display: "flex",
}));

const Category = () => {
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const availableSizes = ["XS", "S", "M", "L", "XL"];
  const availableColors = ["Red", "Blue", "Green", "Orange", "Teal"];
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleSizeSelection = (sizes: string[]) => {
    setSelectedSizes(sizes);
  };

  const handleColorSelection = (colors: string[]) => {
    setSelectedColors(colors);
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoadingProducts(true);

      const paramsMapping: Array<keyof ProductListParams> = ["type", "kind"];
      const params = selectedPath.reduce((acc, id, index) => {
        acc[paramsMapping[index]] = id;
        return acc;
      }, {} as ProductListParams);

      try {
        const response: Product[] = await fetchProducts(params);
        setProducts(response);
      } finally {
        setLoadingProducts(false);
      }
    };

    loadProducts();
  }, [selectedPath]);

  const handleNodeSelection = (selectedNodeId: string) => {
    const expandedNodes = findNodePath(menu, selectedNodeId) ?? [];
    setSelectedPath(expandedNodes);
  };
  return (
    <Grid container justifyContent={"center"} direction={"row"} spacing={2}>
      <Grid item xs={3}>
        <Stack direction={"column"} spacing={4} justifyContent={"flex-start"}>
          <Box>
            <Stack>
              <NameBox justifyContent={"space-between"}>
                <Typography variant="t4">{l("filter.title")}</Typography>

                <Typography variant="t4">
                  <FilterListIcon fontSize="large" />
                </Typography>
              </NameBox>
              <NameBox>
                <TypesFilter
                  tree={menu}
                  selectedPath={selectedPath}
                  onNodeSelect={handleNodeSelection}
                ></TypesFilter>
              </NameBox>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <NameBox>
                {" "}
                <Typography variant="t4">{l("filter.color")}</Typography>
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
                <Typography variant="t4">{l("filter.size")}</Typography>
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
            {l("filter.category")}{" "}
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
      </Grid>
    </Grid>
  );
};

export default Category;
