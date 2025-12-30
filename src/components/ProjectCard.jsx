import Badge from "./Badge.jsx"

export default function ProjectCard({ title, description, image, tech = [], github, live }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => <Badge key={t}>{t}</Badge>)}
      </div>

      <div className="mt-auto flex gap-3">
        {github && (
          <a href={github} target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" className="text-blue-600 hover:underline">
            Live
          </a>
        )}
      </div>
    </div>
  )
}
