import { render } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { Lamparas } from "./core/components/app_text/lamparas";

describe("xd", () => {
  it("xd", () => {
    const component = render(<Lamparas/>);
    expect(component).toBeDefined();
  });
});