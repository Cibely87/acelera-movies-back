import { getMovies, getLogin, getMoviesId } from "@controllers/movies"
import { getTODO, itsWorks } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovies)
  app.get("/login", getLogin)
  app.get("/movie/:id"), getMoviesId
}
