import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import OriginStory from '@/components/OriginStory'
import AcademiaArc from '@/components/AcademiaArc'
import SkillScrolls from '@/components/SkillScrolls'
import ResearchArc from '@/components/ResearchArc'
import ProjectsSaga from '@/components/ProjectsSaga'
import VolunteeringArc from '@/components/VolunteeringArc'

const Index = () => {
  const [isVisible, setIsVisible] = useState(false)

  const chapters = [
    { id: "origin", title: "Tutorial Phase", subtitle: "The Crying Creature" },
    { id: "academia", title: "Scholarship.exe", subtitle: "Call to Adventure" },
    { id: "skills", title: "Coding the Abyss", subtitle: "Technical Arsenal" },
    { id: "experience", title: "Singapore Simulation", subtitle: "Research & Reality" },
    { id: "projects", title: "Side Quests", subtitle: "Building Worlds" },
    { id: "community", title: "Present State", subtitle: "Still Loading..." },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderTabContent = (chapterId: string) => {
    switch (chapterId) {
      case "origin":
        return <OriginStory />
      case "academia":
        return <AcademiaArc />
      case "skills":
        return <SkillScrolls />
      case "experience":
        return <ResearchArc />
      case "projects":
        return <ProjectsSaga />
      case "community":
        return <VolunteeringArc />
      default:
        return <OriginStory />
    }
  }

  return (
    <div className={`min-h-screen p-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="manga-title text-5xl md:text-7xl mb-4 text-manga-ink animate-manga-swoosh">
            THE ABSURD LIFE OF PRATIK LUITEL
          </h1>
          <p className="font-manga-handwrite text-lg md:text-xl text-gray-600 mb-2">
            (Or: How I Learned to Stop Worrying and Love the Latent Space)
          </p>
          <p className="sound-effect text-xl md:text-2xl text-manga-red">
            *Existential Crisis Loading...*
          </p>
        </div>

        {/* Chapter Navigation */}
        <Tabs defaultValue="origin" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-manga-ink/10 h-auto p-2">
            {chapters.map((chapter) => (
              <TabsTrigger 
                key={chapter.id} 
                value={chapter.id}
                className="flex flex-col p-3 h-auto min-h-[60px] data-[state=active]:bg-manga-red data-[state=active]:text-white border-2 border-transparent data-[state=active]:border-manga-ink"
              >
                <span className="font-bold text-xs md:text-sm text-center leading-tight">{chapter.title}</span>
                <span className="text-xs opacity-80 text-center">{chapter.subtitle}</span>
              </TabsTrigger>
            ))}
          </TabsList>

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