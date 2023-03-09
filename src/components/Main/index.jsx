import Explain from "../Explain";
import Movie from "../Movie";
import SearchMovie from "../SearchMovie";
import "./style.scss";
const Main = () => {
  return (
    <div className="main-div">
      <Explain />
      <SearchMovie />
      <Movie />
    </div>
  );
};
export default Main;
