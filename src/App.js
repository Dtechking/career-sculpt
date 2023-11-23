import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Main";
import { AuthProvider } from "./AuthContext";

const App = () => {
    return(
        <Router>
            <AuthProvider>
                <Main />
            </AuthProvider>
        </Router>
    )
}

export default App;