export default function Badge({ children }) {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {children}
    </span>
  )
}
