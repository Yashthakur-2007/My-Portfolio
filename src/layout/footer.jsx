import { Heart } from "lucide-react";
import {FaGithub as Github} from "react-icons/fa";
import {FaSquareXTwitter as Twitter} from "react-icons/fa6";
import {CiLinkedin as Linkedin} from "react-icons/ci";

const socialLinks = [
  { icon: Github, href: "https://github.com/Yashthakur-2007", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yash-thakur-70b73431b/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Yashthakur_2302", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
//   { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              YT<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Yash Thakur. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};