import { NavLink, Outlet } from "react-router-dom";
import { UserProvider } from "../../contexts/UserContext";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
      </header>
      <main>
        <UserProvider>
          <Outlet />
        </UserProvider>
      </main>
    </>
  );
};

export default Layout;
