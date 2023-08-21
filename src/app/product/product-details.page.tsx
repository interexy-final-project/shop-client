import React from "react";
import ProductSlider from "./components/product-slider.comp";
import ProductConfiguration from "./components/product-configuration.comp";
import Grid from "@mui/material/Grid";
import ProductDescription from "./components/product-description.comp";
import SimilarProducts from "./components/similar-products.comp";
const products = [
  {
    name: "product1",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product2",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product3",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product4",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product5",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product5",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product5",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
  {
    name: "product5",
    img: "https://ml.thcdn.com/productimg/401/456/14563946-1965063311723545.jpg",
    price: "22$",
    description: `100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible
    ribbed crew neck. Precisely stitched with no pilling & no fading.
    Provide all-time comfort. Anytime, anywhere. Infinite range of
    matte-finish HD prints.`,
  },
];

const product = products[0];

const ProductDetails: React.FC = () => {
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
