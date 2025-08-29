import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/i18n";

const Navbar = () => {
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: t('projects') },
    { href: "/about", label: t('about') },
    { href: "/contact", label: t('contact') },
  ];

  const Logo = () => (
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
  );

  const NavLinks = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <div className={className}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          
            onClick={onClick}
            className={cn(
              "block px-4 py-2 text-sm transition-colors hover:text-primary",
              location === item.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </a>
        </Link>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 w-full max-w-7xl flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href}>
                  <span
                    className={cn(
                      "px-4 py-2 text-sm transition-colors hover:text-primary",
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <LanguageToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                <NavLinks className="flex flex-col space-y-4" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
