import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import GreetingCardForm from "./GreetingCardForm";

describe("GreetingCardForm", () => {
  const defaultProps = {
    formData: { recipient: "", message: "", sender: "", customImage: null },
    errors: {},
    handleInputChange: vi.fn(),
    handleImageUpload: vi.fn(),
    fileInputRef: { current: null },
    generateCard: vi.fn(),
    resetForm: vi.fn(),
  };

  it("renders all input fields", () => {
    render(<GreetingCardForm {...defaultProps} />);
    expect(screen.getByLabelText(/Recipient Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sender Name/i)).toBeInTheDocument();
  });

  it("displays error if recipient or sender is missing", () => {
    render(
      <GreetingCardForm
        {...defaultProps}
        errors={{
          recipient: "Recipient is required",
          sender: "Sender is required",
        }}
      />
    );
    expect(screen.getByText(/Recipient is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Sender is required/i)).toBeInTheDocument();
  });

  it("calls generateCard when Preview button is clicked", () => {
    render(<GreetingCardForm {...defaultProps} />);
    fireEvent.click(screen.getByText(/Preview Card/i));
    expect(defaultProps.generateCard).toHaveBeenCalled();
  });
});
