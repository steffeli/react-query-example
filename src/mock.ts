import { createServer, Model } from "miragejs"

const mockServer = () => createServer({
  seeds(server) {
    server.db.loadData({
      movies: [
        {id: 1, name: 'Dunkirk', year: 2017},
        {id: 2, name: 'The Dark Knight', year: 2008}
      ]
    });
  },
  routes() {
    this.namespace = "api"
    this.timing = 600
    this.get("/movies", (schema, request) => {
      return schema.db.movies
    })
    this.get("/movies/:id", (schema, request) => {
      let id = request.params.id
      return schema.db.movies.find(id)
    })
  },
})

export default mockServer