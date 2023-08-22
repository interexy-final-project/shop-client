import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundImage from "../assets/imgs/not-found.png";
import l from "../lang/l";

export const NotFound: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack alignItems="center">
        <img src={NotFoundImage} alt="not-found" />
        <Stack alignItems="center">
          <Typography variant="h1">{l("notFoundPage.oops")}</Typography>
          <Typography>{l("notFoundPage.unavalible")}</Typography>
        </Stack>
        <Button>{l("notFoundPage.back")}</Button>
      </Stack>
    </Box>
  );
};
