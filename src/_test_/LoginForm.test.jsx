import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "../pages/login/LoginForm";
import userEvent from "@testing-library/user-event"; // Corrección en import
import { LoginFormMockError } from "../_mocks_/LoginForm.mock";

describe("LoginForm", () => {
  
  // Limpia el DOM después de cada test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  // Renderiza el formulario antes de cada test
  beforeEach(() => {
    render(<LoginForm />);
  });

  // Test para verificar que los inputs existen
  it("should have two inputs on the screen", async () => {
    // Seleccionamos los inputs por su label
    const usernameInput = screen.getByLabelText(/nombre de usuario/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);

    // Verificamos que los inputs existen en el DOM
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Simulamos escribir en los inputs (corrección de inputs)
    await userEvent.type(usernameInput, LoginFormMockError.username);
    await userEvent.type(passwordInput, LoginFormMockError.password);

    // Esperamos a que los valores se actualicen en el DOM
    await waitFor(() => {
      expect(usernameInput).toHaveValue(LoginFormMockError.username);
      expect(passwordInput).toHaveValue(LoginFormMockError.password);
    });
  });
});
