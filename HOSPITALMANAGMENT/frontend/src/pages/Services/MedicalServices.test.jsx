import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MedicalServices from "./MedicalServices";

describe("MedicalServices", () => {
  it("renders the main sections", () => {
    render(<MedicalServices />);

    expect(screen.getByText(/Meddical/)).toBeInTheDocument();
    expect(screen.getByText("Emergency")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("NEUROLOGY")).toBeInTheDocument();
    expect(screen.getByText("Get in touch")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<MedicalServices />);

    const serviceCards = screen.getAllByRole("article");
    expect(serviceCards).toHaveLength(12);
  });

  it("renders contact section with correct information", () => {
    render(<MedicalServices />);

    expect(screen.getByText("(237) 681-812-255")).toBeInTheDocument();
    expect(screen.getByText("0123 Some place")).toBeInTheDocument();
    expect(screen.getByText("Working Hours")).toBeInTheDocument();
  });

  it("renders footer with all sections", () => {
    render(<MedicalServices />);

    expect(screen.getByText("Important Links")).toBeInTheDocument();
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(screen.getByText(/© 2021 Hospital's name/)).toBeInTheDocument();
  });
});
