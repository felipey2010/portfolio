import ProjectsView from '@/views/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Projects',
  description:
    'Explore a collection of my latest web development projects. Each one represents a unique challenge and showcases different skills and technologies.',
  keywords:
    'projects, system development, portfolio, projects page, my projects, my system development projects, system development projects, portfolio projects',
}

function ProjectsPage() {
  return <ProjectsView />
}

export default ProjectsPage
