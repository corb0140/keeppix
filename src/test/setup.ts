import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Automatically clean up DOM elements after each test case to prevent memory leaks
afterEach(() => {
  cleanup();
});
