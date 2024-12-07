import { BinaryTreeNode } from "../../../../Common/Binary\ Tree\ Node";

export const depthFirstSearchBinaryTreePreOrderTraversal = (
  root: BinaryTreeNode | null,
): void => {
  if (!root) {
    return;
  }

  /* Pre-order traversal:
     1. Root node.
     2. Left node.
     3. Right node.
  */

  // Process current node.
  console.log(`Processing node: ${root.value}.`);

  // Traverse left subtree.
  if (root.left) {
    console.log(`Traversing left from node: ${root.value}.`);
    depthFirstSearchBinaryTreePreOrderTraversal(root.left);
  }

  // Traverse right subtree.
  if (root.right) {
    console.log(`Traversing right from node: ${root.value}.`);
    depthFirstSearchBinaryTreePreOrderTraversal(root.right);
  }
};
