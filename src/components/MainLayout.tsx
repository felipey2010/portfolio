import { ReactNode } from 'react'
import DraggableContainer from './DraggableContainer'
import Navbar from './Navbar'
import CookieConsent from './CookieConsent'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen p-8 flex items-center justify-center bg-background text-foreground transition-all duration-500 ease-in-out">
      <DraggableContainer>
        <Navbar />
        <div className="w-full flex flex-1 flex-col p-2 overflow-hidden relative">
          {children}
        </div>
      </DraggableContainer>
      <CookieConsent />
    </div>
  )
}

export default MainLayout
