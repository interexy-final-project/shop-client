import React from "react";
import { Box, Button, Grid } from "@mui/material";
import l from "../../../lang/l";

interface SizeSelectorProps {
  availableSizes: string[];
  selectedSizes: string[];
  onSelectSize: (sizes: string[]) => void;
}

const MultipleSizesSelector: React.FC<SizeSelectorProps> = ({
  availableSizes,
  selectedSizes,
  onSelectSize,
}) => {
  const isSizeSelected = (size: string) => selectedSizes.includes(size);

  const handleSizeToggle = (size: string) => {
    let updatedSizes: string[];
    if (isSizeSelected(size)) {
      updatedSizes = selectedSizes.filter(
        (selectedSize) => selectedSize !== size,
      );
    } else {
      updatedSizes = [...selectedSizes, size];
    }
    onSelectSize(updatedSizes);
  };

  return (
    <div>
      <h3>{l("sizeSelector.title")}</h3>
      <Grid container direction="row" gap={2}>
        {availableSizes.map((size) => (
          <Box key={size}>
            <Button
              key={size}
              variant={
                isSizeSelected(size)
                  ? "shop-size-button-selected"
                  : "shop-size-button"
              }
              onClick={() => handleSizeToggle(size)}
            >
              {size}
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default MultipleSizesSelector;
