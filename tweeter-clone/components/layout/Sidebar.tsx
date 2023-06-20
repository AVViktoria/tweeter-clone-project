// icons
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

// hook
import useCurrentUser from "@/hooks/useCurrentUser";

// layouts
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
         {/* if current user login we show logOut  */}
           {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
          <SidebarTweetButton/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
