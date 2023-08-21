import { type CartItem } from "../app/cart/types/cart.types";

export const calcTotalPrice = (items: CartItem[]): number => {
  return Number(
    items.reduce((sum, obj) => obj.price * obj.count + sum, 0).toFixed(2),
  );
};
export const getCartFromDb = (): { items: CartItem[]; totalPrice: number } => {
  const data = localStorage.getItem("cart"); // на время
  const items = data && data ? JSON.parse(data) : []; // на время

  const totalPrice = calcTotalPrice(items);
  return {
    items: items as CartItem[],
    totalPrice,
  };
};
