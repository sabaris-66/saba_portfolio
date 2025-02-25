import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const App = () => {
  const personalInfo = {
    name: "Sabaris N E",
    title: "Full-Stack Developer",
    location: "Chennai, Tamil Nadu, India",
    email: "sabaris.elango@gmail.com",
    phone: "6382951372",
    dob: "September 27, 2000",
    linkedin: "https://www.linkedin.com/in/sabaris-n-e",
    github: "https://github.com/sabaris-66",
  };

  const experience = {
    title: "Self-Taught Full-Stack Developer",
    company: "The Odin Project",
    employmentType: "Self-Employed",
    location: "Remote",
    dates: "November 2023 – Present",
    description: [
      "Completed The Odin Project's Full-Stack JavaScript curriculum, covering frontend, backend, and deployment.",
      "Built multiple projects, including a Personal Blog, Members Only Clubhouse, and Shopping Cart app using PERN stack (PostgreSQL, Express, React, Node.js).",
      "Gained hands-on experience in React.js, Node.js, RESTful APIs, and deployment platforms like Netlify and Render.",
      "Improved problem-solving skills by independently tackling challenges in modern web development.",
    ],
  };

  const skills = {
    frontend: ["React", "HTML5", "CSS3", "JavaScript ES6+"],
    backend: ["Node.js", "Express.js", "RESTful API development"],
    database: ["PostgreSQL", "Prisma ORM"],
    other: ["Git", "GitHub", "JWT", "OAuth"],
  };

  const projects = [
    {
      title: "Personal Blog",
      description:
        "Full-featured blog platform with dual front-end interfaces using PERN stack.",
      technologies: [
        "PostgreSQL",
        "Express",
        "React",
        "Node.js",
        "Prisma",
        "JWT",
      ],
      github: "https://github.com/sabaris-66/Blog_Live_Preview",
      preview: "https://github.com/sabaris-66/Blog_Live_Preview",
    },
    {
      title: "Members Only Clubhouse",
      description:
        "Authentication-based platform with role management using Express and PostgreSQL.",
      technologies: [
        "Express.js",
        "PostgreSQL",
        "Node.js",
        "Passport.js",
        "EJS",
      ],
      github: "https://github.com/sabaris-66/members-only",
      preview: "https://members-only-jfvs.onrender.com/",
    },
    {
      title: "Shopping Cart",
      description:
        "React-based e-commerce platform with Router and SPA implementation.",
      technologies: ["React", "React Router", "CSS", "JavaScript"],
      github: "https://github.com/sabaris-66/shopping-cart",
      preview: "https://wonderful-profiterole-ad426e.netlify.app/",
    },
  ];

  const certificates = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      link: "https://freecodecamp.org/certification/fccc0634d07-b847-4702-b265-500e5730774e/javascript-algorithms-and-data-structures-v8",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      link: "https://freecodecamp.org/certification/fccc0634d07-b847-4702-b265-500e5730774e/responsive-web-design",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
          <p className="text-xl mb-6">{personalInfo.title}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2"
            >
              <FaEnvelope size={20} /> {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2"
            >
              <FaPhone size={20} /> {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt size={20} /> {personalInfo.location}
            </span>
            {/* <div className="flex gap-4 mt-4"> */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 flex items-center gap-2"
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 flex items-center gap-2"
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
            {/* </div> */}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a dedicated and passionate full-stack developer, I have recently
            completed several projects utilizing the PERN stack (PostgreSQL,
            Express, React, Node.js). My journey in web development is marked by
            a commitment to continuous learning and the application of modern
            technologies to create efficient and user-friendly applications.
          </p>
        </div>
      </section>

      {/* New Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  {experience.title}
                </h3>
                <p className="text-gray-700 font-medium">
                  {experience.company}
                </p>
              </div>
              <div className="text-gray-600 mt-2 md:mt-0">
                <p className="italic">{experience.dates}</p>
                <p className="text-sm">
                  {experience.location} • {experience.employmentType}
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              {experience.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Remaining sections remain unchanged */}
      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-4 text-blue-600">Frontend</h3>
              <ul className="space-y-2">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-4 text-blue-600">Backend</h3>
              <ul className="space-y-2">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-4 text-blue-600">Database</h3>
              <ul className="space-y-2">
                {skills.database.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-4 text-blue-600">Other</h3>
              <ul className="space-y-2">
                {skills.other.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Projects and Footer sections */}
      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education & Certificates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="mb-4">
                <p className="font-semibold">B.Tech Chemical Engineering</p>
                <p className="text-gray-700">ACT, Anna University</p>
                <p className="text-gray-600">CGPA: 8.04 / 10.0</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Certificates</h3>
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li key={index}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {cert.title}
                    </a>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Let's connect and discuss how we can contribute to the ever-evolving
            field of web development together.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-400"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
