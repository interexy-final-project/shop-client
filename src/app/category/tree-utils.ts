import { TreeNode } from "./types/tree-node.type";

export function findNodePath(
  tree: TreeNode[],
  targetNodeId: string,
): string[] | null {
  for (const node of tree) {
    if (node.id === targetNodeId) {
      return [node.id];
    } else if (node.kinds) {
      const childPath = findNodePath(node.kinds, targetNodeId);
      if (childPath !== null) {
        return [node.id, ...childPath];
      }
    }
  }
  return null;
}
