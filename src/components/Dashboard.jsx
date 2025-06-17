import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <h2>Your Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default DashBoard;
