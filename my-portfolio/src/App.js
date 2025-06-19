import logo from './logo.svg';
import './App.css';
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="min-h-screen font-[Fira_Code,_monospace]">
            {/* Sidebar for desktop, top section for mobile */}
      <aside
        className="
          bg-[#4a4e54ff] text-[#4bb375ff] shadow-lg p-6 flex flex-col items-center
          md:fixed md:top-0 md:left-0 md:h-full md:w-72
          w-full
          "
      >
        <img
          src="/headshot.jpg"
          alt="Photo of Sven Jensen, GIS Software Developer"
          className="rounded-full w-28 h-28 object-cover mb-4 shadow-lg"
        />
        <h1 className="text-2xl font-bold mb-1 text-center">Sven Jensen</h1>
        <p className="text-sm text-[#d9ffe9ff] text-center mb-4">
          GIS Software Developer & CS Student
        </p>
        <p className="text-sm text-[#d9ffe9ff] text-center mb-4 max-w-md">
          I'm a Computer Science student at SFU with a Minor in Geographical
          Information Science. I also run a GIS software company called{" "}
          <strong>JensenGIS</strong>, where we offer consulting services and
          deliver cloud-based GIS SaaS solutions.
        </p>
        <div className="flex gap-3 mb-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-[#4bb375ff]" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-[#4bb375ff]" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="w-5 h-5 text-[#4bb375ff]" />
          </a>
        </div>
        <Button className="mt-6 bg-[#4bb375ff] text-black hover:bg-[#d9ffe9ff]" asChild>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </aside>
    </div>
  );
}

export default App;
