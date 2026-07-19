type Props = {
  selectedLanguage: string
}

const description = {
  en: (
    <>
      A software developer with over 3 years of professional experience in the
      field. Possess knowledge in various programming languages and frameworks
      to build both frontend and backend applications, with a strong focus on
      delivering high-quality solutions. <br />
      Passionate about technology and always eager to learn and grow in the
      ever-evolving world of software development.
    </>
  ),
  pt: (
    <>
      Desenvolvedor de software com mais de 3 anos de experiência profissional
      na área. Possuo conhecimento em diversas linguagens de programação e
      frameworks para construir aplicações tanto de front-end quanto de
      back-end, com forte foco na entrega de soluções de alta qualidade. <br />
      Apaixonado por tecnologia e sempre ávido por aprender e crescer no mundo
      em constante evolução do desenvolvimento de software.
    </>
  ),
}

function Presentation({ selectedLanguage }: Props) {
  return (
    <div className="w-full flex items-center justify-center px-2 md:px-16">
      <h2 className="w-full sm:w-auto text-foreground text-center">
        {description[selectedLanguage as keyof typeof description]}
      </h2>
    </div>
  )
}

export default Presentation
