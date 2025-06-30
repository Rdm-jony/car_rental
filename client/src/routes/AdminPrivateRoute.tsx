import PageLoader from "@/components/Loader/PageLoader";
import { useGetCurrentUserQuery } from "@/Redux/baseAPi";
import React from "react";
import { Navigate } from "react-router";

const AdminPrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { isLoading,data:user } = useGetCurrentUserQuery()
    if (isLoading) {
        return <PageLoader />
    }

    const isAdmin = user?.role === "owner";
   

    if (!user?.email) {
        return <Navigate to="/signIn" />
    }

    if (!isAdmin) {
        return <Navigate to="/signIn" />
    }

    return <>{children}</>

};

export default AdminPrivateRoute;