import Section from "../components/Section.jsx"

export default function Education() {
  const edu = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      uni: "United International University, Dhaka",
      time: "Graduation, 2025",
      highlights: [
        "Strong focus on academic writing and research documentation.",
        "Projects in AI/ML, fraud detection, and digital image processing.",
        "Final Year Design project aligned with practical implementation and clear reporting."
      ]
    }
  ]

  return (
    <Section id="education" title="Education" subtitle="Academic background and highlights.">
      <div className="space-y-6">
        {edu.map((e, idx) => (
          <div key={idx} className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <span className="text-sm text-gray-600">{e.time}</span>
            </div>
            <p className="text-gray-700">{e.uni}</p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
