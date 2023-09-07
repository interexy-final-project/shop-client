import { Paper, Box, Typography, Stack } from "@mui/material";
import OrderItem from "./order-item";
import { useTranslation } from "react-i18next";

const OrderListItem = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box component={Paper} bgcolor={"#F6F6F6"}>
        <Typography variant="h5" gutterBottom>
          {t("orderItem.orderTitle")}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography gutterBottom>{t("orderItem.orderDate")}</Typography>
            <Typography gutterBottom>
              {t("orderItem.orderEstimation")}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom>{t("orderItem.orderStatus")}</Typography>
            <Typography gutterBottom>
              {t("orderItem.orderPaymentMethod")}
            </Typography>
          </Box>
        </Stack>
      </Box>
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
        {t("orderItem.total")}
      </Typography>
    </Box>
  );
};

export default OrderListItem;
