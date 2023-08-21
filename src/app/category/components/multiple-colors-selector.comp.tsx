import React from "react";
import { Button, ButtonGroup } from "@mui/material";

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
        <Button
          key={color}
          variant={isColorSelected(color) ? "contained" : "outlined"}
          onClick={() => handleColorToggle(color)}
        >
          {color}
        </Button>
      ))}
    </div>
  );
};

export default MultipleColorsSelector;
