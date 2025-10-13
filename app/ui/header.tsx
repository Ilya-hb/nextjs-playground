import React from "react";
import { Button } from "./button";
import { User } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-5 px-5 flex items-center justify-between fixed top-0">
      <h2 className="font-bold text-2xl">My Dashboard</h2>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Button variant={"link"}>Home</Button>
          </li>
          <li>
            <Button variant={"link"}>Account</Button>
          </li>
          <li>
            <Button variant={"link"}>Example</Button>
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
