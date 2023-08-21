import { Grid, Typography } from "@mui/material";
import { Box, Stack, styled } from "@mui/system";
import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TypesFilter from "./types-filter.comp";
import { findNodePath } from "../tree-utils";
import { TreeNode } from "../types/tree-node.type";

const NameBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1.25),
  paddingTop: theme.spacing(1.25),
  paddingLeft: theme.spacing(1.9),
  paddingRight: theme.spacing(1.9),
  border: "1px solid #BEBCBD",
  justifyContent: "space-between",
  display: "flex",
}));

// const typesAndKinds: TreeNode[] = [
//   {
//     id: "1",
//     name: "trousers",
//     kinds: [
//       {
//         id: "2",
//         name: "jeans",
//       },
//       {
//         id: "3",
//         name: "breeches",
//       },
//     ],
//   },
//   {
//     id: "4",
//     name: "skirts",
//     kinds: [
//       {
//         id: "5",
//         name: "mini",
//       },
//       {
//         id: "6",
//         name: "not-mini",
//       },
//     ],
//   },
//   {
//     id: "7",
//     name: "shirts",
//     kinds: [
//       {
//         id: "8",
//         name: "short",
//       },
//       {
//         id: "9",
//         name: "long",
//       },
//     ],
//   },
//   {
//     id: "10",
//     name: "pants",
//     kinds: [
//       {
//         id: "11",
//         name: "nice",
//       },
//       {
//         id: "12",
//         name: "not nice",
//       },
//     ],
//   },
// ];

function Filters() {
  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  // const handleNodeSelection = (selectedNodeId: string) => {
  //   const expandedNodes = findNodePath(typesAndKinds, selectedNodeId) ?? [];
  //   setSelectedPath(expandedNodes);
  // };

  console.log(selectedPath, "selected path ");
  return (
    <Stack direction={"column"} spacing={4} justifyContent={"flex-start"}>
      <Box>
        <Stack>
          <NameBox justifyContent={"space-between"}>
            <Typography variant="t4">Filter</Typography>

            <Typography variant="t4">
              <FilterListIcon fontSize="large" />
            </Typography>
          </NameBox>
          <NameBox>
            {/* <TypesFilter
              tree={typesAndKinds}
              selectedPath={selectedPath}
              onNodeSelect={handleNodeSelection}
            ></TypesFilter> */}
          </NameBox>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <NameBox>
            {" "}
            <Typography variant="t4">Color</Typography>
            <Typography variant="t4">
              <KeyboardArrowUpIcon fontSize="large" />
            </Typography>
          </NameBox>
          <NameBox>2</NameBox>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <NameBox>
            {" "}
            <Typography variant="t4">Size</Typography>
            <Typography variant="t4">
              <KeyboardArrowUpIcon fontSize="large" />
            </Typography>
          </NameBox>
          <NameBox>2</NameBox>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Filters;
