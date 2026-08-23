import InteractiveAvatar from "../../components/ui/InteractiveAvatar";
import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { profile } from "../../lib/portfolio-data";

export const dynamic = "force-static";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="hero-section">
        <div className="contact-name-curve">
          <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
            <path id="curve-contact" d="M 50,140 A 90,90 0 0,1 230,140" fill="transparent" />
            <text fill="var(--text-primary)" className="instrument-serif" fontSize="44" textAnchor="middle" letterSpacing="-0.07em">
              <textPath href="#curve-contact" startOffset="50%">Wanna Contact?</textPath>
            </text>
          </svg>
        </div>
        <div className="hero-avatar contact-avatar"><InteractiveAvatar priority /></div>
        <h1 className="contact-title"><BlurredStagger text="touch me" /></h1>
        <div className="contact-description">
          <p>if you want to talk about a data problem, a creative project, or an opportunity, feel free to reach out :)</p>
        </div>
        <div className="social-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 4l10 8 10-8" /></svg>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
