import { GET_MOVIE } from "./actionsTypes";

const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return action.movie;
    default:
      return state;
  }
};
export default movieReducer;
