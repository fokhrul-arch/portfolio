import Section from "../components/Section.jsx"
import ProjectCard from "../components/ProjectCard.jsx"
import { projects } from "../data/projects.js"

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}
