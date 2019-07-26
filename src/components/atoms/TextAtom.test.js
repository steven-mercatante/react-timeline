import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextAtom from "./TextAtom";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("TextAtom renders plain text", () => {
  const { getByText } = render(<TextAtom text="hello world" />);

  expect(getByText("hello world")).toBeInTheDocument();
});

test("TextAtom renders markdown", () => {
  const { container } = render(<TextAtom text="**hello** _world_" />);

  expect(container).toContainHTML("<strong>hello</strong> <em>world</em>");
});

test(`TextAtom renders null when you don't provide text`, () => {
  const { container } = render(<TextAtom />);

  expect(container).toBeEmpty();
});
