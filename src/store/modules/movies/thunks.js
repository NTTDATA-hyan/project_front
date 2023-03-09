import { toast } from "react-toastify";
import api from "../../../services/api";
import getMovie from "./actions";
const getMovieThunk = (movie, setError) => (dispatch) => {
  api
    .post("", { title: movie })
    .then((res) => {
      if (res.data.Error) {
        toast.error(res.data.Error);
      } else {
        dispatch(getMovie(res.data));
      }
    })
    .catch((err) => toast.error(err.message));
};
export default getMovieThunk;
