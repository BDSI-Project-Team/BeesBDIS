import "../header/style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const managerLoginButtonClick = () => {
    navigate("/Login", { replace: true });
  };
  const weedSortsButtonClick = () => {
    navigate("/Weed-Sorts");
  };
  const shopButtonClick = () => {
    navigate("/Shop");
  };
  const agronomistsButtonClick = () => {
    navigate("/Agronomists");
  };
  return (
    <div className="header">
      <p className="header-text">Cannabis Yushchenko</p>
      <button onClick={weedSortsButtonClick} className="header-button">
        Weed Sorts
      </button>
      <button onClick={shopButtonClick} className="header-button">
        Shop
      </button>
      <button onClick={agronomistsButtonClick} className="header-button">
        Our Best Agronomists
      </button>
      <button onClick={managerLoginButtonClick} className="header-button">
        Manager Login
      </button>
    </div>
  );
};
export default Header;
