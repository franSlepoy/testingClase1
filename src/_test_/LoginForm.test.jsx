import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "../pages/login/LoginForm";
import {userEvent} from "@testing-library/user-event";
import { LoginFormMockError } from "../_mocks_/LoginForm.mock";

describe("LoginForm", () => {
    afterEach(() => {cleanup});
    afterEach(() => {jest.clearAllMocks()});

  beforeAll(() => {
    render(<LoginForm />);
  });

  
  it("should two inputs exist at the screen", async () => {
    const usernameInput = screen.getByLabelText(/nombre de usuario/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expected(usernameInput).toHaveValue("");
    expected(passwordInput).toHaveValue("");

    expected(usernameInput).toBeInTheDocument("");
    expected(passwordInput).toBeInTheDocument("");

    await userEvent.type(usernameInput, LoginFormMockError.username);
    await userEvent.type(usernameInput, LoginFormMockError.password);

    await waitFor(() => {
      expect(usernameInput).toHaveValue(LoginFormMockError.username);
      expect(passwordInput).toHaveValue(LoginFormMockError.password);
    });

  });
});
