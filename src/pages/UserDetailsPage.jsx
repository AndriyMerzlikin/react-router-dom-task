import { useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import { useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const UserDetailsPage = () => {
  //   const [user, setUser] = useState({});
  const { user, setUser } = useUser();

  const { id } = useParams();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const request = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const response = await request.json();
        setUser(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserById();
  }, [id, setUser]);

  return (
    <>
      <UserCard user={user} />
    </>
  );
};

export default UserDetailsPage;
