import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import LoginContent from "./LoginContent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "success",
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.resetHandlers());
afterAll(() => server.close());

test("Should require Username and Password.", async () => {
  render(
    <BrowserRouter>
      <LoginContent />
    </BrowserRouter>
  );
  const signinBtn = screen.getByText("Sign-in");
  expect(signinBtn).toBeDefined();
  fireEvent.click(signinBtn);
  await waitFor(() => {
    const errUser = screen.getByRole("err-username");
    const errPass = screen.getByRole("err-password");
    expect(errUser).toHaveTextContent("Username is required");
    expect(errPass).toHaveTextContent("Password is required");
  });
});

test("Wrong user login", async () => {
  render(
    <BrowserRouter>
      <LoginContent />
    </BrowserRouter>
  );
  const useernameBox = screen.getByPlaceholderText("Username");
  const passwordBox = screen.getByPlaceholderText("Password");

  fireEvent.change(useernameBox, { target: { value: "test" } });
  fireEvent.change(passwordBox, { target: { value: "test" } });
  expect(useernameBox).toHaveTextContent("test");
  expect(passwordBox).toHaveTextContent("test");
});
