import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Fucking from "./core/routes/fucking";
describe("fucking", () => {
  it("fucking", () => {
    const component = render(<Fucking/>);
    expect(component).toBeDefined();
  });
});