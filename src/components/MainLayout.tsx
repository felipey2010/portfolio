import { ReactNode } from 'react'
import DraggableContainer from './DraggableContainer'
import Navbar from './Navbar'
import CookieConsent from './CookieConsent'
import Footer from './Footer'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen p-8 flex items-center justify-center bg-background text-foreground transition-all duration-500 ease-in-out overflow-auto">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:outline focus:outline-2 focus:outline-ring"
      >
        Skip to main content
      </a>
      <DraggableContainer>
        <header className="w-full">
          <Navbar />
        </header>
        <main
          id="main-content"
          tabIndex={-1}
          className="w-full flex flex-1 p-2 overflow-x-hidden overflow-y-auto scroll-smooth"
        >
          {children}
        </main>
        <div className="w-full">
          <Footer />
        </div>
      </DraggableContainer>
      <CookieConsent />
    </div>
  )
}

export default MainLayout
