import LanguageSelector from './LanguageSelector'
import Menu from './Menu'
import Profile from './Profile'
import { ThemeToggle } from './ThemeToggle'
import ThreeDots from './ThreeDots'

function Navbar() {
  return (
    <div className="w-full h-12 flex items-center justify-between px-4 border-b border-border pb-2">
      <ThreeDots />
      <Menu />
      <div className="flex items-center gap-4 min-w-fit">
        <LanguageSelector />
        <ThemeToggle />
        <Profile />
      </div>
    </div>
  )
}

export default Navbar
