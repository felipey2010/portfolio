'use client'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import { Button } from './ui/button'

const filePath = '/downloads/PHILIP_MAHAMA_AKPANYI.pdf'

function CVDownloader({ buttonText = 'Download CV' }: { buttonText?: string }) {
  function openFile() {
    window.open(filePath, '_blank')
  }

  return (
    <Button
      onClick={openFile}
      variant="ghost"
      size="lg"
      className="border border-border"
      borderStyle="right-rounded"
    >
      <PiDownloadSimpleFill className="mr-2" /> {buttonText}
    </Button>
  )
}

export default CVDownloader
