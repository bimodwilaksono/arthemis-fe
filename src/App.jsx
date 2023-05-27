import { Route, Routes } from 'react-router-dom'
import { constants } from './constants/index.js'
import Register from './pages/Register/Register.jsx'
import { ThemeProvider } from './ThemeProvider'
import Layouts from './components/Layouts'
import PreLoading from './components/Loading/index.jsx'
import { Suspense } from 'react'
import Login from './pages/Login/Login.jsx'
import Order from './pages/Order/index.jsx'
import Campsite from './pages/Campsite/index.jsx'
import { ModalsProvider } from '@mantine/modals'
import Users from './pages/Users/index.jsx'

const { ROUTES } = constants

function App() {
    return (
        <ThemeProvider>
            <ModalsProvider>
                <Suspense fallback={<PreLoading />}>
                    <Routes>
                        <Route exact path={ROUTES.LOGIN} element={<Login />} />
                        <Route exact path={ROUTES.REGISTER} element={<Register />} />
                        <Route
                            exact
                            path={ROUTES.ORDER}
                            element={
                                <Layouts>
                                    <Order />
                                </Layouts>
                            }
                        />
                        <Route
                            exact
                            path={ROUTES.CAMPSITE}
                            element={
                                <Layouts>
                                    <Campsite />
                                </Layouts>
                            }
                        />
                        <Route element={<Layouts />} path={ROUTES.DASHBOARD} />
                        <Route
                            path={ROUTES.USERS}
                            element={
                                <Layouts>
                                    <Users />
                                </Layouts>
                            }
                        />
                        <Route
                            path={ROUTES.ORDER}
                            element={
                                <Layouts>
                                    <Order />
                                </Layouts>
                            }
                        />
                    </Routes>
                </Suspense>
            </ModalsProvider>
        </ThemeProvider>
    )
}

export default App
