import { Route, Routes } from 'react-router-dom'
import { constants } from './constants/index.js'
import Register from './pages/Register/Register.jsx'
import { ThemeProvider } from './ThemeProvider'
import Layouts from './components/Layouts'
import PreLoading from './components/Loading/index.jsx'
import { Suspense } from 'react'
import Login from './pages/Login/Login.jsx'
import Order from "./pages/Order/index.jsx";
import Campsite from './pages/Campsite/index.jsx'

const { ROUTES } = constants

const testDataForCampsites = [
    {id: "0", name: "King", location: "Tangerang"},
    {id: "1", name: "Queen", location: "Pekalongan"},
    {id: "2", name: "Jack", location: "Yogyakarta"},
    {id: "3", name: "Ten", location: "Sleman"},
    {id: "4", name: "Nine", location: "Kediri"}
]

function App() {
    return (
        <ThemeProvider>
            <Suspense fallback={<PreLoading />}>
                <Routes>
                    <Route exact path={ROUTES.LOGIN} element={<Login />} />
                    <Route exact path={ROUTES.REGISTER} element={<Register />} />
                    <Route exact path={ROUTES.ORDER} element={<Layouts><Order/></Layouts>} />
                    <Route exact path={ROUTES.CAMPSITE} element={<Layouts><Campsite menuList={testDataForCampsites}/></Layouts>} />
                    <Route element={<Layouts />} path={ROUTES.DASHBOARD} />
                </Routes>
            </Suspense>
        </ThemeProvider>
    )
}

export default App
