import { QueryKeys } from "../core/types";
import React from "react";
import { useQuery } from "react-query";
import type { Movie } from "../core/domain/movies";
import { MovieService } from "../core/services/movie-service";
import {
  Box,
  Input,
  Button,
  Container,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
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
      <InputGroup colorScheme="orange">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input mb="10" placeholder="Search" />
      </InputGroup>
      {isLoading && (
        <Container centerContent>
          <Spinner size="xl" />
        </Container>
      )}
      {!isLoading && (
        <>
          <SimpleGrid mb="10" columns={5} spacing={10}>
            {data?.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </SimpleGrid>
          <Container centerContent>
            <Button colorScheme="orange">Load more</Button>
          </Container>
          <Box h="100px" />
        </>
      )}
    </MainView>
  );
}

export default MoviesOverview;
