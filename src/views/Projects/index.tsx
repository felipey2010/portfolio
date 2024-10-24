'use client'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { ProjectPageList } from '@/data/ProjectsList'
import { useLanguage } from '@/Providers/LanguageProvider'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import ProjectExplorer from './ProjectExplorer'

function ProjectsView() {
  const { language } = useLanguage()
  const router = useRouter()

  const handleGetInTouch = () => {
    router.push('/about?tab=contact')
  }

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
      />
      <div className="h-full flex flex-col items-center gap-4 px-3">
        {/* Page title */}
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            {
              ProjectPageList.title[
                language as keyof typeof ProjectPageList.title
              ]
            }
          </h1>
          <p className="text-sm italic">
            {
              ProjectPageList.description[
                language as keyof typeof ProjectPageList.description
              ]
            }
          </p>
        </div>
        {/* Projects */}
        <ProjectExplorer language={language} />

        {/* Get in touch */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 rounded-b-lg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter">
                  {
                    ProjectPageList.callToAction.title[
                      language as keyof typeof ProjectPageList.callToAction.title
                    ]
                  }
                </h2>
                <p className="text-sm/relaxed">
                  {
                    ProjectPageList.callToAction.description[
                      language as keyof typeof ProjectPageList.callToAction.description
                    ]
                  }
                </p>
              </div>
              <Button size="lg" onClick={handleGetInTouch}>
                <Mail className="mr-2 h-4 w-4" />
                {
                  ProjectPageList.callToAction.buttonText[
                    language as keyof typeof ProjectPageList.callToAction.buttonText
                  ]
                }
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProjectsView
