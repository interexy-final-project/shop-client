export interface CartItem {
  id: string;
  imageUrl: string;
  title: string;
  size: string;
  color: string;
  price: number;
  subtotal: number;
  count: number;
}

export interface ICartSliceState {
  totalPrice: number;
  items: CartItem[];
}
