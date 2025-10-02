"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <Navbar className="bg-white shadow-lg" maxWidth="xl">
      <NavbarBrand>
        <p className="font-bold text-2xl text-blue-600">Biazo360</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            color={pathname === "/" ? "primary" : ""}
            className={pathname === "/" ? "" : "text-black"}
            href="/"
          >
            Início
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/sobre"}>
          <Link
            color={pathname === "/sobre" ? "primary" : ""}
            className={pathname === "/sobre" ? "" : "text-black"}
            href="/sobre"
          >
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contato"}>
          <Link
            color={pathname === "/contato" ? "primary" : ""}
            className={pathname === "/contato" ? "" : "text-black"}
            href="/contato"
          >
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/rastreio" variant="shadow">
            Rastrear Encomenda
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
