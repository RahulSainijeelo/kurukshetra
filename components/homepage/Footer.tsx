import Link from "next/link";
import Image from "next/image";
import {  Instagram, Youtube, Mail,} from "lucide-react";
import logo from "@/public/images/logo.png"
import name from "@/public/images/logo_name.png"

export function Footer() {
  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://instagram.com/kurukshetra108/",
      label: "Instagram",
      color: "hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    {
      Icon: Youtube,
      href: "https://youtube.com/@kuruksetra?si=GP3gQCFzJv0f4k3g",
      label: "YouTube",
      color: "hover:text-white hover:bg-red-600",
      bgColor: "bg-red-600"
    },
  ];

  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "Politics", href: "/category/politics" },
    { text: "Dharm", href: "/category/dharm" },
    { text: "Nation", href: "/category/nation" },
    { text: "Globe", href: "/category/globe" },
    { text: "History", href: "/category/history" }
  ];

  const legalLinks = [
    { text: "Terms of Service", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-2">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 py-4">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Image width={35} src={logo} alt="Kuruksetra" />
                  </div>
                </div>
              </div>
              <div>
                <Image width={120} src={name} alt="Kuruksetra" className="brightness-0 invert" />
              </div>
            </div>

            <div className="max-w-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                KURUKSHETRA is the intellectual battlefield for the soul of Bharat. 
                In an age where mainstream narratives systematically suppress indigenous truths, 
                we stand as a vanguard for civilizational reclamation.
              </p>
              <div className="inline-block">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide">
                  THE VOICE OF DHARMA
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-8 h-8 bg-orange-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-orange-400" />
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>{" "}
                  <Link
                    href="mailto:kurukshetra5751@gmail.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                  >
                    kurukshetra5751@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="block text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform"
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-60"></span>
                    {link.text}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ Icon, href, label, color, bgColor }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 hover:rotate-6"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                    <div className={`absolute inset-0 rounded-xl ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <Icon size={20} className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-4 uppercase tracking-wide text-sm">
                Legal
              </h3>
              <nav className="space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="block text-gray-400 hover:text-gray-200 transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start space-x-2">
                <span>&copy; {new Date().getFullYear()}</span>
                <span className="text-orange-400 font-semibold">Kurukshetra.info</span>
                <span>•</span>
                <span>All rights reserved</span>
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Truth in Journalism</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <span className="text-red-500">♥</span>
                <span>for Bharat</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
              <span className="font-sanskrit text-orange-400">ॐ सत्यमेव जयते</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
