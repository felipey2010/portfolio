'use client'
import { ProjectPageList } from '@/data/ProjectsList'
import { useLanguage } from '@/providers/LanguageProvider'
import ContactCallToAction from './ContactCallToAction'
import ProjectExplorer from './ProjectExplorer'
import SectionHeader from './SectionHeader'

function ProjectsView() {
  const { language } = useLanguage()

  return (
    <div className="h-full flex flex-col items-center gap-4 px-3">
      {/* Page title */}
      <SectionHeader language={language} content={ProjectPageList} />
      {/* Projects */}
      <ProjectExplorer language={language} />

      {/* Get in touch */}
      <ContactCallToAction
        language={language}
        content={ProjectPageList.callToAction}
      />
    </div>
  )
}

export default ProjectsView
