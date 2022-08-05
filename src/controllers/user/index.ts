export const postLogin = async (request, response) => {
  const { email, password } = request.body
  if (email === "cibely.port@gmail.com" && password === "1234") {
    return response.json({ message: "Login efetuado com sucesso" })
  }
  return response.json({ message: "Acesso negado" })
}
