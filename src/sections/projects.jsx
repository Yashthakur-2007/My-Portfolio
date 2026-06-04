import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimateBorderButton";

const pj = [
    {
        title: "PlacementOs",
        description:
          "A comprehensive analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "/projects/p1.png",
        tags: ["React", "JavaScript", "Tailwindcss"],
        link: "https://placement-os-ten.vercel.app/",
        github: "https://github.com/Yashthakur-2007/PlacementOs",
    },
    {
        title: "FreeSketch",
        description:
          "A full-featured Sketch website with a modern design and intuitive user interface.",
        image: "/projects/p2.png",
        tags: ["React", "JavaScript", "Tailwindcss"],
        link: "https://free-sketch.vercel.app/",
        github: "https://github.com/Yashthakur-2007/FreeSketch",
    },
    {
        title: "BrainDump",
        description:
          "An intelligent Note-taking website, helping users create/delete/edit Notes and to-do items faster.",
        image: "/projects/p3.png",
        tags: ["React", "JavaScript", "Tailwindcss"],
        link: "https://brain-dump-mu-woad.vercel.app/",
        github: "https://github.com/Yashthakur-2007/BrainDump",
    },
   {
        title: "Portfolio",
        description:
          "A Modern style portfolio website to showcase my work.",
        image: "/projects/p4.png",
        tags: ["React", "JavaScript", "Tailwindcss"],
        link: "https://my-portfolio-eta-lake-84.vercel.app/",
        github: "https://github.com/Yashthakur-2007/My-Portfolio",
    },
];

const Projects = ()=>{
    return(
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* section header  */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">Features Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web applications to
                    innovative tools that solve real-world problems.
                </p>
            </div>
            {/* project grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {pj.map((pj , idx) =>(
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={pj.image} alt={pj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                {/* overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity-300">
                                    <a href={pj.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={pj.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            {/* content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {pj.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 
                                      text-muted-foreground group-hover:text-primary
                                       group-hover:translate-x-1 
                                       group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {pj.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pj.tags.map((tag, tagIdx) =>(
                                        <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            {/* view all cta  */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <a
                    href="https://github.com/Yashthakur-2007?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </a>
            </div>
        </div>
    </section>
);
};
export default Projects