"use client";
import { React, useState } from "react";
import Image from "next/image";

import UserLoggedOut from "@/components/auth/UserLoggedOut";
import UserLoggedIn from "@/components/auth/UserLoggedIn";
import { Button } from "@mui/material";

const Header = () => {
  const [userLogged, setUserLogged] = useState(false);
  return (
    <header className="flex w-full h-24 justify-between items-center p-6 bg-red-300 relative">
      <div className="p-2  shadow shadow-zinc-800 bg-pink-300 rounded-full absolute left-3">
        <Image
          className="relative dark:invert"
          src="/Logo.svg"
          alt=" Logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <h1 className="absolute left-1/2 -translate-x-1/2 md:text-4xl text-white">
        La Petite Friperie
      </h1>
      <nav className=" w-3/12 h-full flex items-center absolute right-3">
        <ul className="flex w-full h-full  items-center justify-end">
          {userLogged ? <UserLoggedIn /> : <UserLoggedOut />}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
