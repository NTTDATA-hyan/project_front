import { BiCameraMovie } from "react-icons/bi";
import "./style.scss";
const Header = () => {
  return (
    <div className="header-container">
      <h1>Movie</h1>

      <BiCameraMovie size={30} />
    </div>
  );
};
export default Header;
