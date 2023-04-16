"use client";
import Link from "next/link";
import { Button } from "@mui/material";
const UserLoggedIn = () => {
  return (
    <div className="flex w-full justify-around flex-wrap ">
      <Button
        onClick={() => {}}
        variant="outlined"
        color="secondary"
        className=" text-xs  md:text-sm "
      >
        Se déconnecter
      </Button>
      <Button variant="outlined" className="text-xs   md:text-sm">
        <Link href="/userProfil"> Mon Profil</Link>
      </Button>
      <Button variant="outlined" className="text-xs  md:text-sm ">
        <Link href="/"> Accueil</Link>
      </Button>
    </div>
  );
};

export default UserLoggedIn;
