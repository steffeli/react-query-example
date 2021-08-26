import React from "react";
import type { Movie } from "../core/domain/movies";
import { Box, Image, Heading } from "@chakra-ui/react";

interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  return (
    <Box bg="lightgrey" p={4} borderRadius={6}>
      <Image src={movie.imageUrl} />
      <Heading as="h1" size="lg">
        {movie.name}
      </Heading>
      <Heading as="h2" size="sm">
        {movie.year}
      </Heading>
    </Box>
  );
}

export default MovieCard;
