import { useMemo } from "react";
import Button from "@/components/button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AnimatedBorderButton } from "../components/AnimateBorderButton";

const skills = [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Fast api",
    "Git",
    "Github Actions",
    "AWS",
    "Matplotlib",
    "Matlab",

    
];

const Hero = ()=>{
    const floatingDots = useMemo(
      () =>
        Array.from({ length: 30 }, (_, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 5,
        })),
      []
    );

    const marqueeSkills = useMemo(() => [...skills, ...skills], []);

    const handleDownloadCV = () => {
      const link = document.createElement('a');
      link.href = '/Resume.pdf';
      link.download = 'Yash_Thakur_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const handleScrollToContact = () => {
      const contactSection = document.getElementById('contacts');
      if (contactSection) {
        const topPosition = contactSection.offsetTop;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        });
      }
    };
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* bg */}
            <div className="absolute inset-0">
                <img src="/bg-3i.png" alt = "Hero image" className="w-full h-full object-cover opacity-25"/>
                <div className="absolute inset-0 bg-linear-to-b from background/20 via-background/80 to-background"/>
            </div>

            {/* green dot */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingDots.map((dot) => (
                    <div
                      key={dot.id}
                      className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                      style={{
                        backgroundColor: "#20B2A6",
                        left: dot.left,
                        top: dot.top,
                        animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
                        animationDelay: `${dot.delay}s`,
                      }}
                    />
                ))}
                </div>
                {/* content */}
                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* left content */}
                        <div className="space-y-8 ">
                            <div className="animate-fade-in">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                        Software Engineer + Cloud Enthusiast
                                </span>
                            </div>
                            {/* headline */}
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
                                    <span className="text-primary glow-text">Hi! I'm</span>
                                    <br />
                                    Yash Thakur
                                    <br />
                                    <span className="font-serif  font-normal text-white">And I'm a Software Engineer.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                                    I'm a Full Stack Developer, with experience in AI/ML and cloud technologies. Passionate about building scalable, intelligent, and user-friendly applications that solve real-world problems.
                                </p>
                            </div>
                            {/* cta */}
                            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                                <Button size="lg" onClick={handleScrollToContact}>
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </Button>
                                <AnimatedBorderButton onClick={handleDownloadCV}>
                                    <Download className="h-5 w-5"/>
                                    Download CV
                                </AnimatedBorderButton>
                            </div>
                            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                                <span className="text-sm text-muted-foreground">Follow me: </span>
                                {[
                                    { icon: FaGithub, href: "https://github.com/Yashthakur-2007" },
                                    { icon: CiLinkedin, href: "https://www.linkedin.com/in/yash-thakur-70b73431b/"},
                                    { icon: FaSquareXTwitter, href: "https://x.com/Yashthakur_2302" },
                                ].map((social, idx) => (
                                    <a
                                      key={idx}
                                      href={social.href}
                                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    >
                                      {<social.icon className="w-5 h-5" />}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {/* right coloumn */}
                        <div className="relative animate-fade-in animate-delay-300">
                            {/* profile image  */}
                            <div className="relative max-w-md mx-auto">
                                <div
                                    className="absolute inset-0 
                                    rounded-3xl bg-linear-to-br 
                                  from-primary/30 via-transparent 
                                  to-primary/10 blur-2xl animate-pulse"
                                />
                                <div className="relative glass rounded-3xl p-2 glow-border">
                                    <img src="/profile-photo.png" alt="Yash thakur" className="w-full aspect-4/5 object-cover rounded-2xl" />
                                    {/* floating badge */}
                                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                            <span className="text-sm font-medium">Available for work </span>
                                        </div>
                                    </div>
                                    {/* stats badge  */}
                                    <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-100">
                                        <div className="text-2xl font-bold text-primary">
                                            0
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Years Exp.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* skills */}
                    <div className="mt-20 animate-fade-in animation-delay-600">
                        <p className="text-sm text-muted-foreground mb-6 text-center">
                            Technologies I work with
                        </p>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-marquee w-max">
                                {marqueeSkills.map((skill, idx) => (
                                    <div key={`${skill}-${idx}`} className="flex shrink-0 px-8 py-4 whitespace-nowrap">
                                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 
                    animate-fade-in animation-delay-800"
                >
                    <a
                      href="#about"
                      className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span className="text-xs uppercase tracking-wider">Scroll</span>
                      <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
        </section>

    )
}
export default Hero