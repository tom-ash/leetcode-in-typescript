from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or len(grid) == 0:
            return 0

        numberOfRows = len(grid)
        numberOfColumns = len(grid[0])
        visitedCells = set()
        islandCount = 0

        def exploreIsland(rowIndex: int, columnIndex: int) -> None:
            queue = []
            visitedCells.add((rowIndex, columnIndex))
            queue.append((rowIndex, columnIndex))

            while queue:
                queuedRowIndex, queuedColumnIndex = queue.pop(0)
                directions = [
                    [-1, 0],  # UP
                    [0, 1],   # RIGHT
                    [1, 0],   # DOWN
                    [0, -1]   # LEFT
                ]

                for direction in directions:
                    rowOffset, columnOffset = direction
                    contemplatedRowIndex = queuedRowIndex + rowOffset
                    contemplatedColumnIndex = queuedColumnIndex + columnOffset

                    # Continue if contemplated row index is out of grid
                    if contemplatedRowIndex < 0 or contemplatedRowIndex >= numberOfRows:
                        continue

                    # Continue if contemplated column index is out of grid
                    if contemplatedColumnIndex < 0 or contemplatedColumnIndex >= numberOfColumns:
                        continue

                    # Continue if cell value is not "1"
                    if grid[contemplatedRowIndex][contemplatedColumnIndex] != "1":
                        continue

                    # Continue if cell is already visited
                    if (contemplatedRowIndex, contemplatedColumnIndex) in visitedCells:
                        continue

                    # Add to queue
                    queue.append((contemplatedRowIndex, contemplatedColumnIndex))

                    # Mark as visited
                    visitedCells.add((contemplatedRowIndex, contemplatedColumnIndex))

        for rowIndex in range(numberOfRows):
            for columnIndex in range(numberOfColumns):
                if grid[rowIndex][columnIndex] == "1" and (rowIndex, columnIndex) not in visitedCells:
                    exploreIsland(rowIndex, columnIndex)
                    islandCount += 1

        return islandCount
