import { Id, QueryKeys } from "../core/types";
import React from "react";
import { useQuery } from "react-query";
import type { Movie } from "../core/domain/movies";
import { MovieService } from "../core/services/movie-service";
import { Box, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MainView from "../layouts/MainView";

function MovieDetails() {
  const { id } = useParams<{ id: string | undefined }>();

  const { isLoading, isError, data, error } = useQuery<Movie, Error>(
    [QueryKeys.MOVIES, { id }],
    () => MovieService.getMovieById(id!!)
  );

  return (
    <MainView>
      {isLoading && (
        <Container centerContent>
          <Spinner size="xl" />
        </Container>
      )}
      <Container>{!isLoading && <h1>{`MOVIE: ${data?.name}`}</h1>}</Container>
    </MainView>
  );
}

export default MovieDetails;
