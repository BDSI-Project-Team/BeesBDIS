import Header from "../header/header";
import "../hello-page/style.css";
import { useNavigate } from "react-router-dom";

const HelloPage = () => {
  const navigate = useNavigate();
  const startButtonClick = () => {
    navigate("/Shop", { replace: true });
  };
  const onDevTextClick = () =>{
    navigate("/Devs");
  }
  return (
    <div className="hello-page-container">
      <Header />
      <p className="hello-page-text">
        Did you know that Yushchenko sells cannabis? <br></br> Now you will
        know! <br></br> Our company has been on the market since 2008. <br></br>
        You thought only the Orange Revolution could bring so much enjoyment?
        <br></br>You were wrong! <br></br>Taste the rich taste of our cannabis
        and immerse yourself in the world of pleasure
      </p>
      <button onClick={startButtonClick} className="hello-page-button">Get Started Now!</button>
      <footer className="hello-page-bottom-footer">
        <p onClick={onDevTextClick} className="hello-page-bottom-text">Dev Team</p>
      </footer>
    </div>
  );
};
export default HelloPage;
