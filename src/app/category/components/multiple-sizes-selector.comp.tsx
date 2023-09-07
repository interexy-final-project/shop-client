import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { ProductSizes } from "../../../enums/product-sizes.enum";
import { setSizes } from "../store/category.slice";
import { useTranslation } from "react-i18next";

interface SizeSelectorProps {
  availableSizes: ProductSizes[];
  selectedSizes: ProductSizes[];
  onSelectSize: (sizes: ProductSizes[]) => void;
}

const MultipleSizesSelector: React.FC<SizeSelectorProps> = ({
  availableSizes,
  selectedSizes,
  onSelectSize,
}) => {
  const { t } = useTranslation();
  const isSizeSelected = (size: ProductSizes) => selectedSizes.includes(size);
  const dispatch: AppDispatch = useDispatch();

  const handleSizeToggle = (size: ProductSizes) => {
    let updatedSizes: ProductSizes[];
    if (isSizeSelected(size)) {
      updatedSizes = selectedSizes.filter(
        (selectedSize) => selectedSize !== size,
      );
    } else {
      updatedSizes = [...selectedSizes, size];
    }
    dispatch(setSizes(updatedSizes));
    onSelectSize(updatedSizes);
  };

  return (
    <div>
      <h3>{t("sizeSelector.title")}</h3>
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
