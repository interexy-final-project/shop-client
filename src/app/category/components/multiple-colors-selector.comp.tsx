import React from "react";
import { IconButton } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareIcon from "@mui/icons-material/Square";

interface MultipleColorSelectorProps {
  availableColors: string[];
  selectedColors: string[];
  onSelectColor: (sizes: string[]) => void;
}

const MultipleColorsSelector: React.FC<MultipleColorSelectorProps> = ({
  availableColors,
  selectedColors,
  onSelectColor,
}) => {
  const isColorSelected = (size: string) => selectedColors.includes(size);

  const handleColorToggle = (size: string) => {
    let updatedColors: string[];
    if (isColorSelected(size)) {
      updatedColors = selectedColors.filter(
        (selectedColor) => selectedColor !== size,
      );
    } else {
      updatedColors = [...selectedColors, size];
    }
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
