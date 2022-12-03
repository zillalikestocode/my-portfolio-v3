import React from "react";
import Link from "next/link";
import { CgMenuMotion } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { sidebar } from "../atoms/sidebar";

const Header = () => {
  const [sidebarState, setSidebar] = useRecoilState(sidebar)

  return (
    <header>
      <nav className="w-full flex items-center p-7 md:p-5 ">
        <Link href="/">
          <div className="gradient font-['Mark_Pro'] text-3xl">
            emmanuel.dev
          </div>
        </Link>

        <button onClick={()=> setSidebar(true)} className="ml-auto flex items-center">
          <CgMenuMotion fontSize={35} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
