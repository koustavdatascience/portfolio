"use client";

import { useState } from "react";
import { experience } from "../lib/portfolio-data";

const experienceLogos: Record<string, { src: string; alt: string }> = {
  "The Graduate Dropout": { src: "/experience/graduate-dropout-logo.jpg", alt: "The Graduate Dropout logo" },
  Freelance: { src: "/experience/freelance-logo.jpg", alt: "Adobe logo for freelance content design" },
  "Google Developers Club": { src: "/experience/google-developers-logo.png", alt: "Google Developers logo" },
  "College Cultural Committee": { src: "/experience/rcciit-logo.png", alt: "RCCIIT logo" },
  "Smart Bengal Hackathon": { src: "/experience/hackathon-logo.jpg", alt: "Smart Bengal Hackathon logo" },
  "Chittaranjan Locomotive Works": { src: "/experience/clw-logo.jpg", alt: "Chittaranjan Locomotive Works logo" },
};

function ExperienceItem({ item, isOpen, onClick }: { item: (typeof experience)[number]; isOpen: boolean; onClick: () => void }) {
  const logo = experienceLogos[item.company];

  return (
    <div className="experience-item">
      <div className={`experience-avatar experience-avatar-initial${item.company === "The Graduate Dropout" ? " experience-avatar-tgd" : ""}`} aria-hidden="true">
        {logo ? <img src={logo.src} alt={logo.alt} className="experience-logo" /> : item.company.charAt(0).toUpperCase()}
      </div>
      <div className="experience-content">
        <div className="experience-header">
          <div className="experience-info">
            <h3 className="company-name">{item.company}</h3>
            <p className="role-name">{item.role}</p>
          </div>
          <div className="experience-date">
            <div>{item.date}</div>
            <div className="experience-location">{item.location}</div>
          </div>
        </div>
        <div className={`experience-details ${isOpen ? "open" : ""}`}>
          <button type="button" className="experience-summary" onClick={onClick} aria-expanded={isOpen}>
            <span className="summary-icon">►</span> my work
          </button>
          <div className="experience-dropdown">
            <div className="experience-dropdown-inner">
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {item.description.map((bullet) => <li key={bullet} style={{ marginBottom: "6px" }}>{bullet}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="experience-section">
      <h2 className="section-title">my experience</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <ExperienceItem key={`${item.company}-${item.role}`} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
        ))}
      </div>
    </section>
  );
}
