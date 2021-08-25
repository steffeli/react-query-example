import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from "miragejs"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

createServer({
  routes() {
    this.namespace = "api"
    this.timing = 300
    this.get("/movies", () => [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
          { id: 4, name: "The Dark Knight", year: 2008 },
        ]
    )
  },
})

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
