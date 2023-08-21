import { Paper, Box, Typography, Stack } from "@mui/material";
import l from "../../../lang/l";
import OrderItem from "./order-item";

const OrderListItem = () => {
  return (
    <Box>
      <Paper sx={{ bgcolor: "#F6F6F6" }}>
        <Typography variant="h5" gutterBottom>
          {l("orderItem.orderTitle")}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography gutterBottom>{l("orderItem.orderDate")}</Typography>
            <Typography gutterBottom>
              {l("orderItem.orderEstimation")}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom>{l("orderItem.orderStatus")}</Typography>
            <Typography gutterBottom>
              {l("orderItem.orderPaymentMethod")}
            </Typography>
          </Box>
        </Stack>
      </Paper>
      <Stack
        marginTop={2}
        direction={"row"}
        spacing={1}
        useFlexGap
        flexWrap="wrap"
      >
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Stack>
      <Typography variant="h6" marginTop={2}>
        {l("orderItem.total")}
      </Typography>
    </Box>
  );
};

export default OrderListItem;
