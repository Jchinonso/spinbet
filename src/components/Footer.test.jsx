import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer with the correct class names", () => {
    const { container } = render(<Footer />);
    const footer = container.firstChild;
    expect(footer.classList.contains("bg-gray-800")).toBe(true);
    expect(footer.classList.contains("py-4")).toBe(true);
  });
});
