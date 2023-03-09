import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Stars = ({ stars }) => {
  const starCount =
    stars != "N/A" ? parseInt((parseInt(stars.split("/")[0]) * 5) / 10) : stars;

  return (
    <span>
      {starCount === 5 ? (
        <>
          <AiFillStar /> <AiFillStar /> <AiFillStar />
          <AiFillStar /> <AiFillStar />
        </>
      ) : starCount === 4 ? (
        <>
          <AiFillStar /> <AiFillStar />
          <AiFillStar /> <AiFillStar /> <AiOutlineStar />
        </>
      ) : starCount === 3 ? (
        <>
          <AiFillStar /> <AiFillStar />
          <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />
        </>
      ) : starCount === 2 ? (
        <>
          <AiFillStar /> <AiFillStar />
          <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
        </>
      ) : starCount === 1 ? (
        <>
          <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
          <AiOutlineStar />
        </>
      ) : (
        <>N/A</>
      )}
    </span>
  );
};
export default Stars;
