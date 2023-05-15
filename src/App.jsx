import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { constants } from "./constants/index.js";
import { ThemeProvider } from "./ThemeProvider";
import Layouts from "./components/Layouts";

const { ROUTES } = constants;

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route exact path={ROUTES.LOGIN} element={<Login />} />
                <Route element={<Layouts />} path={ROUTES.DASHBOARD} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
