import "./style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const backButtonClick = () => {
    navigate("/", { replace: true });
  };
  const submitButtonClick = () =>{
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if(name !== 'admin' || password !=='admin'){
        alert("Error! You Entered Wrong Credentials!");
    }
    else{
        navigate('/Manager-Menu',{ replace: true })
    }

  }
  return (
    <div className="login-page-container">
      <img src="Kostil" alt=""></img>
      <form className="login-container">
        <button onClick={backButtonClick} className="header-button">Back</button>
        <p className="login-text">User Name</p>
        <input placeholder="User Name" id = 'name'></input>
        <p className="login-text">Password</p>
        <input type="password" id = 'password'></input>
        <button className = 'submit-button' onClick={submitButtonClick} placeholder="Password">Submit</button>
      </form>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <p>/</p>
    </div>
  );
};
export default Login;
