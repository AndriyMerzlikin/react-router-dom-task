import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h2>
        Ooops... something`s gone wrong!!! Please go back to{" "}
        <Link to={"/"}>Home</Link> page
      </h2>
    </>
  );
};

export default NotFoundPage;
