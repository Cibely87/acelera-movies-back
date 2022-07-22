import { Movies } from "@models/entity/Movies"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getMovies = (request, response) => {
  const repositoryMovie = getRepository(Movies)
  const movie = repositoryMovie.find()
  return response.json(movie)
}
