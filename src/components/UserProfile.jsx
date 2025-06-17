import { useParams } from "react-router-dom";
const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>user id : {userId} </h2>
    </div>
  );
};

export default UserProfile;
