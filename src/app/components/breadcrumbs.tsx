import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const CommonBreadcrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};

export default CommonBreadcrumbs;
