import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../Home";

describe("Home", () => {
  it("renders all main sections", () => {
    render(<Home />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("maintains proper document structure", () => {
    const { container } = render(<Home />);

    expect(container.querySelector(".home")).toHaveStyle({
      display: "flex",
      flexDirection: "column",
    });
  });

  it("includes all required sections", () => {
    render(<Home />);

    expect(screen.getByText(/KL-hOSPITALS/i)).toBeInTheDocument();
    expect(screen.getByText(/Caring for Life/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Doctors/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Better information, Better health/i)
    ).toBeInTheDocument();
  });
});
