// components/Footer.tsx (Light Version)
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter, Rss, MessageCircle } from "lucide-react";
import logo from "@/public/images/logo.png"
import name from "@/public/images/logo_name.png"

export function Footer() {
  const socialLinks = [
    // {
    //   Icon: Facebook,
    //   href: "https://facebook.com",
    //   label: "Facebook",
    //   color: "hover:text-blue-600"
    // },
    {
      Icon: Instagram,
      href: "https://instagram.com/kurukshetra108/",
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      Icon: Youtube,
      href: "https://youtube.com/@kuruksetra?si=GP3gQCFzJv0f4k3g",
      label: "YouTube",
      color: "hover:text-red-600"
    },
    // {
    //   Icon: Twitter,
    //   href: "https://twitter.com",
    //   label: "Twitter",
    //   color: "hover:text-blue-400"
    // },
  ];

  const footerLinks = [
    { text: "Terms", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "About Us", href: "/about" },
  ];

  return (
    <footer className="bg-white border-t-2 border-gray-200 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* About Us Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                About Us
              </h3>
            </div>

            {/* Logo and Brand */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image width={35} src={logo} alt="Kuruksetra" />

              </div>
              <div>
                <Image width={105} src={name} alt="Kuruksetra" />

              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              KURUKSHETRA is the intellectual battlefield for the soul of Bharat.
              In an age where mainstream narratives systematically suppress indigenous truths, we stand as a vanguard for civilizational reclamation. Our mission is to decolonize the Bharatiya mind, dismantle entrenched ideological hegemonies, and champion the Dharma-based narrative of our ancient civilization.
              We are the voice of the resistance. The voice of Dharma.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">
                <span className="font-semibold text-gray-700">Contact:</span>{" "}
                <Link
                  href="mailto:mail@kurukshetra.info"
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  mail@kurukshetra.info
                </Link>
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Follow Us
              </h3>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-100 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:transform hover:scale-110 text-gray-600 ${color}`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            {/* <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Stay Updated
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest news and updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                />
                <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Kurukshetra.info</p>
            </div>

            {/* Footer Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
