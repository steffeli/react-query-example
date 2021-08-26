import { QueryKeys } from "../core/types";
import React from "react";
import { useQuery } from "react-query";
import type { Movie } from "../core/domain/movies";
import { MovieService } from "../core/services/movie-service";
import { Box, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MainView from "../layouts/MainView";

function MoviesOverview() {
  const { isLoading, isError, data, error } = useQuery<Movie[], Error>(
    QueryKeys.MOVIES,
    MovieService.getAllMovies
  );

  return (
    <MainView>
      {isLoading && (
        <Container centerContent>
          <Spinner size="xl" />
        </Container>
      )}
      <SimpleGrid columns={4} spacing={10}>
        {!isLoading &&
          data?.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
      </SimpleGrid>
    </MainView>
  );
}

export default MoviesOverview;
