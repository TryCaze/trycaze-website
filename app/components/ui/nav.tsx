"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("relative w-full z-50 rounded-none", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About our studio</HoveredLink>
            <HoveredLink href="#technology">Technology</HoveredLink>
            <HoveredLink href="/pricing">Pricing</HoveredLink>
            <HoveredLink href="/faq">FAQ</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Web Development"
              href="#services"
              src="/website-ui-svgrepo-com.svg"
              description="Developing simple portfolios to complex e-commerce stores."
            />
            <ProductItem
              title="Interface Design"
              href="#services"
              src="/css-svgrepo-com.svg"
              description="Attractive designs that will give you the attention you deserve."
            />
            <ProductItem
              title="Website Maintenance"
              href="#services"
              src="/checked-success-svgrepo-com.svg"
              description="Your website to be updated with latest technologies."
            />
            <ProductItem
              title="Hosting"
              href="#services"
              src="/www-svgrepo-com.svg"
              description="Hosting websites with custom domain names."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Portfolio</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">E-commerce</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}