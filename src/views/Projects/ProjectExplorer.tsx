import { ProjectPageList, ProjectsList } from '@/data/ProjectsList'
import { CategoryItemType, CategoryType } from '@/types'
import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ProjectExplorer({
  language = 'en',
}: {
  language: string
}) {
  const [openCategories, setOpenCategory] = useState<string[]>([])
  const [currentPath, setCurrentPath] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setOpenCategory((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )

    const folder = ProjectsList.find((category) => category.id === categoryId)
    if (folder) {
      setCurrentPath((prev) =>
        prev.includes(folder.name.en)
          ? prev.filter((name) => name !== folder.name.en)
          : [...prev, folder.name.en]
      )
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-2">
        {
          ProjectPageList.projectLabel[
            language as keyof typeof ProjectPageList.projectLabel
          ]
        }
      </h1>
      {/* <Breadcrumb path={currentPath} /> */}
      <div className="space-y-2 border border-border rounded-lg overflow-hidden p-2">
        {ProjectsList.map((category) => (
          <FolderItem
            key={category.id}
            category={category}
            level={0}
            onToggle={toggleCategory}
            isOpen={openCategories.includes(category.id)}
            language={language}
          />
        ))}
      </div>
    </div>
  )
}

const FolderItem = ({
  category,
  level,
  onToggle,
  isOpen,
  language,
}: {
  category: CategoryType
  level: number
  onToggle: (id: string) => void
  isOpen: boolean
  language: string
}) => {
  const paddingLeft = `${level * 1.5}rem`

  return (
    <div>
      <button
        onClick={() => onToggle(category.id)}
        className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ paddingLeft }}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronDown className="w-5 h-5 pl-1 mr-2 text-gray-500" />
        ) : (
          <ChevronRight className="w-5 h-5 pl-1 mr-2 text-gray-500" />
        )}
        <Folder className="w-5 h-5 mr-2 text-yellow-500" />
        {category.name[language as keyof typeof category.name]}
      </button>
      {isOpen && category.children && (
        <div className="ml-4">
          {category.children.map((child) => (
            <CategoryItem
              key={child.id}
              item={child}
              level={level + 1}
              language={language}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const Breadcrumb = ({ path }: { path: string[] }) => (
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

const CategoryItem = ({
  item,
  level,
  language = 'en',
}: {
  item: CategoryItemType
  level: number
  language: string
}) => {
  const paddingLeft = `${level * 1.5}rem`

  return (
    <div
      className="w-fit flex items-center py-2 px-4 hover:underline hover:cursor-pointer mt-1"
      style={{ paddingLeft }}
    >
      <File className="w-4 h-4 mr-2 text-blue-500" />
      <p className="text-sm">{item.name[language as keyof typeof item.name]}</p>
    </div>
  )
}
