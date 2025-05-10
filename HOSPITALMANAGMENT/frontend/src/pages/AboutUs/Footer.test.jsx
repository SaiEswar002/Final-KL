import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders brand information", () => {
    render(<Footer />);

    expect(screen.getByText("Meddical")).toBeInTheDocument();
    expect(screen.getByText(/Leading the Way in Medical/)).toBeInTheDocument();
  });

  it("renders important links", () => {
    render(<Footer />);

    expect(screen.getByText("Important Links")).toBeInTheDocument();
    expect(screen.getByText("Appointment")).toBeInTheDocument();
    expect(screen.getByText("Doctors")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("renders newsletter section", () => {
    render(<Footer />);

    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Enter your email address")).toBeInTheDocument();
  });

  it("renders copyright and social links", () => {
    render(<Footer />);

    expect(screen.getByText(/© 2021 Hospital's name/)).toBeInTheDocument();
    const socialIcons = screen.getAllByRole("img");
    expect(socialIcons.length).toBeGreaterThan(0);
  });
});
