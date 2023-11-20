import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Show from "./Show";
import UserSwitch from "./UserSwitch";
import Navbar from "./Navbar";
import Contacts from "./Contacts";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

const App = () => {
    return(
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Show />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/user" element={<UserSwitch />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" component={<Result />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;