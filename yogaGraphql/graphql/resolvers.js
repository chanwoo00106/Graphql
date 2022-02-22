import { getMovies, getId, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit }) => getMovies(limit),
  },
};

export default resolvers;
