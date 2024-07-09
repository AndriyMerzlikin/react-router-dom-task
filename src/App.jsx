import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAddress from "./components/UserAddress/UserAddress";
import UserCompany from "./components/UserCompany/UserCompany";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailsPage />}>
            <Route path="address" element={<UserAddress />} />
            <Route path="company" element={<UserCompany />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
