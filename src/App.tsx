import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes";
import AppRoutes from "./app.routers";
import CategoryPage from "./app/category/category.page";
import ProductDetails from "./app/product/product-details.page";
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AppRoutes />
        <ProductDetails />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
