import { useSelector } from "react-redux";

const Movie = () => {
  const movie = useSelector(({ movie }) => movie);
  console.log(movie);
  return <div>{movie && <p>{movie.Title}</p>}</div>;
};
export default Movie;
