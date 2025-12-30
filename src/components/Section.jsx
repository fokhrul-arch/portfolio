export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}
