import { Route, Routes } from 'react-router-dom'
import { constants } from './constants/index.js'
import { Register } from './pages/Register/Register.jsx'
import { ThemeProvider } from './ThemeProvider'
import Layouts from './components/Layouts'
import PreLoading from './components/Loading/index.jsx'
import { Suspense } from 'react'
import Login from './pages/Login/Login.jsx'

const { ROUTES } = constants

function App() {
    return (
        <ThemeProvider>
            <Suspense fallback={<PreLoading />}>
                <Routes>
                    <Route exact path={ROUTES.LOGIN} element={<Login />} />
                    <Route exact path={ROUTES.REGISTER} element={<Register />} />
                    <Route element={<Layouts />} path={ROUTES.DASHBOARD} />
                </Routes>
            </Suspense>
        </ThemeProvider>
    )
}

export default App
