import { request } from "http"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = async (request, response) => {
  return response.json({ todos: [] })
}
