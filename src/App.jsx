import { Route, Routes } from "react-router-dom";
import {Login} from "./pages/Login/Login.jsx";
import { constants } from "./constants/index.js";

const {ROUTES} = constants;

function App() {
    return (
        <Routes>
            <Route exact path={ROUTES.LOGIN} element={<Login/>}/>
        </Routes>
    )
}

export default App;
