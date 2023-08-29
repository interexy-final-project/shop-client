import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundImage from "../assets/imgs/not-found.png";
import l from "../lang/l";

export const NotFound: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack alignItems="center">
        <img src={NotFoundImage} alt="not-found" />
        <Stack alignItems="center" p="2rem 0">
          <Typography variant="h1" p="0.5rem 0">
            {l("notFoundPage.oops")}
          </Typography>
          <Typography variant="p" p="0.5rem 0">
            {l("notFoundPage.unavalible")}
          </Typography>
        </Stack>
        <Button variant="shop-purple-filled" sx={{ margin: "1rem 0" }}>
          {l("notFoundPage.back")}
        </Button>
      </Stack>
    </Box>
  );
};
