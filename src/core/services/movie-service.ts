import type { Id } from "../../core/types";
import type { Movie } from "../domain/movies";

const api = <T>(input: RequestInfo, init?: RequestInit): Promise<T> =>
  fetch(`/api${input}`, init)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .then((data) => {
      return data;
    });

const getAllMovies = () => api<Movie[]>("/movies", { method: "GET" });

const getMovieById = (id: Id) => api<Movie>(`/movies/${id}`, { method: "GET" });

const createMovie = (movie: Movie) => {
  console.log("movie", movie);
  return api<Movie>("/movies", { method: "POST", body: JSON.stringify(movie) });
};

export const MovieService = {
  getAllMovies,
  getMovieById,
  createMovie,
};
