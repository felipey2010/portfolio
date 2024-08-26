import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ path }: { path: string[] }) {
  return (
    <nav className="flex mb-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {path.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2">{item}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
