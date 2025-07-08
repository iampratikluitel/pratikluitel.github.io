import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MangaPanelProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'dramatic' | 'action'
}

const MangaPanel = ({ children, className, variant = 'default' }: MangaPanelProps) => {
  const variantStyles = {
    default: 'manga-panel',
    dramatic: 'manga-panel border-8 shadow-2xl',
    action: 'manga-panel border-6 border-manga-red shadow-2xl'
  }

  return (
    <div className={cn(variantStyles[variant], 'animate-panel-appear', className)}>
      {children}
    </div>
  )
}

export default MangaPanel 