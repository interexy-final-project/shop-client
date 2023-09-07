import { Box, Button, Stack, Typography } from "@mui/material";
import EmptyCartImg from "../../../assets/imgs/empty-cart.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const EmptyCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="center">
      <Stack alignItems="center">
        <img src={EmptyCartImg} alt="empty-cart" />
        <Stack alignItems="center" p="2rem 0">
          <Typography variant="h3">{t("emptyCart.sadCart")}</Typography>
          <Typography variant="p">{t("emptyCart.makeHappy")}</Typography>
        </Stack>
        <Button
          variant="shop-purple-filled"
          sx={{ margin: "1rem 0" }}
          onClick={() => navigate("/category")}
        >
          {t("emptyCart.continue")}
        </Button>
      </Stack>
    </Box>
  );
};
