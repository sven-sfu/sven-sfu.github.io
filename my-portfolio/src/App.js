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
          bg-[#4a4e54ff] text-[#4bb375ff] shadow-lg p-6 flex flex-col items-center justify-center
          md:fixed md:top-0 md:left-0 md:h-full md:w-80
          w-full top-0 position-fixed pt-20
          "
      >
        <img
          src="/svenInBrasil.webp"
          alt="Photo of Sven Jensen, GIS Software Developer"
          className="rounded-full w-28 h-28 object-cover mb-4 shadow-lg"
          style={{width: "164px", height: "164px"}}
        />
        <h1 className="text-2xl font-bold mb-1 text-center">Sven Jensen</h1>
        <p className="text-sm text-[#d9ffe9ff] text-center mb-4 max-w-md">
          I'm a Computer Science and Geography student at SFU. I also run a GIS software company called{" "}
          <strong>JensenGIS</strong>, where I build cool projects for clients and cloud based GIS tools for the Esri ArcGIS platform.
        </p>
        <div className="flex gap-3 mb-4">
          <a
            href="https://linkedin.com/in/sven--jensen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-[#4bb375ff]" />
          </a>
          <a
            href="https://github.com/svenweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-[#4bb375ff]" />
          </a>
          <a href="mailto:sven@analysis.net">
            <Mail className="w-5 h-5 text-[#4bb375ff]" />
          </a>
        </div>
      {/* Resume Download Button
        <Button style={{backgroundColor: "#d9ffe9ff", color: "#4a4e54ff", marginTop: "15px"}}className="mt-10 bg-[#d9ffe9ff] text-black hover:bg-[#d9ffe9ff]" asChild>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
         */}
      </aside>

       {/* Main Content */}
      <main
        className="
          md:ml-80
          pt-16
          "
      >
        {/* Header Navigation */}
        <header
        className="
          bg-[#4a4e54ff] shadow p-4 flex items-center justify-center gap-8
          fixed top-0 md:left-80 left-0 right-0 z-30 h-16
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
                The Save Instance Widget lets you save and share the current state of your web map in Experience Builder — including extent, visible layers, basemap, graphics, and more. It's inspired by the classic Save Session Widget from Web AppBuilder, but built specifically for ArcGIS Experience Builder.
              </p>
              <img
                src="/widgetDevImg-2.jpeg"
                alt="Screenshot of Saved Instance Widget interface"
                className="mt-4 rounded-sm shadow"
                style={{ width: "60%" }}
              />
              <div className="mt-4 flex gap-4">
                <a
                  href="https://jensengis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Learn more
                </a>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://community.esri.com/t5/arcgis-experience-builder-ideas/save-instance-widget/idi-p/1610260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Esri Community Forum
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-2 text-[#4a4e54ff]">Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                ArcGIS Maps SDK for Javascript
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                NextJS & ReactJS
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                Python
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                FastAPI
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                Docker
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                C++
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                NGINX
              </span>
               <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                ArcGIS
              </span>
              <span className="bg-[#d9ffe9ff] text-[#4a4e54ff] px-3 py-1 rounded-full">
                QGIS
              </span>
            </div>
          </div>
        </section>

         {/* Work Experience Section */}
        <section id="work" className="py-20 px-4 bg-white" style={{ margin: "auto" }}>
          <h2 className="text-3xl font-bold mb-6 text-[#4a4e54ff]">Work Experience</h2>
          <div className="space-y-6 ml-10">
                        <div>
              <h3 className="text-xl font-semibold">Founder @ <a href="https://jensengis.com" target='_blank' className="text-blue-600 underline">JensenGIS</a></h3>
              <p className="text-gray-700">July 2025 – Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Founded a GIS consulting company offering customized geospatial software solutions.</li>
                <li>Developing GIS SaaS products for organizations and municipalities.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">GIS Software Developer @ Mcelhanney</h3>
              <p className="text-gray-700">Feb 2024 – July 2025</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Developed custom ArcGIS widgets for internal mapping applications.</li>
                <li>Performed geoprocessing and ArcGIS Pro automation using Python scripts. Collected and quality-checked asset data in the field, followed by digitization and validation in ArcGIS Pro. Conducted spatial analysis and feature digitization using client-provided DEMs to prepare detailed field maps.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Web Developer, Mechanic, Ski Technician @ On Top Bike Shop – North Vancouver</h3>
              <p className="text-gray-700">July 2020 – February 2024</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Designed and developed the bike shop's website using HTML, CSS and Javascript with Zoho CRM integration on a Netlify-hosted site.</li>
              </ul>
            </div>
          </div>
        </section>

       {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-[#d9ffe9ff]" style={{ margin: "auto", display: "flex", justifyContent: "space-between" }}>
          <div className="space-y-4 ml-10">
            <h3 className="text-xl font-semibold"> <a href="https://sfu.ca" target='_blank' className="text-blue-600 underline">Simon Fraser University</a></h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bachelor of Science in Computer Science</li>
              <li>Minor in Geographical Information Science</li>
            </ul>
            <p className="text-gray-600">Expected Graduation: 2027</p>
          </div>
          <img src="/sfuLogo.png" alt="SFU Logo" style={{ width: "15%", height: "30%", marginRight: "10%"}} />
        </section>
        

       
      </main>
    </div>
  );
}

export default App;
