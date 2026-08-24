import InteractiveAvatar from "../../components/ui/InteractiveAvatar";
import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { profile } from "../../lib/portfolio-data";

export const dynamic = "force-static";

export default function About() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-name-curve who-am-i-curve">
          <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
            <path id="curve-about" d="M 60,140 A 80,80 0 0,1 220,140" fill="transparent" />
            <text fill="var(--text-primary)" className="instrument-serif" fontSize="46" textAnchor="middle" letterSpacing="-0.07em">
              <textPath href="#curve-about" startOffset="50%">Who am i?</textPath>
            </text>
          </svg>
        </div>
        <div className="hero-avatar about-avatar"><InteractiveAvatar priority /></div>
        <h1 className="about-title"><BlurredStagger text="about me" /></h1>
        <div className="about-content" style={{ width: "100%", maxWidth: "600px", marginInline: "auto", textAlign: "left" }}>
          <p>hey, i&apos;m {profile.name}. i&apos;m an aspiring data analyst who likes turning messy questions into clear, useful answers.</p>
          <p>i&apos;m currently pursuing a postgraduate programme at IIT Roorkee, building a strong foundation in data analytics, statistical reasoning, visualization, and emerging AI technologies, with hands-on work across Excel, SQL, Python, Power BI, and Tableau.</p>
          <p>before moving toward data, i worked in content design and social media. that creative background still shapes how i communicate: i care about the story behind the numbers, not just the numbers themselves.</p>
          <p>i&apos;m currently building <strong>The Brief</strong>, an open-source policy intelligence project focused on making complex information easier to discover, research, and understand.</p>
          <p>outside work, i&apos;ve helped organize cultural events, performed as a lead guitarist, and built small products such as Waypoint, Mochi, and ClinicOCR.</p>
          <p>i&apos;m currently looking for internship and full-time opportunities where i can learn quickly, solve meaningful problems, and make data easier to understand.</p>
        </div>
      </div>
    </div>
  );
}
