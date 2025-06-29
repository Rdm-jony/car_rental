import { BookIcon, Car, LayoutDashboard, Settings, Upload } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Link } from "react-router"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Add Car",
        url: "/dashboard/addcar",
        icon: Upload,
    },
    {
        title: "Manage Cars",
        url: "#",
        icon: Car,
    },
    {
        title: "Manage Bookings",
        url: "#",
        icon: BookIcon,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent >
                <SidebarGroup>

                    <SidebarGroupContent>
                        <div className="flex flex-col items-center  w-full my-5">
                            <Avatar className="w-15 h-15">
                                <AvatarImage  src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">Jony Das</p>
                        </div>
                        <SidebarMenu>

                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}