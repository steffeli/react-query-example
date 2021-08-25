import React from 'react'
import { useQuery } from 'react-query'
import type { Movie } from '../core/domain/movies'
import { MovieService } from '../core/services/movie-service'
import { QueryKeys } from '../types/query-keys'

function MoviesOverview() {

	const {isLoading, isError, data, error} = useQuery<Movie[], Error>(QueryKeys.MOVIES, MovieService.getAllMovies)

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{!isLoading && data?.map(m => <h1 key={m.id}>{m.name}</h1>)}
		</div>
	)
}

export default MoviesOverview