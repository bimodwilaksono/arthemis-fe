import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { constants } from "./constants/index.js";
import { Register } from "./pages/Register/Register.jsx";
import { ThemeProvider } from "./ThemeProvider";
import Layouts from "./components/Layouts";

const { ROUTES } = constants;

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route exact path={ROUTES.LOGIN} element={<Login />} />
                <Route exact path={ROUTES.REGISTER} element={<Register />} />
                <Route element={<Layouts />} path={ROUTES.DASHBOARD} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
