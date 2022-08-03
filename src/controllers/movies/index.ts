import { Movies } from "@models/entity/Movies"
import { getRepository } from "typeorm"
import { request } from "http"

export const getMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(Movies)
    const findMovie = await movieRepository.find()
    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMoviesId = async (request, response) => {
  try {
    const { id } = request.params
    const movieRepository = getRepository(Movies)
    const findMovie = await movieRepository.findOne(id)
    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postMovie = async (request, response) => {
  const movie = createMovie(request.body)
  const movieRepository = getRepository(Movies)
  const criaMovie = movieRepository.create(movie)
  const saveMovie = await movieRepository.save(criaMovie)
  return response.status(200).json(saveMovie)
}

const createMovie = (body) => {
  const {
    title,
    gender,
    subtitle,
    resume,
    releaseDate,
    image,
    director,
    writer,
    classification,
    studio,
    note,
    actors,
    awards,
  } = body
  return {
    title,
    gender,
    subtitle,
    resume,
    releaseDate,
    image,
    director,
    writer,
    classification,
    studio,
    note,
    actors,
    awards,
  }
}

export const deleteMovieId = async (request, response) => {
  try {
    const { id } = request.params
    const getMovies = getRepository(Movies)
    const result = await getMovies.delete(id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
