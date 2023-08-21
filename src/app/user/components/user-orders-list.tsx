import { Stack, Divider } from "@mui/material";
import OrderListItem from "./order-list-item";

const UserOrderList = () => {
  //GET UserOrders

  return (
    <Stack spacing={4} divider={<Divider />}>
      <OrderListItem />
      <OrderListItem />
    </Stack>
  );
};

export default UserOrderList;
