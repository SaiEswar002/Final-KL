import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AppointmentForm from "../AppointmentForm";

describe("AppointmentForm", () => {
  it("renders all form fields", () => {
    render(<AppointmentForm />);

    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
  });

  it("allows form submission", () => {
    render(<AppointmentForm />);

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "john@example.com" },
    });

    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();
  });
});
