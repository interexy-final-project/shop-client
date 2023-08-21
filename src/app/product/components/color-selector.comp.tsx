import React from "react";
import { ButtonGroup, IconButton, Stack, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

interface ColorSelectorProps {
  availableColors: string[];
  selectedColor: string;
  onSelectColor: (size: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  availableColors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <Stack spacing={3}>
      <Typography variant="t2">Colors available</Typography>
      {availableColors.map((color) => (
        <IconButton
          key={color}
          onClick={() => {
            onSelectColor(color);
          }}
          style={{ color }}
        >
          {selectedColor === color ? (
            <CheckCircleOutlinedIcon />
          ) : (
            <Brightness1Icon />
          )}
        </IconButton>
      ))}
    </Stack>
  );
};

export default ColorSelector;
