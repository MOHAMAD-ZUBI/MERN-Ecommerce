"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const UserDropdown = () => {
  const { data: session } = useSession();
  return (
    <Dropdown backdrop="blur" placement="bottom-end">
      <DropdownTrigger>
        <button className="flex outline-none border-none items-center justify-center">
          <FaRegUser size={25} />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-10">
          <p className="font-semibold">{session?.user.email}</p>
        </DropdownItem>

        <DropdownItem key="my_profile">My Profile</DropdownItem>
        <DropdownItem key="my_orders">My orders</DropdownItem>
        <DropdownItem key="my_orders">My Addresses</DropdownItem>
        <DropdownItem onClick={() => signOut()} key="logout" color="danger">
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
