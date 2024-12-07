import { BinaryTreeNode } from "../../../Common/Binary Tree Node";
import { breadthFirstSearchBinaryTree } from "./Breadth-first Search";

const tree = new BinaryTreeNode(
  1,
  new BinaryTreeNode(
    2,
    new BinaryTreeNode(4, null, null),
    new BinaryTreeNode(5, null, null),
  ),
  new BinaryTreeNode(3, null, null),
);

//      1
//     / \
//    2   3
//   / \
//  4   5

breadthFirstSearchBinaryTree(tree);
