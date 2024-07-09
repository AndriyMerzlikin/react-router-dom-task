import { NavLink, Outlet, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const { username, email } = user;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="user-card">
      <button onClick={handleGoBack} className="go-back-button">
        Go back
      </button>
      <ul className="user-details">
        <li>
          <p className="user-detail">
            <span className="detail-label">Nickname:</span>{" "}
            <span className="detail-value">{username}</span>
          </p>
        </li>
        <li>
          <p className="user-detail">
            <span className="detail-label">Email:</span>{" "}
            <span className="detail-value">{email}</span>
          </p>
        </li>
      </ul>
      <div className="user-links">
        <NavLink
          to={"address"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Address
        </NavLink>
        <NavLink
          to={"company"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Company
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default UserCard;
