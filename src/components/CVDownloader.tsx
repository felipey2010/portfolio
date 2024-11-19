'use client'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import { Button } from './ui/button'

const filePath = '/downloads/PHILIP_MAHAMA_AKPANYI.pdf'
const filePathEn = '/downloads/PHILIP_MAHAMA_AKPANYI_en.pdf'

function CVDownloader({
  buttonText = 'Download CV',
  language = 'en',
}: {
  buttonText?: string
  language?: string
}) {
  function openFile() {
    const file = language === 'en' ? filePathEn : filePath
    window.open(file, '_blank')
  }

  return (
    <Button
      onClick={openFile}
      variant="ghost"
      size="lg"
      className="border border-border w-full sm:w-auto"
      borderStyle="right-rounded"
    >
      <PiDownloadSimpleFill className="mr-2" /> {buttonText}
    </Button>
  )
}

export default CVDownloader
