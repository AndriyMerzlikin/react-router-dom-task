/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ListItem = ({ user }) => {
  return (
    <li className="list-item">
      <Link to={`/users/${user.id}`} className="user-link">
        {user.name}
      </Link>
    </li>
  );
};

export default ListItem;
