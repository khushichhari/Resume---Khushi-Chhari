// // new & final
// import React, { useRef } from "react";
// import html2pdf from "html2pdf.js";
// import "./Styles/Resume.css";

// const Resume = () => {

//   const resumeRef = useRef();

//   const handleDownload = () => {
//     const element = resumeRef.current;

//     const opt = {
//       margin: 0,
//       filename: "Resume_Khushi_Chhari.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: {
//         scale: 2,
//         useCORS: true
//       },
//       jsPDF: {
//         unit: "in",
//         format: "a4",
//         orientation: "portrait"
//       },
//     };

//     html2pdf().set(opt).from(element).save();
//   };



//   return (
//     <>
//       <div className="resume-container" ref={resumeRef}>
//         <div className="personal-detail">
//           <h1 className="resume-title">Khushi Chhari</h1>
//           <p className="resume-subtitle">Full Stack Developer</p>
//           <p className="resume-contact">khushichhari22@gmail.com | 7558649228</p>
//           <p className="resume-links">
//             <a
//               href="https://linkedin.com/in/khushichhari"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn
//             </a>
//             |{" "}
//             <a
//               href="https://github.com/khushichhari"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </a>
//             |{" "}
//             <a
//               href="https://www.hackerrank.com/profile/chharikhushi8"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               HackerRank
//             </a>
//           </p>
//         </div>
//         <section className="section">
//           <h2 className="section-title">Education</h2>
//           <p className="education-institution">
//             G.H. Raisoni College Engineering and Management
//             <span className="float-right">2022 - 2026</span>
//           </p>
//           <p className="education-degree">
//             Computer Science B.Tech - Jalgaon MH
//           </p>
//           <p className="education-degree">CGPA: 8.20</p>
//         </section>

//         {/* Experience */}
//         <section className="section">
//           <h2 className="section-title">Experience - (Virtual Internships)</h2>

//           <div className="experience-entry">
//             <p className="experience-role">
//               Harmaig | Frontend Developer
//               <span className="float-right">Mumbai, MH | Oct 2024 – Dec 2024</span>
//             </p>
//             <ul className="list">
//               <li>
//                 Built Harmaigs main website and referral system using React.js,
//                 HTML, CSS, and JavaScript.
//               </li>
//               <li>
//                 Delivered responsive UI, optimized UX, and collaborated with
//                 design and backend teams.
//               </li>
//             </ul>
//           </div>

//           <div className="experience-entry">
//             <p className="experience-role">
//               Web-Ad Solutions | Project Coordinator - Web Development
//               <span className="float-right">
//                 Kalyan, MH | Jan 2025 – Mar 2025
//               </span>
//             </p>
//             <ul className="list">
//               <li>
//                 Led web development internship at a startup, managing project
//                 coordination and team formation.
//               </li>
//               <li>
//                 Oversaw intern onboarding, task delegation, and milestone
//                 delivery through regular progress tracking.
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Skills */}
//         <section className="section skills">
//           <h2 className="section-title">Skills</h2>
//           <p>
//             <strong>Programming Languages:</strong> HTML, CSS, JS, C, Python
//             (Basic)
//           </p>
//           <p>
//             <strong>Libraries/Frameworks:</strong> JavaScript, React.js,
//             Express.js
//           </p>
//           <p>
//             <strong>Tools / Platforms:</strong> Git, GitHub, VS Code, Canva,
//             BootStrap, Vercel, Render
//           </p>
//           <p>
//             <strong>Databases:</strong> MongoDB, SQL(basic)
//           </p>
//         </section>

//         {/* Projects */}
//         <section className="section">
//           <h2 className="section-title">Projects</h2>

          
//           <div className="project-entry">
//             <p className="project-title">
//                 <a
                
//                 className="project-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Career Management Platform | Ongoing
//               </a>
//               <span className="project-tech">MERN Stack</span>
//             </p>
//             <ul className="list">
//               <li>
//                 Developing a unified platform to connect students, universities, and companies for internships and placements.
//               </li>
//               <li>
//                 Features include job listings, application tracking, interview scheduling, and real-time messaging & interview.
//               </li>
//             </ul>
//           </div>
                  
//           <div className="project-entry">
//             <p className="project-title">
//                 <a
//                 href="https://drive.google.com/file/d/1b7C7lfwxPudmUNpoY6fE144ZK9OjRdFY/view?usp=drive_link"
//                 className="project-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                ClinicQ | Link{" "}
//               </a>
//              <span className="project-tech">MERN Stack</span>
//             </p>
//             <ul className="list">
//               <li>
//                 Developed a real-time clinic appointment and token system using MERN
//                 Stack and Firebase.
//               </li>
//               <li>
//                 Enabled efficient patient flow with live updates and secure data
//                 handling.
//               </li>
//             </ul>
//           </div>

//           <div className="project-entry">
//             <p className="project-title">
//                 <a
//                 href="https://drive.google.com/file/d/1-XbPp9KKUcNNdQxNbbjiX_m94gT7M1tY/view?usp=drive_link"
//                 className="project-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Diary + Todo App | Link{" "}
//               </a>
//               <span className="project-tech">MERN Stack</span>
//             </p>
//             <ul className="list">
//               <li>
//                 Built a personal productivity app with daily journaling and task
//                 management features.
//               </li>
//               <li>
//                 Allows users to write mood-tagged diary entries and manage to-do
//                 lists in an intuitive interface.
//               </li>
//             </ul>
//           </div>

//           <div className="project-entry">
//             <p className="project-title">
//               <a
//                 href="https://the-khushi-chhari.vercel.app/"
//                 className="project-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 The-Khushi-Chhari | Link{" "}
//               </a>
//               <span className="project-tech">React.js</span>
//             </p>
//             <ul className="list">
//               <li>
//                 Designed a responsive personal portfolio with React.js to
//                 showcase skills and projects.
//               </li>
//               <li>
//                 Integrated smooth animations and clean UI for better user
//                 experience.
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Certifications */}
//         <section className="section">
//           <h2 className="section-title">Certifications</h2>
//           <p>
//             <a
//               href="https://drive.google.com/drive/folders/1uErQ_IfSklW6O5HxUG4_NaZL6YUbShPh"
//               className="certification-link"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Achieved Certificates
//             </a>{" "}
//             -{" "}
//             <span className="italic">
//               HackerRank, Spoken Tutorial, NPTEL, GeeksforGeeks, Simplilearn...
//             </span>
//           </p>
//         </section>

//         {/* Honors & Awards */}
//         <section className="section">
//           <h2 className="section-title">Honors & Awards</h2>
//           <ul className="list">
//             <li>
//               Organizer, GHRHack 1.0 National-level Hackathon at GHRCEM,
//               Jalgaon in 2024.
//             </li>
//             <li>NEC Basic Track Secured Top 50 position nationwide in 2023.</li>
//             <li>
//               Cyber-security National Level Hackathon Finalist in Kavach 2023.
//             </li>
//           </ul>
//         </section>
//       </div>
//       <button className="download-btn" onClick={handleDownload}>
//         Download PDF
//       </button>
//     </>
//   );
// };

// export default Resume;



// neww 1


// new & final
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import "./Styles/Resume.css";

const Resume = () => {

  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;

    const opt = {
      margin: 0,
      filename: "Resume_Khushi_Chhari.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait"
      },
    };

    html2pdf().set(opt).from(element).save();
  };



  return (
    <>
      <div className="resume-container" ref={resumeRef}>
        <div className="personal-detail">
          <h1 className="resume-title">Khushi Chhari</h1>
          <p className="resume-subtitle">Full Stack Developer</p>
          <p className="resume-contact">khushichhari22@gmail.com | 7558649228</p>
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
              href="https://the-khushi-chhari.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </p>
        </div>
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
          <h2 className="section-title">Experience</h2>
            <div className="experience-entry">
            <p className="experience-role">
              GHRhack 1.0 | Event Coordinator 
              <span className="float-right">Jalgaon, MH | Oct 2024 – March 2025</span>
            </p>
            <ul className="list">
              <li>
                Coordinated logistics,technical, scheduling, and communication for 100+ participants.
              </li>
              <li>
                Led a team of volunteers ensuring seamless execution.
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
                Managed team formation, onboarding, and progress tracking for interns.
              </li>
              <li>
                Delegated tasks, monitored milestones, and facilitated smooth coordination.
              </li>
            </ul>
          </div>
                    
          <div className="experience-entry">
            <p className="experience-role">
              Harmaig | Frontend Developer
              <span className="float-right">Mumbai, MH | Oct 2024 – Dec 2024</span>
            </p>
            <ul className="list">
              <li>
                Delivered responsive website & referral system in collaboration with design and backend teams.
              </li>
              <li>
                Improved user experience and ensured on-time project delivery.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="section skills">
          <h2 className="section-title">Skills</h2>
          <p>
            <strong>Project & Event Management:</strong> Team Leadership, Task Delegation, Communication, Coordination.
          </p>
          <p>
            <strong>Tools:</strong> Trello, Canva, Jira, Excel, MS Word.
          </p>
          <p>
            <strong>Technical Edge:</strong> Full Stack Developer.
          </p>
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-entry">
            <p className="project-title">
                <a
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Career Management Platform | Ongoing
              </a>
              <span className="project-tech">MERN Stack</span>
            </p>
            <ul className="list">
              <li>
                Developing a unified platform to connect students, universities, and companies for internships and placements.
              </li>
              <li>
                Features include job listings, application tracking, interview scheduling, and real-time messaging & interview.
              </li>
            </ul>
          </div>
                  
          <div className="project-entry">
            <p className="project-title">
                <a
                href="https://drive.google.com/file/d/1-XbPp9KKUcNNdQxNbbjiX_m94gT7M1tY/view?usp=drive_link"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diary + Todo App | Link{" "}
              </a>
              <span className="project-tech">MERN Stack</span>
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
            <li>NEC Basic Track Secured Top 50 position nationwide in 2023.</li>
            <li>
              Cyber-security National Level Hackathon Finalist in Kavach 2023.
            </li>
          </ul>
        </section>
      </div>
      <button className="download-btn" onClick={handleDownload}>
        Download PDF
      </button>
    </>
  );
};

export default Resume;












































