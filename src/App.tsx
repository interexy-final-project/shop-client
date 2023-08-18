import React from "react";
import ProductDetails from "./app/product/product-details.page";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ProductDetails />
    </ThemeProvider>
  );
}

export default App;
