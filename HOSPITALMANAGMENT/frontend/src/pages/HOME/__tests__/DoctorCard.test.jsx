import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DoctorCard from "../DoctorCard";

describe("DoctorCard", () => {
  const mockProps = {
    imageSrc: "test-image.jpg",
    doctorName: "Dr. John Smith",
    specialty: "Cardiology",
  };

  it("renders doctor information correctly", () => {
    render(<DoctorCard {...mockProps} />);

    expect(screen.getByText(mockProps.doctorName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.specialty)).toBeInTheDocument();
    expect(screen.getByText(/View Profile/i)).toBeInTheDocument();

    const image = screen.getByAltText(`Doctor ${mockProps.doctorName}`);
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(mockProps.imageSrc);
  });
});
