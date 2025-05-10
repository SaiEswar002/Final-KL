import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactInfo } from "./ContactInfo";

describe("ContactInfo", () => {
  it("renders all contact sections", () => {
    render(<ContactInfo />);

    expect(screen.getByText("Emergency")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Working Hours")).toBeInTheDocument();
  });

  it("renders contact details correctly", () => {
    render(<ContactInfo />);

    expect(screen.getByText("(237) 681-812-255")).toBeInTheDocument();
    expect(screen.getByText("0123 Some place")).toBeInTheDocument();
    expect(screen.getByText("fildineeesoe@gmil.com")).toBeInTheDocument();
    expect(screen.getByText("Mon-Sat 09:00-20:00")).toBeInTheDocument();
    expect(screen.getByText("Sunday Emergency only")).toBeInTheDocument();
  });
});
