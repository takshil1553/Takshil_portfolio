import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span> experience
        </h2>

        <div className="career-section-label">Education History</div>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology Engineer</h4>
                <h5>Dalia Institute of Diploma Studies</h5>
              </div>
              <h3>2019–2022</h3>
            </div>
            <p>
              Diploma in Information Technology covering core programming,
              database management, networking, and web development fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th Pass</h4>
                <h5>Lalita Green Lawns School</h5>
              </div>
              <h3>2018–2019</h3>
            </div>
            <p>
              Completed secondary education with a strong foundation in
              mathematics and science.
            </p>
          </div>
        </div>

        <div className="career-section-label">Work Experience</div>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship — Python Django</h4>
                <h5>Tops Technologies</h5>
              </div>
              <h3>Apr 2021 – Mar 2022</h3>
            </div>
            <p>
              Internship focused on Python and Django framework. Built web
              applications, worked with REST APIs, and gained hands-on
              experience with PostgreSQL and SQLite databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python & Backend Developer</h4>
                <h5>Softech Infotech PVT</h5>
              </div>
              <h3>May 2023 – Present</h3>
            </div>
            <p>
              Developing and maintaining backend systems using Python, Django &
              PHP. Building scalable REST APIs and integrating frontend with React.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
