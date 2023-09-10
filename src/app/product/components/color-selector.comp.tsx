import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useTranslation } from "react-i18next";
import { ProductColors } from "../../../enums/product-colors.enum";

interface ColorSelectorProps {
  availableColors: ProductColors[] | null;
  selectedColor: ProductColors | null;
  onSelectColor: (size: ProductColors) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  availableColors,
  selectedColor,
  onSelectColor,
}) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={3} direction={"row"}>
      <Typography variant="t2">{t("colorSelector.available")}</Typography>
      {availableColors?.map((color) => (
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
