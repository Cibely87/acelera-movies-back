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
    const deleteMovieId = await getMovies.delete(id)
    return response
      .status(200)
      .json({ ...deleteMovieId, message: "Deletado com sucesso!" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const upDateMovie = async (request, response) => {
  try {
    const { id } = request.params
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
    } = request.body

    const getMovies = getRepository(Movies)
    const upMovie = await getMovies.findOne(id)
    if (title) upMovie.title = title
    if (subtitle) upMovie.subtitle = subtitle
    if (resume) upMovie.resume = resume
    if (releaseDate) upMovie.releaseDate = releaseDate
    if (image) upMovie.image = image
    if (director) upMovie.director = director
    if (writer) upMovie.writer = writer
    if (classification) upMovie.classification = classification
    if (studio) upMovie.studio = studio
    if (note) upMovie.note = note
    if (actors) upMovie.actors = actors
    if (awards) upMovie.awards = awards

    const saveMovie = getMovies.save(upMovie)
    return response
      .status(200)
      .json({ ...saveMovie, message: "Alterado com Sucesso!" })
  } catch (error) {
    return response.status(500).json(error)
  }
}
