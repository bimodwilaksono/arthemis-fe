import { Route, Routes } from "react-router-dom";
import { constants } from '../constants';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ProtectedRoutes from './components/ProtectedRoute';
import Layouts from '../components/Layouts';
import Campsite from '../pages/Campsite';
import Users from '../pages/Users';
import Order from '../pages/Order';

const { ROUTES} = constants

const NavigationConfigs = () => (
    <Routes>
        <Route element={<Login />} path={ROUTES.LOGIN} />
        <Route exact path={ROUTES.REGISTER} element={<Register />} />
        <Route element={<ProtectedRoutes />}>
            <Route element={<Layouts />} path={"/"} />
            <Route
                element={
                    <Layouts>
                        <Order />
                    </Layouts>
                }
                path={ROUTES.ORDER}
            />
            <Route
                element={
                    <Layouts>
                        <Campsite />
                    </Layouts>
                }
                path={ROUTES.CAMPSITE}
            />
            <Route
                element={
                    <Layouts>
                        <Users />
                    </Layouts>
                }
                path={ROUTES.USERS}
            />
        </Route>
    </Routes>
);

export default NavigationConfigs;
