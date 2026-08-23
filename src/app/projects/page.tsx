import ProjectPageTemplate from "../../components/ProjectPageTemplate";
import { projects } from "../../lib/portfolio-data";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <ProjectPageTemplate
      title="my projects"
      subtitle="things i made while learning, experimenting, and solving problems"
      projects={projects.map((project) => ({
        id: project.id,
        title: project.title,
        description: `${project.description} ${project.stack.join(" · ")}`,
        imageUrl: project.imageUrl,
        link: project.link,
      }))}
    />
  );
}
