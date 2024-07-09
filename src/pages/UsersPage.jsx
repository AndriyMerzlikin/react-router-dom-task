import { useEffect, useState } from "react";
import UsersList from "../components/UsersList/UsersList";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const response = await request.json();
        setUsers(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export default UsersPage;
