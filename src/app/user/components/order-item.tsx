import { Paper, Stack, Box, Typography } from "@mui/material";
import img from "../../../assets/images/product-img.jpg";
import { useTranslation } from "react-i18next";

const OrderItem = () => {
  const { t } = useTranslation();
  return (
    <Box component={Paper} marginTop={5} padding={1}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} spacing={2}>
          <Box component={"img"} src={img} />
          <Box>
            <Typography>Black Printed T-shirt</Typography>
            <Typography>{t("orderItem.color")}</Typography>
            <Typography>{t("orderItem.quantity")}</Typography>
            <Typography>{t("orderItem.total")}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OrderItem;
