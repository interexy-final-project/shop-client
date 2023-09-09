import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  ListItem,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import { ProductTypes } from "../../../enums/product-types.enum";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setType } from "../store/category.slice";

interface TypesFilterProps {
  types: ProductTypes[];
}

const TypesFilter = (props: TypesFilterProps): JSX.Element => {
  const [selectedType, setSelectedType] = useState<ProductTypes | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const handleItemClick = (type: ProductTypes): void => {
    setSelectedType(type);
    dispatch(setType(type));
  };
  return (
    <MenuList component={Stack} direction={"column"} width={"100%"}>
      {props.types.map((type) => (
        <MenuItem
          component={Box}
          key={type}
          sx={{
            backgroundColor: selectedType === type ? "#E5CCFF" : "white",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <ListItem onClick={() => handleItemClick(type)}>
              <Typography variant="t10"> {type} </Typography>
            </ListItem>

            <ChevronRightIcon></ChevronRightIcon>
          </Stack>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default TypesFilter;
