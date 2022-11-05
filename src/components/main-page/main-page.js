import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloPage from "../hello-page/hello-page";
import Login from "../login-form/login";

const MainPage = () =>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/Login' element ={<Login/>} />
                    <Route path='/' element = {<HelloPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default MainPage;