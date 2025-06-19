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

       {/* Main Content */}
      <main
        className="
          md:ml-72
          
          "
      >
        {/* Header Navigation */}
        <header
          className="
            bg-[#4a4e54ff]
            shadow
            p-4
            flex
            justify-center
            gap-8
            sticky
            top-0
            z-30
          "
        >
          <a href="#projects" className="text-[#d9ffe9ff] hover:underline">
            Projects
          </a>
          <a href="#work" className="text-[#d9ffe9ff] hover:underline">
            Work Experience
          </a>
          <a href="#education" className="text-[#d9ffe9ff] hover:underline">
            Education
          </a>
        </header>

         {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 bg-[#d9ffe9ff]"
          style={{ margin: "auto" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[#4a4e54ff]">Projects</h2>
          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">Saved Instance Widget</h3>
              <p className="text-gray-600 mt-2">
                An ArcGIS Experience Builder widget that saves and retrieves layer
                states for different user sessions. Built with React, ArcGIS JS API,
                and AppWrite.
              </p>
              <img
                src="/saved-instance-screenshot.png"
                alt="Screenshot of Saved Instance Widget interface"
                className="mt-4 rounded-lg shadow"
              />
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/yourusername/saved-instance-widget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
                <a
                  href="https://demo.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-2 text-[#4a4e54ff]">Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                ArcGIS JS API
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                Python
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                FastAPI
              </span>
            </div>
          </div>
        </section>

       
      </main>
    </div>
  );
}

export default App;
