import { headerContext } from "../../../App"
import { useContext } from "react";

const Login = () => {
  const setHeaderDisplay = useContext(headerContext)
  setHeaderDisplay(false)
  
  return (
    <div>Login</div>
    );
}

export default Login;
