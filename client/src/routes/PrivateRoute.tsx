import PageLoader from "@/components/Loader/PageLoader";
import { useAppSelector } from "@/hooks/use-store";
import { useGetCurrentUserQuery } from "@/Redux/baseAPi";
import { selectUser } from "@/Redux/feature/User/userSlice";
import type React from "react";
import { Navigate } from "react-router"; // <- make sure it's from 'react-router-dom'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useGetCurrentUserQuery();
  const user = useAppSelector(selectUser);

  if (isLoading) {
    return <PageLoader />;
  }

  if (user.email) {
    return <>{children}</>; 
  }

  return <Navigate to="/signIn" replace />; 
};

export default PrivateRoute;
