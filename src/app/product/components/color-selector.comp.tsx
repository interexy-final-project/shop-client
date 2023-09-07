import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import l from "../../../lang/l";
import { ProductColors } from "../../../enums/product-colors.enum";

interface ColorSelectorProps {
  availableColors: ProductColors[];
  selectedColor: ProductColors | null;
  onSelectColor: (size: ProductColors) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  availableColors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <Stack spacing={3} direction={"row"}>
      <Typography variant="t2">{l("colorSelector.available")}</Typography>
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
