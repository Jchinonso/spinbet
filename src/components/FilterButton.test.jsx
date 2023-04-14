import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("FilterButton", () => {
  const handleFilterChangeMock = jest.fn();
  const defaultProps = {
    filterType: "All",
    activeFilter: "All",
    handleFilterChange: handleFilterChangeMock,
    count: 10,
  };

  it("renders the button with the correct text and count", () => {
    render(<FilterButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button.textContent).toContain("All");
    expect(button.textContent).toContain("10");
  });

  it("applies the font-bold class when activeFilter matches filterType", () => {
    render(<FilterButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button.classList.contains("font-bold")).toBe(true);
  });

  it("does not apply the font-bold class when activeFilter does not match filterType", () => {
    render(<FilterButton {...defaultProps} activeFilter="Completed" />);
    const button = screen.getByRole("button");
    expect(button.classList.contains("font-bold")).toBe(false);
  });

  it("calls handleFilterChange with the correct filterType when the button is clicked", () => {
    render(<FilterButton {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleFilterChangeMock).toHaveBeenCalledWith("All");
  });
});
