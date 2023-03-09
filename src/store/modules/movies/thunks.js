import { toast } from "react-toastify";
import api from "../../../services/api";
import getMovie from "./actions";
const getMovieThunk = (movie, setError) => (dispatch) => {
  api
    .post("", { title: movie })
    .then((res) => {
      dispatch(getMovie(res.data));
      if (res.data.Error) {
        toast.error(res.data.Error);
      }
    })
    .catch((err) => toast.error(err.data));
};
export default getMovieThunk;
