import { Button } from "@ui5/webcomponents-react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import wait from "../../assets/pngwing 1.svg";
import Stars from "../Stars";
import "./style.scss";
const Movie = () => {
  const movie = useSelector(({ movie }) => movie);

  const [like, setLike] = useState(false);

  const stars = movie.Ratings ? movie.Ratings[0].Value : "N/A";

  const likeMovie = () => {
    setLike(!like);
  };
  return (
    <div>
      {movie.Title ? (
        <div className="movie-div">
          <section className="movie-div_details">
            <h3>{movie.Title}</h3>
            <p>{movie.Plot != "N/A" ? movie.Plot : "No description found"}</p>
            <p className="bold">
              Actor: <span>{movie.Actors}</span>
            </p>
            <p className="bold">
              Review <Stars stars={stars} />
            </p>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "auto",
              }}
              onClick={likeMovie}
            >
              Favorite{" "}
              <span>{like ? <AiFillHeart /> : <AiOutlineHeart />}</span>
            </Button>
          </section>
          <section>
            <figure>
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
          </section>
        </div>
      ) : (
        <div className="movie-not-found-div">
          <section>
            <figure>
              <img src={wait} alt={movie.Title} />
            </figure>
          </section>
          <section className="movie-not-found-div_details">
            <p>We are waiting for you to tell us a movie</p>
          </section>
        </div>
      )}
    </div>
  );
};
export default Movie;
