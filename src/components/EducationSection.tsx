import { education } from "../lib/portfolio-data";

const educationLogos: Record<string, { src: string; alt: string }> = {
  RCCIIT: { src: "/education/rcciit-logo.png", alt: "RCCIIT logo" },
  "IIT Roorkee": { src: "/education/iit-roorkee-logo.png", alt: "IIT Roorkee logo" },
};

export default function EducationSection() {
  return (
    <section className="experience-section">
      <h2 className="section-title">my education</h2>
      <div className="experience-list">
        {education.map((item) => {
          const logo = educationLogos[item.institution];
          return (
            <div className="experience-item" key={item.institution}>
              <div className="experience-avatar experience-avatar-initial" aria-hidden="true">
                {logo ? <img src={logo.src} alt={logo.alt} className="experience-logo" /> : item.institution.charAt(0)}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="company-name">{item.institution}</h3>
                    <p className="role-name">{item.degree}</p>
                    <p className="role-name" style={{ marginTop: "2px", color: "var(--text-secondary)" }}>{item.detail}</p>
                  </div>
                  <div className="experience-date">{item.date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
