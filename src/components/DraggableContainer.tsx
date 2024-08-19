'use client'
import { motion, useDragControls } from 'framer-motion'
import { ReactNode } from 'react'

function DraggableContainer({ children }: { children: ReactNode }) {
  const controls = useDragControls()

  function startDrag(event: PointerEvent | React.PointerEvent<Element>) {
    controls.start(event)
  }

  return (
    <motion.div
      className="w-full md:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl h-full min-h-[630px] max-h-[calc(100dvh-100px)] rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col items-center"
      drag
      dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
      dragElastic={0.9}
      dragListener={false}
      dragControls={controls}
    >
      <div className="my-2 mx-auto flex justify-center rounded-t-xl">
        <button
          className="h-1.5 w-10 cursor-grab touch-none bg-gray-200 rounded-lg"
          onPointerDown={startDrag}
        />
      </div>
      {children}
    </motion.div>
  )
}

export default DraggableContainer
