import { useUser } from "../../contexts/UserContext";

/* eslint-disable react/prop-types */
const UserAddress = () => {
  const { user } = useUser();
  const { address } = user;

  return (
    <ul className="user-details">
      <li>
        <p className="user-detail">
          <span className="detail-label">Street:</span>{" "}
          <span className="detail-value">{address?.street}</span>
        </p>
      </li>
      <li>
        <p className="user-detail">
          <span className="detail-label">Suite:</span>{" "}
          <span className="detail-value">{address?.suite}</span>
        </p>
      </li>
      <li>
        <p className="user-detail">
          <span className="detail-label">City:</span>{" "}
          <span className="detail-value">{address?.city}</span>
        </p>
      </li>
      <li>
        <p className="user-detail">
          <span className="detail-label">Zipcode:</span>{" "}
          <span className="detail-value">{address?.zipcode}</span>
        </p>
      </li>
    </ul>
  );
};

export default UserAddress;
