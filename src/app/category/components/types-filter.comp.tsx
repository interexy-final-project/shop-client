import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { TreeNode } from "../types/tree-node.type";
import { TreeItem, TreeView } from "@mui/lab";

const MenuNode = ({ node }: { node: TreeNode }) => (
  <TreeItem
    nodeId={node.id}
    label={<Typography variant={"t10"}>{node.name} </Typography>}
  >
    {node.kinds?.map((child) => <MenuNode key={child.id} node={child} />)}
  </TreeItem>
);

interface TypesFilterProps {
  tree: TreeNode[];
  selectedPath: string[];
  onNodeSelect: (selectedNodeId: string) => void;
}

const TypesFilter = (props: TypesFilterProps): JSX.Element => {
  console.log(props, "props");
  const selected =
    props.selectedPath.length > 0
      ? props.selectedPath[props.selectedPath.length - 1]
      : "";

  const handleNodeSelection = (event: React.SyntheticEvent, nodeId: string) => {
    if (nodeId === selected) {
      return;
    }
    props.onNodeSelect(nodeId);
  };

  return (
    <TreeView
      aria-label="types filter"
      selected={selected}
      expanded={props.selectedPath}
      onNodeSelect={handleNodeSelection}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {props.tree.map((node) => (
        <MenuNode key={node.id} node={node} />
      ))}
    </TreeView>
  );
};

export default TypesFilter;
