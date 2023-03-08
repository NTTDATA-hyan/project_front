import { GET_MOVIE } from "./actionsTypes";

const getMovie = (movie) => {
  return {
    type: GET_MOVIE,
    movie,
  };
};
export default getMovie;
