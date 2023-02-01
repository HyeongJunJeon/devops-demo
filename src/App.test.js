import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blocko text", () => {
  render(<App />);
  const text = screen.getByText(/blocko/i);
  expect(text).toBeInTheDocument();
});
