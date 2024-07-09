import ListItem from "./ListItem/ListItem";

/* eslint-disable react/prop-types */
const UsersList = ({ users }) => {
  return (
    <ul>
      {users.length
        ? users.map((user) => <ListItem key={user.id} user={user} />)
        : null}
    </ul>
  );
};

export default UsersList;
