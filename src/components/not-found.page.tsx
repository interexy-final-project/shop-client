import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundImage from "../assets/imgs/not-found.png";

export const NotFound: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack alignItems="center">
        <img src={NotFoundImage} alt="not-found" />
        <Stack alignItems="center">
          <Typography variant="h1">Oops! Page not found</Typography>
          <Typography>
            The page you are looking for might have been removed or temporarily
            unavailable.
          </Typography>
        </Stack>
        <Button>Back to Home Page</Button>
      </Stack>
    </Box>
  );
};
