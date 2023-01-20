import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Registration from "./components/Registration";
import UserList from "./components/UserList";
import HomePage from "./components/HomePage";

const AppRouter=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Welcome></Welcome>}></Route>
                <Route path="/login" element=  {<Login></Login>}></Route>
                <Route path="/registration" element={<Registration></Registration>}></Route>
                <Route path="/user/data" element={<UserList></UserList>}></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                
            </Routes>
        </Router>
    )
}

export default AppRouter;

