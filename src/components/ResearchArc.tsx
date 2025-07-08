import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Plane, Building, Microscope, FileText, Award, MapPin } from 'lucide-react'

const ResearchArc = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          CHAPTER IV: SINGAPORE SIMULATION
        </h2>
        
        <div className="text-center mb-6">
          <div className="sound-effect text-3xl text-manga-red mb-4">TELEPORT!</div>
          <SpeechBubble>
            <p className="text-lg font-manga">
              In which our protagonist discovers that <strong>research</strong> is just sophisticated 
              procrastination with better documentation and occasional breakthroughs.
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* A*STAR Adventure */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-3xl text-center mb-8 text-manga-ink flex items-center justify-center gap-3">
          <Building className="w-8 h-8 text-manga-red" />
          The A*STAR Chronicles
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-manga-red/10 p-6 rounded-lg border-2 border-manga-red mb-6">
              <h4 className="font-manga-title text-xl text-manga-red mb-4 flex items-center gap-2">
                <Microscope className="w-6 h-6" />
                Research Internship
              </h4>
              <div className="space-y-3 font-manga">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span><strong>Location:</strong> A*STAR, Singapore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span><strong>Duration:</strong> Summer 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span><strong>Department:</strong> Institute for Infocomm Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="w-4 h-4" />
                  <span><strong>Focus:</strong> AI/ML Research & Development</span>
                </div>
              </div>
            </div>

            <div className="power-level text-center">
              <span className="font-manga-title">RESEARCH LEVEL: ADVANCED</span>
            </div>
          </div>

          <div className="space-y-4">
            <SpeechBubble position="bottom-left">
              <p className="font-manga">
                <strong>Plot Twist:</strong> Turns out Singapore is not just a city-state but also 
                a real-life simulation where efficiency reaches levels that defy the laws of physics!
              </p>
            </SpeechBubble>

            <SpeechBubble position="top-right">
              <p className="font-manga">
                <strong>Discovery:</strong> Research is like debugging, but instead of fixing code, 
                you're trying to understand why the universe works the way it does.
              </p>
            </SpeechBubble>

            <div className="sound-effect text-center text-2xl">EUREKA!</div>
          </div>
        </div>
      </MangaPanel>

      {/* Research Achievements */}


      {/* Clock B Business Technology */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Business Simulation
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-manga-ink/5 p-6 rounded-lg border-2 border-manga-ink">
              <h4 className="font-manga-title text-lg mb-4">Clock B Business Technology</h4>
              <div className="space-y-2 font-manga text-sm">
                <p><strong>Role:</strong> Software Development Intern</p>
                <p><strong>Skills Applied:</strong> Full-stack Development</p>
                <p><strong>Achievement:</strong> Built scalable business solutions</p>
                <p><strong>Secret Technique:</strong> Converting business requirements into code</p>
              </div>
            </div>
          </div>

          <div>
            <SpeechBubble position="bottom-right">
              <p className="font-manga">
                <strong>Real World Boss Battle:</strong> Learned that enterprise software 
                is like a massive multiplayer game where everyone has different objectives 
                and the rules keep changing mid-game.
              </p>
            </SpeechBubble>
          </div>
        </div>
      </MangaPanel>

      {/* Research Philosophy */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Way of Research
        </h3>
        
        <SpeechBubble className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            "Research is the art of asking questions you don't know the answers to, 
            then spending months finding out that the real question was something completely different. 
            Also, coffee is essential."
          </p>
          <p className="text-right font-manga text-sm mt-2">- Research Zen Master Pratik</p>
        </SpeechBubble>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="sound-effect text-lg">QUESTION!</div>
            <h4 className="font-manga-title text-lg">Curiosity</h4>
            <p className="font-manga text-sm">Ask the questions that keep you awake at night</p>
          </div>
          
          <div className="space-y-2">
            <div className="sound-effect text-lg text-manga-red">EXPERIMENT!</div>
            <h4 className="font-manga-title text-lg">Exploration</h4>
            <p className="font-manga text-sm">Test hypotheses until something makes sense</p>
          </div>
          
          <div className="space-y-2">
            <div className="sound-effect text-lg">PUBLISH!</div>
            <h4 className="font-manga-title text-lg">Share</h4>
            <p className="font-manga text-sm">Document everything for future confused researchers</p>
          </div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default ResearchArc 