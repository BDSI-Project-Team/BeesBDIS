import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloPage from "../hello-page/hello-page";
import Login from "../login-form/login";
import WeedSortsPage from "../weed-sorts/weed-sorts";

const MainPage = () =>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/Login' element ={<Login/>} />
                    <Route path='/' element = {<HelloPage/>}/>
                    <Route path="/Weed-Sorts" element = {<WeedSortsPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default MainPage;