import React, { useEffect, useState } from "react";
import ProductSlider from "./components/product-slider.comp";
import ProductConfiguration from "./components/product-configuration.comp";
import Grid from "@mui/material/Grid";
import ProductDescription from "./components/product-description.comp";
import SimilarProducts from "./components/similar-products.comp";
import { ProductTypes } from "../../enums/product-types.enum";
import { useDispatch, useSelector } from "react-redux";
import {
  userDetailsSelector,
  userSelector,
} from "../user/store/user.selectors";
import useDecodeToken from "../../utils/decode-token";
import { getUser } from "../user/store/user.actions";
import { AppDispatch } from "../../store";
import { useParams } from "react-router-dom";
import { getJeansProduct, getProduct } from "./store/product.actions";
import { productsSelector } from "./store/product.selectors";
import CommonHeader from "../components/common-header";
import Footer from "../components/footer";

type ProductDetailType = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: string[];
  colors: string[];
  price: number;
};

const ProductDetails: React.FC = () => {
  const product = useSelector(productsSelector);
  const dispatch: AppDispatch = useDispatch();
  const decodedToken = useDecodeToken();

  const [activeSize, setActiveSIze] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const user = useSelector(userDetailsSelector);
  const { productId } = useParams();
  useEffect(() => {
    if (decodedToken?.id) {
      dispatch(getUser(decodedToken.id));
    }
  }, [decodedToken?.id]);

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
  }, [productId]);

  useEffect(() => {
    if (product?.type === ProductTypes.JEANS) {
      dispatch(getJeansProduct(product.id));
    }
  }, [product]);

  return (
    <>
      <CommonHeader />
      <Grid container direction={"column"} spacing={15}>
        <Grid
          container
          item
          direction={"row"}
          spacing={4}
          justifyContent="center"
        >
          <Grid item sm={4}>
            <ProductSlider product={product} />
          </Grid>
          <Grid item sm={4}>
            <ProductConfiguration product={product} />
          </Grid>
        </Grid>
        <Grid item>
          <ProductDescription product={product}></ProductDescription>
        </Grid>
        <Grid item>
          <SimilarProducts product={product ?? null}></SimilarProducts>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default ProductDetails;
