'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ResourcesData } from '@/data/ResourcesData'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { FaTools } from 'react-icons/fa'

function ResourcesPageView() {
  const { language } = useLanguage()

  return (
    <div className="w-full p-6 mb-6">
      <div className="w-full flex items-center justify-center gap-4 mb-4 font-bold">
        <FaTools size={24} />
        <h1 className="text-3xl">
          {ResourcesData.title[language as keyof typeof ResourcesData.title]}
        </h1>
      </div>
      <p className="text-muted-foreground font-normal text-center mb-6">
        {
          ResourcesData.description[
            language as keyof typeof ResourcesData.description
          ]
        }
      </p>

      {/* Accordion for Categories */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {ResourcesData.categories.map((category, index) => (
          <AccordionItem key={index} value={`category-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {category.title[language as keyof typeof category.title]}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-4">
                {
                  category.description[
                    language as keyof typeof category.description
                  ]
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.resources.length > 0 ? (
                  category.resources.map((resource, resIndex) => (
                    <Card key={resIndex} className="hover:shadow-lg transition">
                      <CardHeader>
                        <CardTitle>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {resource.name}
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {
                            resource.description[
                              language as keyof typeof resource.description
                            ]
                          }
                        </p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">
                    No resources found.
                  </p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default ResourcesPageView
