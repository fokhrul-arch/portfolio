import Section from "../components/Section.jsx"
import Badge from "../components/Badge.jsx"

export default function Skills() {
  const technical = ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL", "React(basics)", "TailwindCSS", "Node.js (basics)"]
  const professional = ["Documentation (LaTeX, IEEE/Elsevier)", "Project coordination", "Stakeholder communication", "Report writing", "Presentation design"]
  const tools = ["Git/GitHub", "VS Code", "MS Office", "Google Workspace","Jupyter", "Figma (basics)"]

  return (
    <Section id="skills" title="Skills" subtitle="Grouped by technical, professional, and tools.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-5">
          <h3 className="font-semibold">Technical</h3>
          <div className="mt-3 flex flex-wrap gap-2">{technical.map(s => <Badge key={s}>{s}</Badge>)}</div>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">Professional</h3>
          <div className="mt-3 flex flex-wrap gap-2">{professional.map(s => <Badge key={s}>{s}</Badge>)}</div>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">{tools.map(s => <Badge key={s}>{s}</Badge>)}</div>
        </div>
      </div>
    </Section>
  )
}
