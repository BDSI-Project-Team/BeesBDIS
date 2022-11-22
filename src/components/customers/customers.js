import { useEffect, useState } from "react";
import "../customers/style.css";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:4000/clients")
        .then((response) => response.json())
        .then((data) => data);

      setUserData(result.recordset);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const backButtonClick = () => {
    navigate("/Manager-Menu", { replace: true });
  };
  return (
    <div className="customer-container">
      <button className="header-button" onClick={backButtonClick}>
        Back
      </button>
      <p className="customer-text">Select query</p>
      <select name="select">
        <option value="value1">Значение 1</option>
        <option value="value2" selected>
          Значение 2
        </option>
        <option value="value3">Значение 3</option>
      </select>
      <button className="header-button">Apply</button>
      <hr></hr>
      {userData.map(({ ID, FIRST_NAME, LAST_NAME, PHONE, EMAIL, ORDERS }) => (
        <p className="weed-text" key={ID}>
          {" "}
          {FIRST_NAME} {LAST_NAME} {PHONE} {EMAIL} {ORDERS}.
          <hr></hr>
        </p>
      ))}
      <p></p>
    </div>
  );
};

export default Customers;
