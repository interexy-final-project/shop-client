import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./assets/themes";
import AppRoutes from "./app.routers";
import { MainPage } from "./components/main-page";
import { CheckoutPage } from "./app/payment/checkout.page";
import SignIn from "./app/auth/sign-in-page";
import ProductDetails from "./app/product/product-details.page";
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRoutes />
      {/* <MainPage /> */}
      <CheckoutPage />
      {/* <ProductDetails /> */}
    </BrowserRouter>
  );
}

export default App;
