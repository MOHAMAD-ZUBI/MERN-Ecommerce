"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
} from "@nextui-org/react";

import { FiShoppingBag } from "react-icons/fi";
import { useSession } from "next-auth/react";

import { useCart } from "@/hooks/useCart";
import UserDropdown from "./UserDropdown";

export default function Header() {
  const { data } = useSession();
  const { data: cartData } = useCart();
  const totalProducts = cartData?.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Orders", link: "/orders" },
    { title: "Cart", link: "/cart" },
    { title: "Logout", link: "/signout" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="py-[10px]"
      maxWidth="2xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit text-2xl">GREENMIND</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-black" href="#">
            Protein
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#">
            Pre Wokrout
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex justify-center  ">
          <Link href="/cart" className="">
            <Badge
              content={totalProducts}
              shape="circle"
              size="md"
              showOutline={false}
              className="text-white bg-black"
            >
              <FiShoppingBag size={25} />
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {!data?.user ? (
            <Button
              as={Link}
              className="text-white font-[500] bg-primary"
              href="/signin"
              variant="flat"
            >
              Sign In
            </Button>
          ) : (
            <UserDropdown />
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <div className="mt-[100px]" />
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
