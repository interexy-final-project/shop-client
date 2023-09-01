import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { TreeNode } from "../types/tree-node.type";
import { TreeItem, TreeView } from "@mui/lab";
import {
  ContentCut,
  ContentCopy,
  ContentPaste,
  Cloud,
} from "@mui/icons-material";
import { ProductTypes } from "../../../enums/product-types.enum";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setType } from "../store/category.slice";

const MenuNode = ({ node }: { node: TreeNode }) => (
  <TreeItem
    nodeId={node.id}
    label={<Typography variant={"t10"}>{node.name} </Typography>}
  >
    {node.kinds?.map((child) => <MenuNode key={child.id} node={child} />)}
  </TreeItem>
);

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
