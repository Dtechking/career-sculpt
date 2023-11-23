import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Show from './Show';
import Contacts from "./Contacts";
import UserSwitch from "./UserSwitch";
import Quiz from "./Pages/Quiz";
import About from "./Pages/About";
import Result from "./Pages/Result";
import Domain from "./Pages/Domain";

const Main = () => {
    <div>
        <Navbar />
        <Routes>                    
            <Route path="/" element={<Show />} />                    
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/user" element={<UserSwitch />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/result" element={<Result />} />
            <Route path="/aboutus/domain" element={<Domain/>} />
            <Route path="/domain" element={<Domain/>} />
        </Routes>
    </div>
}

export default Main;