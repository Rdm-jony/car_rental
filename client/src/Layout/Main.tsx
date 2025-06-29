import Footer from "@/components/Footer/Footer";
import PageLoader from "@/components/Loader/PageLoader";
import Navbar from "@/components/Navbar/Navbar";
import { useAppDispatch } from "@/hooks/use-store";
import { useGetCurrentUserQuery } from "@/Redux/baseAPi";
import { setUser } from "@/Redux/feature/User/userSlice";
import { useEffect } from "react";
import { Outlet } from "react-router";


const Main = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading } = useGetCurrentUserQuery()

    useEffect(() => {
        if (data) {
            dispatch(setUser(data))
        }
    }, [data, dispatch])

    if (isLoading) {
        return <PageLoader />
    }
    return (
        <div>
            <Navbar>""</Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default Main;