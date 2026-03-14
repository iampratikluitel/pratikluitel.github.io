import { useState, useEffect, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OriginStory from '@/components/OriginStory'
import AcademiaArc from '@/components/AcademiaArc'
import BonnChapter from '@/components/BonnChapter'
import SkillScrolls from '@/components/SkillScrolls'
import ResearchArc from '@/components/ResearchArc'
import ProjectsSaga from '@/components/ProjectsSaga'
import VolunteeringArc from '@/components/VolunteeringArc'

const chapters = [
  { id: "origin",     title: "About",      subtitle: "The Crying Creature" },
  { id: "academia",   title: "Education",  subtitle: "Call to Adventure" },
  { id: "bonn",       title: "Grad School",subtitle: "German Expedition" },
  { id: "skills",     title: "Skills",     subtitle: "Technical Arsenal" },
  { id: "experience", title: "Experience", subtitle: "Research & Reality" },
  { id: "projects",   title: "Projects",   subtitle: "Building Worlds" },
  { id: "community",  title: "Community",  subtitle: "Still Loading..." },
]

const validIds = new Set(chapters.map(c => c.id))

function getInitialTab(): string {
  const hash = window.location.hash.slice(1)
  return validIds.has(hash) ? hash : 'origin'
}

const renderTabContent = (chapterId: string) => {
  switch (chapterId) {
    case "origin":     return <OriginStory />
    case "academia":   return <AcademiaArc />
    case "bonn":       return <BonnChapter />
    case "skills":     return <SkillScrolls />
    case "experience": return <ResearchArc />
    case "projects":   return <ProjectsSaga />
    case "community":  return <VolunteeringArc />
    default:           return <OriginStory />
  }
}

const Index = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(getInitialTab)
  const scrollPositions = useRef<Record<string, number>>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Sync active tab when user navigates with browser back/forward
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (validIds.has(hash)) setActiveTab(hash)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleTabChange = (value: string) => {
    // Save current scroll position before leaving
    scrollPositions.current[activeTab] = window.scrollY

    setActiveTab(value)
    window.history.replaceState(null, '', `#${value}`)

    // Restore scroll position for the incoming tab (after paint)
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPositions.current[value] ?? 0, behavior: 'instant' })
    })
  }

  return (
    <div className={`min-h-screen p-4 transition-opacity duration-1000 relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="manga-title text-5xl md:text-7xl mb-4 text-manga-ink animate-manga-swoosh">
            THE ABSURD LIFE OF PRATIK LUITEL
          </h1>
          <p className="font-manga-handwrite text-lg md:text-xl text-gray-600 mb-2">
            (Or: How I Learned to Stop Worrying and Love the Latent Space)
          </p>
          <p className="sound-effect text-xl md:text-2xl text-manga-red mb-6">
            *Existential Crisis Loading...*
          </p>
          <a
            href="https://drive.google.com/file/d/1XgPNxktQAjTUlW_jRb3T87S1-DE_RCVQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-manga-red text-white font-manga-title text-sm md:text-base px-6 py-3 border-4 border-manga-ink hover:bg-manga-ink transition-colors duration-200"
            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"/></svg>
            VIEW RÉSUMÉ
          </a>
        </div>

        {/* Chapter Navigation */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* Horizontally scrollable on mobile, centred on desktop */}
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <TabsList className="flex w-max md:w-full md:flex-wrap md:justify-center gap-2 bg-manga-ink/10 h-auto p-2 min-w-full">
              {chapters.map((chapter) => (
                <TabsTrigger
                  key={chapter.id}
                  value={chapter.id}
                  className="flex flex-col flex-shrink-0 px-4 py-2 h-auto data-[state=active]:bg-manga-red data-[state=active]:text-white border-2 border-transparent data-[state=active]:border-manga-ink"
                >
                  <span className="font-bold text-sm leading-tight whitespace-nowrap">{chapter.title}</span>
                  <span className="hidden md:block text-xs opacity-70 whitespace-nowrap">{chapter.subtitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Chapter Content */}
          {chapters.map((chapter) => (
            <TabsContent key={chapter.id} value={chapter.id}>
              {renderTabContent(chapter.id)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Index