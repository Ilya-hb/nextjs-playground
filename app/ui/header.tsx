import React from "react";
import { Button } from "./button";
import { User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-5 px-5 flex items-center justify-between fixed top-0">
      <Link href={"/"}>
        <h2 className="font-bold text-2xl">My Dashboard</h2>
      </Link>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href={"/"}>
              <Button variant={"link"}>Home</Button>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Button variant={"link"}>Account</Button>
            </Link>
          </li>
          <li>
            <Link href={"/weather"}>
              <Button variant={"link"}>Weather</Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center cursor-pointer">
        <User />
        <Button variant={"link"}>Username</Button>
      </div>
    </header>
  );
}
