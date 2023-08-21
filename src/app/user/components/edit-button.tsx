import React from "react";
import { Button } from "@mui/material";

type EditButtonType = {
  buttonIcon: JSX.Element;
  handleClick: () => void;
  buttonText: string;
  variant: "contained" | "text";
};

const EditButton = (props: EditButtonType) => {
  const { buttonText, buttonIcon, handleClick, variant } = props;

  return (
    <Button
      variant={variant}
      sx={{ textTransform: "none" }}
      startIcon={buttonIcon}
      disableElevation
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};

export default EditButton;
