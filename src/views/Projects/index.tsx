'use client'
import SEO from '@/components/SEO'
import { ProjectPageList } from '@/data/ProjectsList'
import { useLanguage } from '@/Providers/LanguageProvider'
import ContactCallToAction from './ContactCallToAction'
import ProjectExplorer from './ProjectExplorer'
import SectionHeader from './SectionHeader'

function ProjectsView() {
  const { language } = useLanguage()

  return (
    <>
      <SEO
        title={
          ProjectPageList.title[language as keyof typeof ProjectPageList.title]
        }
        description={
          ProjectPageList.description[
            language as keyof typeof ProjectPageList.description
          ]
        }
        keywords={
          ProjectPageList.keywords[
            language as keyof typeof ProjectPageList.keywords
          ]
        }
        path="projects"
      />
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
    </>
  )
}

export default ProjectsView
