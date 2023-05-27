import { Navigate, Outlet } from 'react-router-dom'
import { constants } from '../../constants'
import { getToken } from '../../utils/token'

const { ROUTES } = constants
const ProtectedRoutes = () => {
    const token = getToken()
    if (!token) {
        return <Navigate to={ROUTES.LOGIN} replace />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoutes
