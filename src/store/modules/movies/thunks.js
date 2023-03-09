import api from "../../../services/api";
import getMovie from "./actions";

const getMovieThunk = (movie, setError) => (dispatch) => {
  api
    .post("", { title: movie })
    .then((res) => {
      console.log(res);
      dispatch(getMovie(res.data));
    })
    .catch((err) => console.log(err));
};
export default getMovieThunk;
