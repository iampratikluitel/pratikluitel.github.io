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
    'top-left': 'speech-bubble before:top-[-15px] before:bottom-auto before:border-bottom-[15px] before:border-top-0 after:top-[-12px] after:bottom-auto after:border-bottom-[13px] after:border-top-0',
    'top-right': 'speech-bubble before:top-[-15px] before:bottom-auto before:right-6 before:left-auto before:border-bottom-[15px] before:border-top-0 after:top-[-12px] after:bottom-auto after:right-8 after:left-auto after:border-bottom-[13px] after:border-top-0'
  }

  return (
    <div className={cn(positionStyles[position], 'animate-speech-bubble font-manga', className)}>
      {children}
    </div>
  )
}

export default SpeechBubble 