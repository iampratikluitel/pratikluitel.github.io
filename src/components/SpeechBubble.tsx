import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SpeechBubbleProps {
  children: ReactNode
  className?: string
  position?: 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-right'
}

const SpeechBubble = ({ children, className, position = 'bottom-left' }: SpeechBubbleProps) => {
  const positionStyles = {
    'bottom-left': 'speech-bubble',
    'bottom-right': 'speech-bubble after:right-8 after:left-auto before:right-6 before:left-auto',
    'bottom-center': 'speech-bubble after:left-1/2 after:-translate-x-1/2 before:left-1/2 before:-translate-x-1/2',
    'top-left': 'speech-bubble before:left-6 after:left-8',
    'top-right': 'speech-bubble before:right-6 before:left-auto after:right-8 after:left-auto'
  }

  return (
    <div className={cn(positionStyles[position], 'animate-speech-bubble font-manga', className)}>
      {children}
    </div>
  )
}

export default SpeechBubble 