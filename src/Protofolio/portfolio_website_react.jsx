import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      {/* Header */}
      <header className="portfolio-header">
        <div className="container header-inner">
          <h1>Nalina | Frontend Developer</h1>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Hi, I'm Nalina 👋</h2>
        <p>
          A passionate Front-End Developer with 3+ years of experience in building dynamic,
          responsive web applications using React.js, JavaScript, and modern UI libraries.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="container">
          <h3>Projects</h3>
          <div className="project-grid">
            <div className="project-card">
              <h4>Kauvery OP EMR</h4>
              <p>
                A hospital app for managing patient data, appointments, prescriptions, and reports.
                Used React, MUI, API integrations.
              </p>
            </div>
            <div className="project-card">
              <h4>Metaspeed Admin Panel</h4>
              <p>
                Web-based config panel for dynamic API & key setup. Tech used: React, TypeScript, Tailwind.
              </p>
            </div>
            <div className="project-card">
              <h4>BMRCL Metro Project</h4>
              <p>
              Designed and developed the BMRCL application using HTML and CSS to add
the layout and design to the web page and Java script to add the
functionalities to the UI components.

              </p>
            </div>
            <div className="project-card">
              <h4>Quess Corp - Wafers Application</h4>
              <p>
              This internal application is designed to manage the anniversary and birthday
records of employees, as well as to keep them informed about important
company news and announcements.

              </p>
            </div>
           
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <div className="container text-center">
          <h3>Skills</h3>
          <div className="skills-grid">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>jQuery</span>
            <span>TypeScript</span>
            <span>Git</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h3>Let's Connect</h3>
          <p>Interested in working together or have a question? Reach out!</p>
          <div className="contact-icons">
            <a href="mailto:nalinanandu995@gmail.com">
              <Mail />
            </a>
            <a href="https://github.com/NalinaRanjan/" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/nalina-p-b306b213a/" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 Nalina. All rights reserved.
      </footer>
    </div>
  );
}
