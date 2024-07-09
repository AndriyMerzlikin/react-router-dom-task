import { useUser } from "../../contexts/UserContext";

const UserCompany = () => {
  const { user } = useUser();
  const { company } = user;

  return (
    <ul className="user-details">
      <li>
        <p className="user-detail">
          <span className="detail-label">Name:</span>{" "}
          <span className="detail-value">{company?.name}</span>
        </p>
      </li>
      <li>
        <p className="user-detail">
          <span className="detail-label">Catch Phrase:</span>{" "}
          <span className="detail-value">{company?.catchPhrase}</span>
        </p>
      </li>
      <li>
        <p className="user-detail">
          <span className="detail-label">BS:</span>{" "}
          <span className="detail-value">{company?.bs}</span>
        </p>
      </li>
    </ul>
  );
};

export default UserCompany;
