import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  it("renders all main sections", () => {
    render(<ContactSection />);

    expect(screen.getByText("Get in touch")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Emergency")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Working Hours")).toBeInTheDocument();
  });

  it("renders contact form with all inputs", () => {
    render(<ContactSection />);

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("renders footer with all sections", () => {
    render(<ContactSection />);

    expect(screen.getByText("Important Links")).toBeInTheDocument();
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText(/© 2021 Hospital's name/)).toBeInTheDocument();
  });
});
