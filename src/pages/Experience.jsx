import Section from "../components/Section.jsx"

export default function Experience() {
  const items = [
    {
      role: "Project Coordinator (Volunteer)",
      org: "University Tech Club",
      time: "2023",
      points: [
        "Coordinated a university tech event with 200+ participants and 10 partner booths.",
        "Managed communication, schedules, and documentation across stakeholders.",
        "Delivered post-event report and lessons learned to improve future events."
      ]
    },
    {
      role: "Research Assistant (Academic)",
      org: "United International University",
      time: "2022–2023",
      points: [
        "Prepared IEEE/Elsevier-standard documentation and literature reviews.",
        "Analyzed datasets and visualized results using Python and LaTeX.",
        "Contributed to methodology, experiments, and reproducible code."
      ]
    }
  ]

  return (
    <Section id="experience" title="Experience" subtitle="Impact-focused responsibilities and outcomes.">
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.role} — {item.org}</h3>
              <span className="text-sm text-gray-600">{item.time}</span>
            </div>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {item.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
