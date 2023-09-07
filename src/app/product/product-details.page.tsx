import React, { useState } from "react";
import ProductSlider from "./components/product-slider.comp";
import ProductConfiguration from "./components/product-configuration.comp";
import Grid from "@mui/material/Grid";
import ProductDescription from "./components/product-description.comp";
import SimilarProducts from "./components/similar-products.comp";
import { ProductColors } from "../../enums/product-colors.enum";
import { ProductSizes } from "../../enums/product-sizes.enum";
import { ProductStatuses } from "../../enums/product-statuses.enum";
import { ProductTypes } from "../../enums/product-types.enum";
import { ProductCategories } from "../../enums/product-categories.enum";
import { UUIDDto } from "../../types/uuid-dto.type";
import { CartItem } from "../cart/types/cart.types";
import { useDispatch } from "react-redux";

const products = [
  {
    id: "wefewfa",
    name: "product1",
    images: [
      "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    ],
    price: 22,
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
    colors: [ProductColors.BLACK, ProductColors.BLUE],
    sizes: [ProductSizes.M],
    status: ProductStatuses.ACTIVE,
    type: ProductTypes.JEANS,
    amount: 5,
    category: ProductCategories.Woman,
    created: 5,
    updated: 5,
  },
];

type ProductDetailType = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: string[];
  colors: string[];
  price: number;
};

const ProductDetails: React.FC = () =>
  // {
  // id,
  // imageUrl,
  // title,
  // sizes,
  // colors,
  // price,
  // },
  {
    const dispatch = useDispatch();

    const product = products[0];

    const [activeSize, setActiveSIze] = useState(0);
    const [activeColor, setActiveColor] = useState(0);

    // const onClickAdd = () => {
    //   const item: CartItem = {
    //     id,
    //     imageUrl,
    //     title,
    //     size: sizes[activeSize],
    //     color: colors[activeColor],
    //     price,
    //     count: 0,
    //     subtotal: 0,
    //   };
    //   dispatch(addItem(item));
    // };

    return (
      <Grid container direction={"column"} spacing={8}>
        <Grid
          container
          item
          direction={"row"}
          spacing={4}
          justifyContent="center"
        >
          <Grid item sm={4}>
            <ProductSlider />
          </Grid>
          <Grid item sm={4}>
            <ProductConfiguration product={product} />
          </Grid>
        </Grid>
        <Grid item>
          <ProductDescription product={product}></ProductDescription>
        </Grid>
        <Grid item>
          <SimilarProducts products={products}></SimilarProducts>
        </Grid>
      </Grid>
    );
  };

export default ProductDetails;
