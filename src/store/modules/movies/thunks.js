import api from "../../../services/api";
import getMovie from "./actions";

const getMovieThunk = (movie, setError) => (dispatch) => {
  api
    .get(`https://www.omdbapi.com/?i=tt3896198&apikey=8510023c&t=${movie}`)
    .then((res) => {
      dispatch(getMovie(res.data));
    })
    .catch((err) => console.log(err));
};
export default getMovieThunk;
