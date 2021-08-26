import React from "react";
import type { Movie } from "../core/domain/movies";
import { Box, Image, Heading } from "@chakra-ui/react";

interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  return (
    <Box
      _hover={{ transform: "translateY(-14px)" }}
      h="100%"
      border="1px solid #d7d7d7"
      boxShadow="md"
      borderRadius={8}
    >
      <Image objectFit="scale-down" borderTopRadius={8} src={movie.imageUrl} />
      <Box paddingX={4} paddingY={2}>
        <Heading as="h1" size="md">
          {movie.name}
        </Heading>
        <Heading color="gray" as="h2" size="xs">
          {movie.year}
        </Heading>
      </Box>
    </Box>
  );
}

export default MovieCard;
