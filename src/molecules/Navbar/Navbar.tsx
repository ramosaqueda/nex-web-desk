"use client";
  
import Container from "@molecules/container/Container";
import UserMenu from "@molecules/userMenu/userMenu";

import Logo from "@molecules/logo/Logo";
const Navbar = () => (
  <div className="fixed w-full bg-slate-50 z-10 shadow-md">
    <div className="py-4 boder-b-[1px] border-gray-200">
        <Container>
            <div className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                z-0
                "
                
            >
            
            <Logo />
 
            <UserMenu />
            </div>
    
           
        </Container>
    </div>
  </div>
)

export default Navbar