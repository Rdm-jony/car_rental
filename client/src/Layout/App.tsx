import { useAppDispatch } from "@/hooks/use-store";
import { useGetCurrentUserQuery } from "@/Redux/baseAPi";
import { setUser } from "@/Redux/feature/User/userSlice";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { RouterProvider } from "react-router";
import PageLoader from "@/components/Loader/PageLoader";
import { router } from "@/routes/routes";

const App = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCurrentUserQuery();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <PageLoader />;

return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
