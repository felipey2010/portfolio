import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProjectsDisplay() {
  return (
    <div className="grid items-center gap-6 py-12 lg:grid-cols-2">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="h-full flex flex-col justify-between overflow-hidden transition-all hover:shadow-lg border-border"
        >
          <CardHeader className="p-0">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="mt-2">
              {project.description}
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
            <Button asChild variant="outline" size="sm">
              <Link href={project.demoLink}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={project.githubLink}>
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ProjectsDisplay

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Firebase', 'Material-UI'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard with location-based forecasts.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'OpenWeatherMap API', 'Chart.js'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Social Media Analytics',
    description:
      'A data visualization tool for social media metrics and trends.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['D3.js', 'Python', 'Twitter API'],
    demoLink: '#',
    githubLink: '#',
  },
]
