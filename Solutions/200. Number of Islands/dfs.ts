function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const numberOfRows = grid.length;
  const numberOfColumns = grid[0].length;
  const visitedCells = new Set<string>();
  let islandCount = 0;

  const exploreIsland = (rowIndex: number, columnIndex: number): void => {
    visitedCells.add(`${rowIndex},${columnIndex}`);

    const directions: [number, number][] = [
      [-1, 0], // UP
      [0, 1], // RIGHT
      [1, 0], // DOWN
      [0, -1], // LEFT
    ];

    for (const direction of directions) {
      const [rowOffset, columnOffset] = direction;
      const contemplatedRowIndex = rowIndex + rowOffset;
      const contemplatedColumnIndex = columnIndex + columnOffset;

      // Continue if contemplated row index out of grid.
      if (contemplatedRowIndex < 0 || contemplatedRowIndex >= numberOfRows) {
        continue;
      }

      // Continue if contemplated column index out of grid.
      if (
        contemplatedColumnIndex < 0 ||
        contemplatedColumnIndex >= numberOfColumns
      ) {
        continue;
      }

      // Continue if cell value is not "1".
      if (grid[contemplatedRowIndex][contemplatedColumnIndex] !== "1") {
        continue;
      }

      // Continue if cell value is not "1".
      if (
        visitedCells.has(`${contemplatedRowIndex},${contemplatedColumnIndex}`)
      ) {
        continue;
      }

      // Recursively explore the neighboring land cell
      exploreIsland(contemplatedRowIndex, contemplatedColumnIndex);
    }
  };

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      if (
        grid[rowIndex][columnIndex] === "1" &&
        !visitedCells.has(`${rowIndex},${columnIndex}`)
      ) {
        exploreIsland(rowIndex, columnIndex);
        islandCount += 1;
      }
    }
  }

  return islandCount;
}
