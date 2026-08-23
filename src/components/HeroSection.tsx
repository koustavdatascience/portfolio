import InteractiveAvatar from "./ui/InteractiveAvatar";
import { BlurredStagger } from "./ui/blurred-stagger-text";
import MoreSection from "./MoreSection";
import { profile } from "../lib/portfolio-data";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-name-curve">
        <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
          <path id="curve" d="M 40,140 A 100,100 0 0,1 240,140" fill="transparent" />
          <text fill="var(--text-primary)" className="instrument-serif" fontSize="44" textAnchor="middle" letterSpacing="-0.07em">
            <textPath href="#curve" startOffset="50%">
              {profile.name}
            </textPath>
          </text>
        </svg>
      </div>

      <div className="hero-avatar">
        <InteractiveAvatar priority />
      </div>

      <div className="hero-subtitle">
        <BlurredStagger text={profile.role} />
      </div>

      <MoreSection />

      <div className="hero-description" style={{ width: "100%", maxWidth: "600px", textAlign: "center", margin: "32px auto 0 auto" }}>
        <p style={{ textAlign: "center" }}>{profile.intro}</p>
      </div>
    </div>
  );
}
