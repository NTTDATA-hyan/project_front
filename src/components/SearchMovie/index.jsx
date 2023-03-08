import { Button, Input } from "@ui5/webcomponents-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getMovieThunk from "../../store/modules/movies/thunks";

const SearchMovie = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getMovieThunk(value));
    setValue("");
  };

  return (
    <div>
      <Input
        placeholder="Write the move that you like"
        value=""
        onChange={(e) => setValue(e.target.value)}
      />
      <Button design="Positive" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};
export default SearchMovie;
