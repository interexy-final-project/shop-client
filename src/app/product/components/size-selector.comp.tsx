import React from "react";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import l from "../../../lang/l";

interface SizeSelectorProps {
  availableSizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  availableSizes,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <Stack direction={"column"} spacing={3}>
      <Typography variant="t2">{l("sizeSelector.title")}</Typography>
      <ButtonGroup>
        <Stack direction="row" spacing={4}>
          {availableSizes.map((size) => (
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
