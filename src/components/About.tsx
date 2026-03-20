import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full Stack Developer with 3.5+ years of experience building scalable web
          applications using Python, Django, FastAPI, PHP and React.js. Skilled
          in REST API development, database design with PostgreSQL, SQLite & MongoDB,
          and delivering production-ready solutions from concept to deployment.
        </p>
        <a
          href="/resume/Takshil_Resume.pdf"
          download="Takshil_Resume.pdf"
          className="resume-btn"
          data-cursor="disable"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
