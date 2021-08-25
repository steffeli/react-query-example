import type { Movie } from "../domain/movies"

const getAllMovies = (): Promise<Movie[]> => fetch('/api/movies', {method: 'GET'}).then(response => {
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	return response.json() as Promise<Movie[]>
})
.then(data => {
		return data
})

export const MovieService = {
	getAllMovies
}