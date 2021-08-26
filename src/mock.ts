import type { Movie } from "core/domain/movies";
import { createServer } from "miragejs";

const movies: Movie[] = [
  {
    id: 1,
    name: "Dunkirk",
    year: 2017,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
  },
  {
    id: 2,
    name: "The Dark Knight",
    year: 2008,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    name: "Cruella",
    year: 2021,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
  },
  {
    id: 4,
    name: "Mortal Kombat",
    year: 2021,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
  },
  {
    id: 5,
    name: "Godzilla vs. Kong",
    year: 2021,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
  },
  {
    id: 6,
    name: "The Shawshank Redemption",
    year: 1994,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 7,
    name: "Taken",
    year: 2008,
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wrJjDB8SSJJKcpXVf4KAxZIHvBZ.jpg",
  },
];

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        movies,
      });
    },
    routes() {
      this.namespace = "api";
      this.timing = 600;
      this.get("/movies", (schema, request) => {
        return schema.db.movies;
      });
      this.get("/movies/:id", (schema, request) => {
        let id = request.params.id;
        return schema.db.movies.find(id);
      });
    },
  });

export default mockServer;
