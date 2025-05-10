import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DoctorCard } from "./DoctorCard";

describe("DoctorCard", () => {
  const defaultProps = {
    image: "test-image.jpg",
    name: "Dr. Smith",
    specialty: "Cardiology",
  };

  it("renders doctor information correctly", () => {
    render(<DoctorCard {...defaultProps} />);

    expect(screen.getByText("Dr. Smith")).toBeInTheDocument();
    expect(screen.getByText("Cardiology")).toBeInTheDocument();
    expect(screen.getByText("View Profile")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("renders social media icons", () => {
    render(<DoctorCard {...defaultProps} />);

    const socialIcons = screen.getAllByRole("img");
    // One doctor image + three social icons
    expect(socialIcons).toHaveLength(4);
  });
});
