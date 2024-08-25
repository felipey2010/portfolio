import { ReactNode } from 'react'
import DraggableContainer from './DraggableContainer'
import Navbar from './Navbar'
import CookieConsent from './CookieConsent'
import Footer from './Footer'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen p-8 flex items-center justify-center bg-background text-foreground transition-all duration-500 ease-in-out overflow-auto">
      <DraggableContainer>
        <Navbar />
        <div className="w-full flex flex-1 p-2 overflow-x-hidden overflow-y-auto scroll-smooth">
          {children}
        </div>
        <Footer />
      </DraggableContainer>
      <CookieConsent />
    </div>
  )
}

export default MainLayout
