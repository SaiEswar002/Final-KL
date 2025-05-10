import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NewsArticle from "../NewsArticle";

describe("NewsArticle", () => {
  const mockProps = {
    date: "January 1, 2024",
    title: "Test Article",
    likes: 42,
    comments: 10,
    imageSrc: "test-image.jpg",
    alt: "Test image",
  };

  it("renders article content correctly", () => {
    render(<NewsArticle {...mockProps} />);

    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.likes.toString())).toBeInTheDocument();
    expect(screen.getByText(mockProps.comments.toString())).toBeInTheDocument();

    const image = screen.getByAltText(mockProps.alt);
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(mockProps.imageSrc);
  });
});
