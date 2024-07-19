"use client"

import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import NavContainer from "./NavContainer";
import { useState } from "react";
import { MovilMenu } from "./MovilMenu";
export default function Navbar() {

  const pathname = usePathname()
  const [showMovilMenu, setShowMovilMenu] = useState<boolean>(false)

  const isLoginPath = pathname === "/login"
  const isRegisterPath = pathname === "/register"
  const isAuthPath = isLoginPath || isRegisterPath
  const headerBg = isAuthPath ? "bg-primary" : "bg-my-black"

  return (
    <>
      <header className={`relative flex justify-between items-center px-8 ${headerBg} h-[56px] sm:h-[60px] 2xl:h-[64px]`}>
        <Logo isAuthPath={isAuthPath} />
        <NavContainer >
          <Nav pathname={pathname} setShowMovilMenu={setShowMovilMenu} />
        </NavContainer>
      </header>
      {
        showMovilMenu && <MovilMenu setShowMovilMenu={setShowMovilMenu} />
      }
    </>
  )
}