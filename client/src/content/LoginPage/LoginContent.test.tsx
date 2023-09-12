import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginContent from "./LoginContent";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("should require Username and Password", async () => {
  render(
    <BrowserRouter>
      <LoginContent />
    </BrowserRouter>
  );
  const signinBtn = screen.getByText("Sign-in");
  // if (signinBtn) {
  expect(signinBtn).toBeDefined();
  fireEvent.click(signinBtn);
  const msg = screen.getByRole("err-username");
  await waitFor(() => expect(msg).toHaveTextContent("Username is required"));
});
