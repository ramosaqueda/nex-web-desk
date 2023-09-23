"use client";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
//import { SidebarContext } from "@/app/context/SidebarContext";
import { useRouter } from "next/navigation";


const navItems = [
    {
      section: "/",
      icon:"home"
    },
    {
      section: "/systemGroup/1",
      icon:"symptoms"    
    },
    {
      section: "/systemGroup/2",
      icon:"flag_circle"
    },
    {
      section: "/systemGroup/3",
      icon:"monitoring"
    },
    {
      section: "/systemGroup/4",
      icon:"public"
    }
    
  
  ]

const Sidebar = () => {
  const router = useRouter();
 // const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (


    <aside className="
        fixed 
        top-0 
        left-0
        bottom-0
        grid
        bg-orange-600
        place-items-center
        width-[56px]
        border-r-[1px] border-gray-200 
        border-top-right-radius-[px]
        borrder-bottom-right-radius-[300px]

      
        ">
        <nav className="
            relative
            align-center
            justify-center
            flex
            flex-auto
            flex-col
            gap-2
            z-2
         
        
               


            ">
        {navItems.map((item, index) => (

             
 
              <span className="
                    material-symbols-outlined grid 
                    place-items-center 
                    w-12 h-12 
                    text-white paddiing-[10px] 
                    text-decoration-none cursor-pointer" 
                    onClick={() => router.push(item.section)}
                    >
                      {item.icon}
              </span>
           
          ))}

        </nav>
         
    </aside>
  )
};

export default Sidebar;