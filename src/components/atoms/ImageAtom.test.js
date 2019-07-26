import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImageAtom from "./ImageAtom";

afterEach(cleanup);

test("ImageAtom renders an img tag", () => {
  const { container, debug } = render(
    <ImageAtom src="test.png" alt="test image" />
  );

  expect(container.firstChild).toHaveAttribute("src", "test.png");
  expect(container.firstChild).toHaveAttribute("alt", "test image");
});
