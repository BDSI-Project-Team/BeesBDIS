import { useEffect, useState } from "react";
import "../weed-sorts/style.css";
import { useNavigate } from "react-router-dom";

const WeedSortsPage = () => {
  const [weedData, setFetchWeed] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:4000/weed-sort")
        .then((response) => response.json())
        .then((data) => data);

      setFetchWeed(result.recordset);
    };
    fetchData();
  }, []);
  
  const navigate = useNavigate();
  const backButtonClick = () =>{
    navigate("/", { replace: true });
  }

  return (
    <div className="weed-container">
      <button className="header-button" onClick = {backButtonClick}>Back</button>
      <h1 className="weed-text">Weed Sorts: </h1>
      {weedData.map(({ ID, WEED_NAME, PRICE, WEED_DESCRIPTION }) => (
        <p className="weed-text" key={ID}>
          {" "}
          {WEED_NAME} {PRICE} {WEED_DESCRIPTION}.
          <hr></hr>
        </p>
      ))}
    </div>
  );
};

export default WeedSortsPage;
