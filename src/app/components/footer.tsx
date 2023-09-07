import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box height={60} padding={1} bgcolor={"#3C4242"} marginTop={"auto"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography color={"white"}>{t("footer.email")}</Typography>
        <Typography color={"white"}>{t("footer.phone")}</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
