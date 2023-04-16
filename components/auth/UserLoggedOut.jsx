"use client";
import Link from "next/link";
import { Button } from "@mui/material";
const UserLoggedOut = () => {
  return (
    <div className="flex justify-around border flex-col sm:flex-row">
      <Button variant="outlined" size="small">
        <Link href="/signIn" className="text-xs">
          Se connecter
        </Link>
      </Button>
      <Button variant="outlined" size="small">
        <Link href="/signUp" className="text-xs">
          {" "}
          S&apos;inscrire
        </Link>
      </Button>
    </div>
  );
};

export default UserLoggedOut;
