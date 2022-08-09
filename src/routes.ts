import {
  getMovies,
  getMoviesId,
  postMovie,
  deleteMovieId,
  upDateMovie,
} from "@controllers/movies"
import { getTODO, itsWorks } from "@controllers/todo"
import { postLogin } from "@controllers/user"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovies)
  app.post("/login", postLogin)
  app.get("/movie/:id", getMoviesId)

  app.post("/movie", postMovie)
  app.delete("/movie/:id", deleteMovieId)
  app.put("/movie/:id", upDateMovie)
}
