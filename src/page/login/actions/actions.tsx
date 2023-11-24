export const validateCredentials = (email: string, password: string) => {
  if (
    email == null ||
    email == "" ||
    !regexEmail(email) ||
    email == undefined
  ) {
    throw new Error("O campo e-mail não é valido");
  }

  if (password == null || password == "" || password == undefined) {
    throw new Error("O campo senha não é valido");
  } else if (password.length +1 <= 6) {
    throw new Error("A senha deve ter no minimo 6 caracteres");
  }
  return;
};

/**
 * Função para balidar campo de email, conforme regex
 * @param email string
 * @returns boolean
 */
const regexEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = false;
  valid = regex.test(email);
  return valid;
};
