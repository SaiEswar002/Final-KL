import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HospitalWebsite from "../HospitalWebsite";

describe("HospitalWebsite", () => {
  it("renders all main sections", () => {
    render(<HospitalWebsite />);

    expect(screen.getByText(/KL-hOSPITALS/i)).toBeInTheDocument();
    expect(screen.getByText(/Caring for Life/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Doctors/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Better information, Better health/i)
    ).toBeInTheDocument();
  });
});
