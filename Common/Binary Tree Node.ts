export class BinaryTreeNode {
  value: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(
    value: number,
    left: BinaryTreeNode | null = null,
    right: BinaryTreeNode | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
