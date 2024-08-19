'use client'
import { PiDownloadSimpleFill } from 'react-icons/pi'
import { Button } from './ui/button'

const filePath = '/downloads/PHILIP_MAHAMA_AKPANYI.pdf'

function CVDownloader() {
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
      <PiDownloadSimpleFill className="mr-2" /> Download CV
    </Button>
  )
}

export default CVDownloader
