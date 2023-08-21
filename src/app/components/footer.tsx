import React from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import l from "../../lang/l";

const Footer = () => {
  return (
    <Box height={60} padding={1} bgcolor={"#3C4242"} marginTop={"auto"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography color={"white"}>{l("footer.email")}</Typography>
        <Typography color={"white"}>{l("footer.phone")}</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
