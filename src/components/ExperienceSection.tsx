"use client";

import { useState } from "react";
import { experience } from "../lib/portfolio-data";

function ExperienceItem({ item, isOpen, onClick }: { item: (typeof experience)[number]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="experience-item">
      <div className="experience-avatar experience-avatar-initial" aria-hidden="true">{item.company.charAt(0).toUpperCase()}</div>
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
