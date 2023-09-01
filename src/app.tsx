import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./app.routers";
import { CheckoutPage } from "./app/payment/checkout.page";
import { NotFound } from "./components/not-found.page";
import { EmptyCart } from "./app/cart/components/cart-empty.comp";
import { CartPage } from "./app/cart/cart.page";
import { Provider } from "react-redux";
import { store } from "./store";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <AppRoutes />
        {/* <CheckoutPage /> */}
        {/* <NotFound /> */}
        {/* <EmptyCart /> */}
        {/* <CartPage /> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
