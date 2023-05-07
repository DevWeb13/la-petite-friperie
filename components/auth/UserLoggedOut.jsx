"use client";
import Link from "next/link";
import { Button } from "@mui/material";

import styles from "../../styles/components/home.module.css";
const UserLoggedOut = () => {
  return (
    <div className="flex justify-around  flex-col   sm:flex-row ">
      <Button
        variant="outlined"
        size="small "
        className={[
          "mb-2 sm:mb-0 mr-2 min-w-max hover:bg-blue-300 hover:text-white hover:border-none",
          styles.sizeXxs,
        ]}
      >
        <Link href="/signIn" className="lg:text-xs 2xl:text-lg">
          Se connecter
        </Link>
      </Button>
      <Button
        variant="outlined"
        size="small "
        className={["mr-2 max-h-max", styles.sizeXxs]}
      >
        <Link href="/signUp" className="lg:text-xs 2xl:text-lg">
          {" "}
          S&apos;inscrire
        </Link>
      </Button>
    </div>
  );
};

export default UserLoggedOut;
