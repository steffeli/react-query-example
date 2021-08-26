import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import MainView from "../../layouts/MainView";
import { Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormLabel, Input, Button } from "@chakra-ui/react";
import { QueryKeys } from "../../core/types";
import { MovieService } from "../../core/services/movie-service";

function AddMovie() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addMovieMutation = useMutation(
    QueryKeys.MOVIES,
    MovieService.createMovie,
    {
      onSuccess: (createdMovie) => {
        queryClient.setQueryData(
          [QueryKeys.MOVIES, { id: createdMovie.id }],
          createdMovie
        );
        reset();
      },
    }
  );

  const onSubmit = (e: any) => {
    addMovieMutation.mutate(e);
  };

  return (
    <MainView>
      <Heading mb="12">Add movie</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Name</FormLabel>
        <Input defaultValue="" {...register("name")} type="text" />
        <FormLabel>Year</FormLabel>
        <Input defaultValue="" {...register("year")} type="number" />
        <FormLabel>Image URL</FormLabel>
        <Input defaultValue="" {...register("imageUrl")} type="text" />
        <Button mt={4} isLoading={addMovieMutation.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </MainView>
  );
}

export default AddMovie;
