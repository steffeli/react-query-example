import { createServer } from "miragejs";

import { movies } from "./mock-data";

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
      this.post("/movies", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log("atters", request.requestBody);
        return schema.db.movies.insert(attrs);
      });
    },
  });

export default mockServer;
