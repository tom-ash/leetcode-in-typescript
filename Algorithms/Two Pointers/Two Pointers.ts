export const twoPointer = (numbers: number[]): any => {
  let leftPointer: number = 0;
  let rightPointer: number = numbers.length - 1;

  while (leftPointer < rightPointer) {
    // Problem solution simulation using a random number.
    const random = Math.random();

    // An actual problem condition would be here.
    if (random > 0.5) {
      console.log(
        `Moving left pointer from ${leftPointer} to ${leftPointer + 1}`,
      );

      leftPointer++;
    } else {
      console.log(
        `Moving right pointer from ${rightPointer} to ${rightPointer - 1}`,
      );

      rightPointer--;
    }
  }

  console.log(
    `Left pointer is now ${leftPointer}. Right pointer is now ${rightPointer}. The loop is finished.`,
  );

  // return
  // An actual problem solution could be returned here.
};
