
import { Navigate } from 'react-router-dom';
import { CheckingAuth } from '../ui/components';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { Login } from '../auth/pages/Login';



export const CheckingRoutes = ({children}) => {

    const { status, pathname } = useCheckAuth();

    if (status === "checking") {
        return <CheckingAuth />
    } 

    

    if (status === "not-authenticated" && !pathname.includes("/auth")) {
        return <Navigate to={"/auth/login"}/>
    }
    if ( status === "authenticated" && pathname.includes("/auth")) {
        return <Navigate to={"/jounal"}/>
    }

    return children;
}