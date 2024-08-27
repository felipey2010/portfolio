import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

type translationType = {
  en: string
  pt: string
}

type Props = {
  project: {
    name: translationType
    description: translationType
    image: string
    tags: string[]
    demoLink: string
    githubLink: string
  }
  language: string
}

function ProjectDisplay({ project, language }: Props) {
  function openLink(link: string) {
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <Card className="flex flex-col justify-between overflow-hidden shadow-none bg-transparent border-none pt-4">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          alt={project.name[language as keyof typeof project.name]}
          width={600}
          height={400}
          className="object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle>
          {project.name[language as keyof typeof project.name]}
        </CardTitle>
        <CardDescription className="mt-2">
          {project.description[language as keyof typeof project.description]}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 text-xs font-medium text-white dark:text-black bg-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          disabled={project.demoLink.length < 2}
          onClick={() => openLink(project.demoLink)}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={project.githubLink.length < 2}
          onClick={() => openLink(project.githubLink)}
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectDisplay
