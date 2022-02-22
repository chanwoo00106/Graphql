import db from "../db/movies";

let movies = db;

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return movies.filter((movie) => movie.id === id)[0];
    },
  },
  Mutation: {
    addMovie: (_, { name, rating }) => {
      // 영화 제목 중복 검사
      if (movies.find((movie) => movie.name === name)) return null;

      // 데이터베이스에 추가
      const newMovie = {
        id: movies.length + 1,
        name,
        rating,
      };
      movies.push(newMovie);
      return newMovie;
    },
    movieDelete: (_, { id }) => {
      const clear = movies.filter((i) => i.id !== id);
      if (movies.length > clear.length) {
        const movie = movies.filter((i) => i.id === id);
        movies = clear;
        return movie[0];
      }
      return null;
    },
    updateMovie: (_, { id, name, rating }) => {
      const index = movies.findIndex((i) => i.id === id);
      if (name) movies[index].name = name;
      if (rating) movies[index].rating = rating;
      return movies[index];
    },
  },
};

export default resolvers;
