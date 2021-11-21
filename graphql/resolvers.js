import { getMovies, getId, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getId(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
