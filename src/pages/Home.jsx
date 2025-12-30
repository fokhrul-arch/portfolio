import Section from "../components/Section.jsx"

export default function Home() {
  return (
    <Section id="home" title="Welcome">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Hi, I’m Md. Fokhrul Islam</h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Computer Science Graduate & Project Coordinator Specialist.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Contact Me
            </a>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-48 sm:h-64 lg:h-80 flex items-center justify-center">
          <img
            src="/MdFI.jpeg"
            alt="Md. Fokhrul Islam"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}
