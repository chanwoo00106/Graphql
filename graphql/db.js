import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = async (limit) => {
  let res;
  if (limit <= 0) res = await axios.get(API_URL);
  else res = await axios.get(`${API_URL}limit=${limit}`);
  return res.data.data.movies;
};
