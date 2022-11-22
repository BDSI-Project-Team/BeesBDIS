import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "../customers/customers";
import HelloPage from "../hello-page/hello-page";
import Login from "../login-form/login";
import ManagerMenu from "../manager-menu/manager-menu";
import WeedSortsPage from "../weed-sorts/weed-sorts";

const MainPage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HelloPage />} />
          <Route path="/Weed-Sorts" element={<WeedSortsPage />} />
          <Route path="/Manager-Menu" element={<ManagerMenu />} />
          <Route path="/Clients" element={<Customers />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MainPage;
