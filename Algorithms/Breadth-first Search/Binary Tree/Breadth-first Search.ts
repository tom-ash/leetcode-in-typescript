import { BinaryTreeNode } from "../../../Common/Binary Tree Node";

export const breadthFirstSearchBinaryTree = (
  root: BinaryTreeNode | null,
): void => {
  if (!root) {
    return;
  }

  // Breadth-first search processes nodes level by level using a queue.

  const queue: BinaryTreeNode[] = [root];

  // Continue while the queue has at least one node to process.
  while (queue.length > 0) {
    // Dequeue the first node from the queue.
    const currentNode = queue.shift()!;

    console.log(`Processing node: ${currentNode.value}.`);

    // Enqueue the left child node if one exits.
    if (currentNode.left) {
      console.log(`Enqueuing left child of node: ${currentNode.value}.`);
      queue.push(currentNode.left);
    }

    // Enqueue the left child node if one exits.
    if (currentNode.right) {
      console.log(`Enqueuing right child of node: ${currentNode.value}.`);
      queue.push(currentNode.right);
    }
  }
};
