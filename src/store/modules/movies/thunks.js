import api from "../../../services/api";
import getMovie from "./actions";

const getMovieThunk = (movie, setError) => (dispatch) => {
  api
    .get("", movie)
    .then((res) => {
      dispatch(getMovie(res.data));
      console.log(res);
    })
    .catch((err) => console.log(err));
};
export default getMovieThunk;
