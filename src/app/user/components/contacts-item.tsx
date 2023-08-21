import React from "react";
import { Box, Typography, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import EditButton from "./edit-button";

type ContactItemType = {
  variant: "common" | "secured";
  data: {
    name: string;
    value: string;
  };
};

const ContactItem = ({ variant, data }: ContactItemType) => {
  const [disabledInput, setDisable] = useState(true);
  const [buttonText, setButtonText] = useState<"Change" | "Confirm">("Change");
  const [buttonIcon, setButtonIcon] = useState(<EditIcon />);

  const handleClick = () => {
    setDisable(!disabledInput);
    setButtonIcon(buttonText === "Change" ? <CheckIcon /> : <EditIcon />);
    setButtonText(buttonText === "Change" ? "Confirm" : "Change");
  };

  return (
    <Box>
      <Typography>{data.name}</Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {!disabledInput ? (
          <TextField
            variant="standard"
            type={variant === "secured" ? "password" : "text"}
            defaultValue={data.value}
          />
        ) : (
          <Typography variant="body2">{data.value}</Typography>
        )}
        <EditButton
          variant="text"
          buttonIcon={buttonIcon}
          buttonText={buttonText}
          handleClick={handleClick}
        />
      </Stack>
    </Box>
  );
};

export default ContactItem;
