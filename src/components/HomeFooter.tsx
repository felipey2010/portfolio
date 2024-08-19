import Clock from './Clock'
import DateDisplay from './DateDisplay'

const RightReserved = '© 2024 - All right reserved'
const MadeWithLove = 'Made with ❤️ by Philip'

function HomeFooter() {
  return (
    <div className="w-full min-h-6 absolute bottom-0 flex items-center justify-between gap-4 text-sm px-2">
      <div>
        <h2>{RightReserved}</h2>
      </div>
      <div className="hidden md:block">
        <h2>{MadeWithLove}</h2>
      </div>
      <div className="min-w-fit flex items-center gap-4">
        <DateDisplay />
        <Clock />
      </div>
    </div>
  )
}

export default HomeFooter
