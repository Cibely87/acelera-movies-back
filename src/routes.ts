import {
  getMovies,
  getMoviesId,
  postMovie,
  deleteMovieId,
} from "@controllers/movies"
import { getLogin } from "@controllers/user"
import { getTODO, itsWorks } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovies)
  app.get("/login", getLogin)
  app.get("/movie/:id", getMoviesId)

  app.post("/movie", postMovie)
  app.delete("/movie/:id", deleteMovieId)
}
