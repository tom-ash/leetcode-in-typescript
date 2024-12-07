export function slidingWindow(numbers: number[], windowSize: number): any {
  if (numbers.length < windowSize) {
    throw new Error(
      "Array length must be at least equal to the provided window size.",
    );
  }

  let window: number[];

  // Window sliding.
  for (let windowEnd = windowSize; windowEnd <= numbers.length; windowEnd++) {
    const windowStart = windowEnd - windowSize
    window = numbers.slice(windowStart, windowEnd);

    console.log(
      `Window: [${numbers.slice(0, windowStart)}[${window}]${numbers.slice(windowEnd, numbers.length)}].`,
    );
  }
}
