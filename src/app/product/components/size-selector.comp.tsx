import React from "react";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProductSizes } from "../../../enums/product-sizes.enum";

interface SizeSelectorProps {
  availableSizes: ProductSizes[] | null;
  selectedSize: ProductSizes | null;
  onSelectSize: (size: ProductSizes) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  availableSizes,
  selectedSize,
  onSelectSize,
}) => {
  const { t } = useTranslation();

  return (
    <Stack direction={"column"} spacing={3}>
      <Typography variant="t2">{t("sizeSelector.title")}</Typography>
      <ButtonGroup>
        <Stack direction="row" spacing={4}>
          {availableSizes?.map((size) => (
            <Box key={size}>
              <Button
                variant={
                  selectedSize === size
                    ? "shop-size-button-selected"
                    : "shop-size-button"
                }
                size={"small"}
                onClick={() => {
                  onSelectSize(size);
                }}
              >
                {size}
              </Button>
            </Box>
          ))}
        </Stack>
      </ButtonGroup>
    </Stack>
  );
};

export default SizeSelector;
