import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App.jsx";

describe("Home", () => {
  it("Home", () => {
    const component = render(<App/>);
    expect(component).toBeDefined();
  });
});