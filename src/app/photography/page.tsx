import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { photographyPlaceholders } from "../../lib/portfolio-data";

export const dynamic = "force-static";

export default function PhotographyPage() {
  return (
    <div className="project-page-container photography-page">
      <div className="project-page-header">
        <h1 className="project-page-title"><BlurredStagger text="photography" animateOnce /></h1>
        <p className="project-page-subtitle">a few frames from my point of view</p>
      </div>
      <div className="photography-grid">
        {photographyPlaceholders.map((item) => (
          <article className="photography-card" key={item.title} style={{ background: item.accent }}>
            <div className="photography-card-mark">K</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
