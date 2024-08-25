import SEO from '@/components/SEO'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SKILLS_PAGE_INFO, SkillsList } from '@/data/AboutPageList'
import { cn, generateRandomNumber } from '@/lib/utils'
import { motion } from 'framer-motion'
import { MutableRefObject, useRef, useState } from 'react'

type LanguageOptionsType = {
  en: string
  pt: string
}

type SkillType = {
  title: LanguageOptionsType
  description: LanguageOptionsType
}

function Skills({ selectedLanguage = 'en' }: { selectedLanguage: string }) {
  return (
    <>
      <SEO
        title={
          SKILLS_PAGE_INFO.title[
            selectedLanguage as keyof typeof SKILLS_PAGE_INFO.title
          ]
        }
        description={
          SKILLS_PAGE_INFO.description[
            selectedLanguage as keyof typeof SKILLS_PAGE_INFO.description
          ]
        }
        keywords={
          SKILLS_PAGE_INFO.keywords[
            selectedLanguage as keyof typeof SKILLS_PAGE_INFO.keywords
          ]
        }
      />
      <div className="h-full flex flex-col gap-4">
        <div className="w-full flex flex-col text-center">
          <h1 className="text-2xl font-bold">
            {
              SkillsList.title[
                selectedLanguage as keyof typeof SkillsList.title
              ]
            }
          </h1>
          <p className="text-sm italic">
            {
              SkillsList.description[
                selectedLanguage as keyof typeof SkillsList.description
              ]
            }
          </p>
        </div>
        <hr className="border-border" />
        <div className="w-full flex flex-1 min-h-64 relative mx-auto pt-6 px-4 overflow-hidden">
          <PlayField
            skills={SkillsList.skills}
            selectedLanguage={selectedLanguage}
          />
        </div>
      </div>
    </>
  )
}

export default Skills

const PlayField = ({
  skills,
  selectedLanguage,
}: {
  skills: SkillType[]
  selectedLanguage: string
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="absolute inset-0" ref={containerRef}>
      {skills.map((skill, index) => {
        const rotateDeg = `${generateRandomNumber(-20, 20)}deg`
        const positionLeft = `${generateRandomNumber(20, 60)}%`
        const positionTop = `${generateRandomNumber(20, 60)}%`

        return (
          <PlayFieldObject
            key={`drag-skill-${index}`}
            skill={skill}
            selectedLanguage={selectedLanguage}
            containerRef={containerRef}
            rotate={rotateDeg}
            top={positionTop}
            left={positionLeft}
          />
        )
      })}
    </div>
  )
}

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>
  skill: SkillType
  selectedLanguage: string
  top: string
  left: string
  rotate: string
  className?: string
}

const PlayFieldObject = ({
  containerRef,
  skill,
  selectedLanguage,
  top,
  left,
  rotate,
  className,
}: Props) => {
  const [zIndex, setZIndex] = useState(0)

  const updateZIndex = () => {
    const dragElements = document.querySelectorAll('.drag-elements')

    let maxZIndex = -Infinity
    dragElements.forEach((element) => {
      let zIndex = parseInt(
        window.getComputedStyle(element).getPropertyValue('z-index')
      )

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex
      }
    })

    setZIndex(maxZIndex + 1)
  }

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={cn(
        'drag-elements absolute rounded-xl w-full sm:w-64 max-w-sm hover:cursor-grab active:cursor-grabbing',
        className
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      layout
    >
      <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 p-0 border border-border pointer-events-none">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold">
            {skill.title[selectedLanguage as keyof typeof skill.title]}
          </CardTitle>
          <CardDescription className="mt-2 text-gray-500">
            {
              skill.description[
                selectedLanguage as keyof typeof skill.description
              ]
            }
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
