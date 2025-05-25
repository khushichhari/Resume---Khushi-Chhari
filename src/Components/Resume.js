import React from "react";
import "./Styles/Resume.css";

const Resume = () => {
  return (
    <>
      <div className="resume-container">
        <div className="personal-detail">
          <h1 className="resume-title">Khushi Chhari</h1>
          <p className="resume-subtitle">Full Stack Web Developer</p>
          <p className="resume-contact">chharikhushi8@gmail.com | 7558649228</p>
          <p className="resume-links">
            <a
              href="https://linkedin.com/in/khushichhari"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            |{" "}
            <a
              href="https://github.com/khushichhari"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            |{" "}
            <a
              href="https://www.hackerrank.com/profile/chharikhushi8"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerRank
            </a>
          </p>
        </div>

        {/* Career Objective */}
        <section className="career-objective">
          <h2 className="section-title">Career Objective</h2>
          <p className="para">
            Aspiring Full Stack Web Developer skilled in React.js and MERN
            stack, eager to create impactful digital solutions. Passionate about
            learning and delivering high-quality user experiences in
            collaborative teams.
          </p>
        </section>

        {/* Education */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <p className="education-institution">
            G.H. Raisoni College Engineering and Management
            <span className="float-right">2022 - 2026</span>
          </p>
          <p className="education-degree">
            Computer Science B.Tech - Jalgaon MH
          </p>
          <p className="education-degree">CGPA: 8.20</p>
        </section>

        {/* Experience */}
        <section className="section">
          <h2 className="section-title">Experience - (Internships)</h2>

          <div className="experience-entry">
            <p className="experience-role">
              Harmaig | Frontend Developer
              <span className="float-right">Mumbai, MH | Oct 3 – Nov 3</span>
            </p>
            <ul className="list">
              <li>
                Built Harmaigs main website and referral system using React.js,
                HTML, CSS, and JavaScript.
              </li>
              <li>
                Delivered responsive UI, optimized UX, and collaborated with
                design and backend teams.
              </li>
            </ul>
          </div>

          <div className="experience-entry">
            <p className="experience-role">
              Web-Ad Solutions | Project Coordinator - Web Development
              <span className="float-right">
                Kalyan, MH | Jan 2025 – Mar 2025
              </span>
            </p>
            <ul className="list">
              <li>
                Led web development internship at a startup, managing project
                coordination and team formation.
              </li>
              <li>
                Oversaw intern onboarding, task delegation, and milestone
                delivery through regular progress tracking.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="section skills">
          <h2 className="section-title">Skills</h2>
          <p>
            <strong>Programming Languages:</strong> HTML, CSS, JS, C, Python
            (Basic)
          </p>
          <p>
            <strong>Libraries/Frameworks:</strong> JavaScript, React.js,
            Express.js
          </p>
          <p>
            <strong>Tools / Platforms:</strong> Git, GitHub, VS Code, Canva,
            BootStrap, Vercel
          </p>
          <p>
            <strong>Databases:</strong> SQL, MongoDB
          </p>
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects / Open-Source</h2>

          <div className="project-entry">
            <p className="project-title">
              Clinic-Q<span className="project-tech">MERN Stack, Firebase</span>
            </p>
            <ul className="list">
              <li>
                Built a real-time clinic appointment and token system using MERN
                Stack and Firebase.
              </li>
              <li>
                Enabled efficient patient flow with live updates and secure data
                handling.
              </li>
            </ul>
          </div>

          <div className="project-entry">
            <p className="project-title">
              Diary + Todo App<span className="project-tech">MERN Stack</span>
            </p>
            <ul className="list">
              <li>
                Built a personal productivity app with daily journaling and task
                management features.
              </li>
              <li>
                Allows users to write mood-tagged diary entries and manage to-do
                lists in an intuitive interface.
              </li>
            </ul>
          </div>

          <div className="project-entry">
            <p className="project-title">
              <a
                href="https://the-khushi-chhari.vercel.app/"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                The-Khushi-Chhari | Link{" "}
              </a>
              <span className="project-tech">React.js</span>
            </p>
            <ul className="list">
              <li>
                Created a responsive personal portfolio with React.js to
                showcase skills and projects.
              </li>
              <li>
                Integrated smooth animations and clean UI for better user
                experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1uErQ_IfSklW6O5HxUG4_NaZL6YUbShPh"
              className="certification-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Achieved Certificates
            </a>{" "}
            -{" "}
            <span className="italic">
              HackerRank, Spoken Tutorial, NPTEL, GeeksforGeeks, Simplilearn...
            </span>
          </p>
        </section>

        {/* Honors & Awards */}
        <section className="section">
          <h2 className="section-title">Honors & Awards</h2>
          <ul className="list">
            <li>
              Organizer, GHRHack 1.0 National-level Hackathon at GHRCEM,
              Jalgaon.
            </li>
            <li>NEC Basic Track Secured Top 50 position nationwide.</li>
            <li>
              Cyber-security National Level Hackathon Finalist in Kavach 2023.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Resume;
