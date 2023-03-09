import { Button } from "@ui5/webcomponents-react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./style.scss";
const Movie = () => {
  const movie = useSelector(({ movie }) => movie);
  const [like, setLike] = useState(false);
  const likeMovie = () => {
    setLike(!like);
  };
  return (
    <div>
      {movie.Title ? (
        <div className="movie-div">
          <section className="movie-div_details">
            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p>
            <p className="bold">
              Actor: <span>{movie.Actors}</span>
            </p>
            <p className="bold">Review</p>
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
          <section className="movie-not-found-div_details">
            <h3></h3>
            <p></p>
            <p className="bold"></p>
            <p className="bold"></p>
            <Button
              style={{
                backgroundColor: "gray",
                color: "white",
                border: "none",
                padding: "auto",
                hover: "none",
                cursor: "unset",
              }}
            >
              Favorite <span></span>
            </Button>
          </section>
          <section>
            <figure>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg"
                alt={movie.Title}
              />
            </figure>
          </section>
        </div>
      )}
    </div>
  );
};
export default Movie;
