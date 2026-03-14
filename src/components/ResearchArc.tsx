import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Calendar, Building, Microscope, MapPin } from 'lucide-react'

const ResearchArc = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          IV. SINGAPORE SIMULATION
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
                  <Calendar className="w-4 h-4" />
                  <span><strong>Duration:</strong> Feb 2024 - May 2024</span>
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

            <div className="power-level text-center mb-4">
              <span className="font-manga-title">RESEARCH LEVEL: ADVANCED</span>
            </div>
            

            

          </div>

          <div className="space-y-3">
            <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
              <p className="font-manga text-sm text-blue-800">
                • Developed and benchmarked deep learning models for 3D vision tasks including depth estimation and stereo matching, achieving competitive performance on standard datasets.
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg border-l-4 border-purple-500">
              <p className="font-manga text-sm text-purple-800">
                • Proposed a novel edge-structure regularization framework for stereo matching, integrating a disparity aggregation module across multiple backbone networks.
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-500">
              <p className="font-manga text-sm text-yellow-800">
                • Built a night-to-day image translation model using GANs, improving downstream vision model accuracy in low-light conditions by reducing domain gap.
              </p>
            </div>
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
              <h4 className="font-manga-title text-lg mb-4">Full Stack Developer</h4>
              <h5 className="font-manga text-md text-manga-ink mb-3">Clock B Business Technology</h5>
              <div className="space-y-2 font-manga text-sm mb-4">
                <p><strong>Duration:</strong> Dec 2024 - Nov 2025</p>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-manga text-sm text-green-800">
                    • Built a full-stack web application using the MERN stack, implementing secure authentication and role-based access control.
                  </p>
                </div>
                
                <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-manga text-sm text-blue-800">
                    • Designed and optimized MongoDB schemas to efficiently store and retrieve application data.
                  </p>
                </div>
                
                <div className="bg-purple-100 p-3 rounded-lg border-l-4 border-purple-500">
                  <p className="font-manga text-sm text-purple-800">
                    • Developed RESTful APIs with Express.js to handle user interactions and integrate third-party services.
                  </p>
                </div>
                
                <div className="bg-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                  <p className="font-manga text-sm text-orange-800">
                    • Implemented dynamic and responsive user interfaces using React.js, enhancing user experience.
                  </p>
                </div>
                
                <div className="bg-red-100 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="font-manga text-sm text-red-800">
                    • Optimized server-side performance with Node.js, improving request handling and response times.
                  </p>
                </div>
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

      {/* Clock B Internship */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Origin Story: First Mission
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-manga-ink/5 p-6 rounded-lg border-2 border-manga-ink">
              <h4 className="font-manga-title text-lg mb-4">Full Stack Developer Intern</h4>
              <h5 className="font-manga text-md text-manga-ink mb-3">Clock B Business Technology, Kathmandu</h5>
              <div className="space-y-2 font-manga text-sm mb-4">
                <p><strong>Duration:</strong> May 2023 – Jul 2023</p>
              </div>

              <div className="space-y-3 mt-4">
                <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-manga text-sm text-green-800">
                    • Implemented UI/UX designs in HTML, CSS, and JavaScript, translating mockups into functional web interfaces.
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-manga text-sm text-blue-800">
                    • Managed SQL databases and conducted unit and integration testing to ensure application reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SpeechBubble position="bottom-right">
              <p className="font-manga">
                <strong>Origin Arc:</strong> Every legendary developer starts somewhere. 
                This was the tutorial level — learning the fundamentals before the real boss battles began.
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
        
        <SpeechBubble position="bottom-center" className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            "Life is a soup and we are all forks, trying to sip the stars while the void hums jazz in a language only snails remember"
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