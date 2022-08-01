import { getMovies } from "@controllers/movies"
import { getLogin, getMoviesId, getTODO, itsWorks } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovies)
  app.get("/login", getLogin)
  app.get("/movie/:id"), getMoviesId
}
