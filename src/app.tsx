import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./app.routers";
<<<<<<< HEAD:src/App.tsx
import { CheckoutPage } from "./app/payment/checkout.page";
import { NotFound } from "./components/not-found.page";
import { EmptyCart } from "./app/cart/components/cart-empty.comp";
import { CartPage } from "./app/cart/cart.page";
=======

>>>>>>> 7e43dc8833be845a19badf1f4fe130f04f4a3bd7:src/app.tsx
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRoutes />
      {/* <CheckoutPage /> */}
      {/* <NotFound /> */}
      {/* <EmptyCart /> */}
      <CartPage />
    </BrowserRouter>
  );
}

export default App;
