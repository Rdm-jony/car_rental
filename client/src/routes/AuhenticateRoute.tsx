import { useAppSelector } from "@/hooks/use-store";
import { selectUser } from "@/Redux/feature/User/userSlice";
import { Navigate } from "react-router";

const AuhenticateRoute = ({children}:{children:React.ReactNode}) => {
    const user = useAppSelector(selectUser)
    if (user.email) {
        return <Navigate to="/" replace />
    }
    return <>{children}</>


};

export default AuhenticateRoute;