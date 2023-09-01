import React from "react";
import { IconButton } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareIcon from "@mui/icons-material/Square";
import { useDispatch } from "react-redux";
import { setColors } from "../store/category.slice";
import { AppDispatch } from "../../../store";
import { ProductColors } from "../../../enums/product-colors.enum";

interface MultipleColorSelectorProps {
  availableColors: ProductColors[];
  selectedColors: ProductColors[];
  onSelectColor: (colors: ProductColors[]) => void;
}

const MultipleColorsSelector: React.FC<MultipleColorSelectorProps> = ({
  availableColors,
  selectedColors,
  onSelectColor,
}) => {
  const isColorSelected = (color: ProductColors) =>
    selectedColors.includes(color);
  const dispatch: AppDispatch = useDispatch();

  const handleColorToggle = (color: ProductColors) => {
    let updatedColors: ProductColors[];
    if (isColorSelected(color)) {
      updatedColors = selectedColors.filter(
        (selectedColor) => selectedColor !== color,
      );
    } else {
      updatedColors = [...selectedColors, color];
    }

    dispatch(setColors(updatedColors));
    onSelectColor(updatedColors);
  };

  return (
    <div>
      {availableColors.map((color) => (
        <IconButton
          key={color}
          onClick={() => handleColorToggle(color)}
          style={{ color }}
        >
          {selectedColors.includes(color) ? <SquareIcon /> : <CropSquareIcon />}
        </IconButton>
      ))}
    </div>
  );
};

export default MultipleColorsSelector;
