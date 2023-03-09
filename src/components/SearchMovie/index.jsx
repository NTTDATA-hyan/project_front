import { Button, Input } from "@ui5/webcomponents-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getMovieThunk from "../../store/modules/movies/thunks";
import "./style.scss";
const SearchMovie = () => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getMovieThunk(value));
    setValue("");
  };

  return (
    <div className="search-div">
      <Input
        placeholder="Write the move that you like"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "90%", maxWidth: "400px", margin: "0 auto" }}
      />
      <section>
        <Button
          design="Positive"
          onClick={handleSearch}
          style={{ width: "8rem", margin: "0 1rem" }}
        >
          Search
        </Button>
        <Button
          design="Negative"
          onClick={() => setValue("")}
          style={{ width: "8rem", margin: "0 1rem" }}
        >
          Reset
        </Button>
      </section>
    </div>
  );
};
export default SearchMovie;
