"use client";

import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // kept for API compatibility, unused
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName: _pending, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
