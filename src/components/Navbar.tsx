"use client";
import { Moon, Settings, User, LogOut, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import Image from "../../public/image/profile photo.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const navbar = () => {
  const { setTheme } = useTheme();
  const {toggleSidebar} = useSidebar();
  return (
    <nav className=" p-4 flex   items-center justify-between sticky top-0 bg-background z-10">
      <SidebarTrigger></SidebarTrigger>


{/* <Button variant={"outline"} onClick={toggleSidebar}>Custom Button</Button> */}


      <div className="flex items-center gap-4">
<Link href="/payment/"  >
        Payments
      </Link>
      <Link href="/users/" >
        Users
      </Link>
      {/* user theme  */}
      <div >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* theme  button */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={Image.src} />
            <AvatarFallback> cs</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={10}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
      
    </nav>
  );
};

export default navbar;
