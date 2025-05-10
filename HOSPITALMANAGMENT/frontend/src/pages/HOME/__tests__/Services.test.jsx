import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Services from "../../Services";

describe("Services", () => {
  it("renders the services page with all main sections", () => {
    render(<Services />);

    // Check for header elements
    expect(screen.getByText(/KL-HOSPITALS/i)).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check for hero section
    expect(screen.getByText("Our Services")).toBeInTheDocument();
    expect(screen.getByText("Comprehensive Healthcare Solutions")).toBeInTheDocument();

    // Check for main content sections
    expect(screen.getByText("Our Specialties")).toBeInTheDocument();
    expect(screen.getByText("Book an Appointment")).toBeInTheDocument();

    // Check for footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("maintains proper document structure", () => {
    const { container } = render(<Services />);

    expect(container.querySelector(".services-page")).toHaveStyle({
      display: "flex",
      flexDirection: "column",
    });
  });
});
