import React from "react";
import { EmptyCart } from "./app/cart/components/cart-empty.comp";
import { NotFound } from "./components/not-found.page";
import { CartPage } from "./app/cart/cart.page";
import { Provider } from "react-redux";
import { store } from "./store";
import { CartItemBlock } from "./app/cart/components/cart-item.comp";

function App() {
  return (
    <Provider store={store}>
      {/* <EmptyCart /> */}
      {/* <CartItemBlock
        id=""
        title=""
        imageUrl=""
        size={"s"}
        color=""
        price={7}
        shipping="free"
        subtotal={5}
        count={5}
      />

      <CartItemBlock
        id=""
        title=""
        imageUrl=""
        size={"s"}
        color=""
        price={7}
        shipping="free"
        subtotal={5}
        count={5}
      /> */}
      {/* <NotFound /> */}
      <CartPage />
    </Provider>
  );
}

export default App;
