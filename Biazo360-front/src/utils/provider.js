"use client";

import { HeroUIProvider } from "@heroui/react";

export default function Provider({ children }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
