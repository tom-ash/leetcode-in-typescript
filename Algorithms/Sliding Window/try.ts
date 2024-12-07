import { slidingWindow } from "./Sliding\ Window";

const args = process.argv.slice(2);
const numbers = eval(args[0]);
const windowSize = eval(args[1]);

// TODO: Add args checks.

// @ts-ignore
slidingWindow(numbers, windowSize);
