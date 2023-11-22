import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Show from "./Show";
import UserSwitch from "./UserSwitch";
import Navbar from "./Navbar";
import Contacts from "./Contacts";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import About from "./About";
import Domain from "./Pages/Domain"

const App = () => {
    return(
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Show />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/user" element={<UserSwitch />} />
                    <Route path="/aboutus/quiz" element={<Quiz />} />
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/aboutus/domain" element={<Domain/>} />
                    <Route path="/domain" element={<Domain/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;