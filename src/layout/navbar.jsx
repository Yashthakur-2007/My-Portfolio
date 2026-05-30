import Button from "@/components/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";


const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#education", label: "Education"},
    // {href: "#certificates", label: "Certificates"},
    // {href: "#contacts", label: "Contacts"},
];
const Navbar = ()=>{
    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const[isScrolled, setIsScrolled] = useState(false);
    
    const handleScrollToContact = () => {
      const contactSection = document.getElementById('contacts');
      if (contactSection) {
        const topPosition = contactSection.offsetTop;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    };
    
    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3":"bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-2 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    YT<span className="text-primary">.</span>
                </a>
                {/* desktop nav */}
                <div className=" hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
                        {navLinks.map((link, index) => {
                            return <a
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            key={index} href={link.href}>{link.label}</a>
                        })}
                    </div>
                </div>
                <div className="hidden md:block">
                    <Button size="sm" onClick={handleScrollToContact}>
                        Contacts
                    </Button>
                </div>
                {/* mobile view */}
                <button className="md:hidden p-2 text-foreground" onClick={()=>setIsMobileMenuOpen((prev) => !prev)}>
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>
            {/* mobile menu */}

            {isMobileMenuOpen &&(<div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => {
                            return <a
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                            key={index} href={link.href}
                            onClick={()=>setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                            }
                        )
                    }
                    <Button onClick={handleScrollToContact}>
                        Contacts
                    </Button>
                </div>
            </div>)}
        </header>
    )
}
export default Navbar