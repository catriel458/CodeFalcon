import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="https://i.ibb.co/rG7Nj46T/logo-Code-Falcon.png" 
            alt="CodeFalcon" 
            className="h-8 w-8"
          />
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            CodeFalcon
          </span>
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href}>
                  <a
                    className={cn(
                      "px-4 py-2 text-sm transition-colors hover:text-primary",
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
