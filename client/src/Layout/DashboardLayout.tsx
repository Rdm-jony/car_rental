import { AppSidebar } from "@/components/AppSidebar/AppSidebar"
import Navbar from "@/components/Navbar/Navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <div className="w-full">
                <Navbar>
                    <SidebarTrigger className="hidden" />
                </Navbar>
                <div className="flex">
                    <AppSidebar />
                    <main className="m-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}