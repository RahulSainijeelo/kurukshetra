"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Youtube, Instagram, Facebook, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/public/images/logo.png"
import name from "@/public/images/logo_name.png"
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-US", {
          weekday: "short",
          month: "short", 
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const navigationTabs = ["History", "Dharm", "Nation", "Politics", "Globe", "About"];
  const socialIcons = [
    { Icon: Youtube, href: "#", color: "#FF0000" },
    { Icon: Instagram, href: "#", color: "#E4405F" },
    { Icon: Facebook, href: "#", color: "#1877F2" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white border-b-2 border-gray-200",
        isScrolled ? "shadow-lg" : ""
      )}
    >
      <div className="bg-white border-b border-gray-300 p-[9px]">
        <div className="container mx-auto px-3 md:px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center align-baseline">
              <Link href="/" className="flex items-center hover:text-decoration">
                <Image width={35} src={logo} alt="Kuruksetra"/>
                <Image width={80} src={name} alt="Kuruksetra"/>
              </Link>
            </div>

            <div className="hidden md:flex items-center text-sm text-gray-600 font-medium">
              <Clock size={16} className="mr-2" />
              {currentTime}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                {socialIcons.map(({ Icon, href, color }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="transition-colors hover:opacity-80"
                  >
                    <Icon size={20} style={{ color }} />
                  </Link>
                ))}
              </div>
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-500"
                  >
                    <User size={16} />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-gray-300 text-gray-700"
                  >
                    <User size={16} />
                    <span className="hidden sm:inline">Login</span>
                  </Button>
                </Link>
              )}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="hidden md:flex items-center justify-center space-x-8 py-[3px]">
            {navigationTabs.map((tab, index) => (
              <NavLink key={index} href={`/${tab.toLowerCase()}`}>
                {tab}
              </NavLink>
            ))}
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-3">
                {navigationTabs.map((tab, index) => (
                  <MobileNavLink
                    key={index}
                    href={`#${tab.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {tab}
                  </MobileNavLink>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {socialIcons.map(({ Icon, href, color }, index) => (
                        <Link
                          key={index}
                          href={href}
                          className="transition-colors hover:opacity-80"
                        >
                          <Icon size={20} style={{ color }} />
                        </Link>
                      ))}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {currentTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium uppercase tracking-wide transition-all duration-300 relative group py-2 px-3 hover:text-orange-400"
      style={{textDecoration:"none"}}
   >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-base font-medium uppercase tracking-wide py-3 px-2 rounded-md transition-all duration-300 hover:bg-gray-800 hover:text-orange-400"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
