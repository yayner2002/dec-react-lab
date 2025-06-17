import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };
  return (
    <div>
      <h3>Login Page</h3>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
