import "../manager-menu/style.css";
import { useNavigate } from "react-router-dom";

const ManagerMenu = () => {
  const navigate = useNavigate();
  const clientsClick = () => {
    navigate("/Clients", { replace: true });
  };
  const salesmansClick = () => {
    navigate("/Clients", { replace: true });
  };
  const agronomiansClick = () => {
    navigate("/Clients", { replace: true });
  };
  const backClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="menu-back-container">
      <form className="menu-container">
        <button className="menu-button" onClick={backClick}>Back</button>
        <button className="menu-button" onClick={agronomiansClick}>Agronomians</button>
        <button className="menu-button" onClick={clientsClick}>Clients</button>
        <button className="menu-button" onClick={salesmansClick}>Salesmans</button>
      </form>
    </div>
  );
};
export default ManagerMenu;
