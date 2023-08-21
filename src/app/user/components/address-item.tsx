import React, { useState } from "react";
import { Paper, Typography, TextField, Stack } from "@mui/material";
import EditButton from "./edit-button";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const AddressItem = () => {
  const [disabledInput, setDisable] = useState(true);
  const [buttonText, setButtonText] = useState<"Change" | "Confirm">("Change");
  const [buttonIcon, setButtonIcon] = useState(<EditIcon />);

  const handleClick = () => {
    setDisable(!disabledInput);
    setButtonIcon(buttonText === "Change" ? <CheckIcon /> : <EditIcon />);
    setButtonText(buttonText === "Change" ? "Confirm" : "Change");
  };

  return (
    <Paper sx={{ bgcolor: "#F6F6F6", padding: 2 }}>
      <Stack>
        {!disabledInput ? (
          <TextField variant="standard" defaultValue="Mocked" />
        ) : (
          <Typography variant="body2">Mocked</Typography>
        )}
        <EditButton
          buttonText={buttonText}
          buttonIcon={buttonIcon}
          variant="contained"
          handleClick={handleClick}
        ></EditButton>
      </Stack>
    </Paper>
  );
};

export default AddressItem;
