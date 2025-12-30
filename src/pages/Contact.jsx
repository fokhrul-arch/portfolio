import Section from "../components/Section.jsx"

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Reach out for collaboration or opportunities.">
      <div className="card p-5">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700">
              I’m open to join as a project coordinator, entry-level IT, and academic roles in Dhaka.
              Prefer roles blending documentation, coordination, and technical literacy.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p><span className="font-semibold">Email:</span> fokhrulmd76@gmai.com</p>
              <p><span className="font-semibold">LinkedIn:</span> https://www.linkedin.com/in/fokhrulislam76/</p>
              <p><span className="font-semibold">GitHub:</span> https://github.com/fokhrul-arch</p>
            </div>
          </div>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input className="mt-1 w-full rounded-md border-gray-300 focus:border-brand focus:ring-brand" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-brand focus:ring-brand" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-brand focus:ring-brand" placeholder="Write your message..." />
            </div>
            <button type="button" className="rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">
              Submit (demo)
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}
