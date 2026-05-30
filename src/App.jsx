import React from "react";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Navbar from "@/layout/navbar";
import Contacts from "@/sections/contacts";
import Education from "@/sections/education";
import Certificates from "@/sections/certificates";
import Projects from "@/sections/projects";
import { Footer } from "./layout/footer";

const App = ()=>{
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Education />        
        <Contacts />
      </main>

      <Footer />
    </div>
  )
}
export default App