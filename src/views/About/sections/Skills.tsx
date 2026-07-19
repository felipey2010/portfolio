import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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

const SkillsList = {
  title: {
    en: 'Skills',
    pt: 'Habilidades',
  },
  description: {
    en: 'When it comes to skills, I have just a few in mind. Feel free to play around with them',
    pt: 'Quando se trata de habilidades, eu tenho apenas poucas em mente. Sinta-se à vontade para brincar com elas',
  },
  skills: [
    {
      title: {
        en: 'Agile Methodology',
        pt: 'Metodologia ágil',
      },
      description: {
        en: 'A project management approach that emphasizes flexibility, collaboration, and customer satisfaction.',
        pt: 'Uma abordagem de gerenciamento de projetos que enfatiza a flexibilidade, a colaboração e a satisfação do cliente.',
      },
    },
    {
      title: {
        en: 'Attention to details',
        pt: 'Atenção aos detalhes',
      },
      description: {
        en: 'Aim at achieving precise results according to the project requirements.',
        pt: 'Objetiva-se a atingir resultados precisos de acordo com as exigências do projeto.',
      },
    },
    {
      title: {
        en: 'Continuous learning',
        pt: 'Aprendizagem contínua',
      },
      description: {
        en: 'Enthusiastic about quickly understanding new technologies to keep up to date.',
        pt: 'Entusiasta em compreender rapidamente novas tecnologias para manter atualizado.',
      },
    },
    {
      title: {
        en: 'Team and individual work',
        pt: 'Trabalho em equipe e individual',
      },
      description: {
        en: 'Ability to adapt easily to both work in a team and individually.',
        pt: 'Habilidade de adaptar facilmente tanto ao trabalho em equipe como individualmente.',
      },
    },
    {
      title: {
        en: 'Creativity',
        pt: 'Criatividade',
      },
      description: {
        en: 'Ability to find unique solutions to problems and for designing solutions that are both functional and visually appealing.',
        pt: 'Habilidade de encontrar soluções únicas para problemas e de projetar soluções que são funcionais e visualmente atraentes.',
      },
    },
    {
      title: {
        en: 'Leadership',
        pt: 'Liderança',
      },
      description: {
        en: 'Possess skills in communication, decision-making, resolutions of problems, motivating, team and time management.',
        pt: 'Possui habilidades em comunicação, tomada de decisão, resolução de problemas, motivação, gerenciamento de equipe e tempo.',
      },
    },
  ],
}

function Skills({ selectedLanguage = 'en' }: { selectedLanguage: string }) {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="w-full flex flex-col text-center">
        <h1 className="text-2xl font-bold">
          {SkillsList.title[selectedLanguage as keyof typeof SkillsList.title]}
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
      <div className="w-full flex flex-1 min-h-64 relative mx-auto pt-6 md:px-4 overflow-hidden">
        <PlayField
          skills={SkillsList.skills}
          selectedLanguage={selectedLanguage}
        />
      </div>
    </div>
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
