import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { MapPin, Calendar, Building, Eye, Database, Code, TestTube, Microscope } from 'lucide-react'

const ExperienceChapter = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          IV. SINGAPORE AND THE SIMULATION HYPOTHESIS
        </h2>
        
        <div className="text-center mb-6">
          <SpeechBubble>
            <p className="text-lg font-manga">
              In 2024, he flew to <strong>A*STAR Singapore</strong> — a city so clean it feels like it's rendering in real-time.
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* A*STAR Research Experience */}
      <MangaPanel variant="action" className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-manga-title text-3xl text-manga-ink mb-6 flex items-center gap-3">
              <Microscope className="w-8 h-8 text-manga-red" />
              Research Intern
            </h3>
            
            <div className="bg-manga-red/10 p-6 rounded-lg border-2 border-manga-red mb-6">
              <h4 className="font-manga-title text-xl text-manga-red mb-4">
                Agency for Science Technology and Research (A*STAR)
              </h4>
              <div className="space-y-3 font-manga">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-manga-red" />
                  <span><strong>Location:</strong> Singapore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-manga-red" />
                  <span><strong>Duration:</strong> Feb 2024 - May 2024</span>
                </div>
              </div>
            </div>

            <SpeechBubble position="bottom-right" className="mb-4">
              <p className="font-manga italic">
                There, he did research on things that sound like they came from a sci-fi novel but are somehow real.
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <h4 className="font-manga-title text-xl text-manga-ink">The Research Achievements</h4>
            
            <div className="space-y-3">
              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <h5 className="font-manga-title text-sm text-blue-800">3D Vision Development</h5>
                </div>
                <p className="font-manga text-sm text-blue-700">
                  Developed models for 3D vision tasks focusing on depth estimation and stereo matching.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <TestTube className="w-5 h-5 text-purple-600" />
                  <h5 className="font-manga-title text-sm text-purple-800">Night-to-Day Translation</h5>
                </div>
                <p className="font-manga text-sm text-purple-700">
                  Created a night-to-day image translation model, improving vision performance in varying lighting conditions.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-green-600" />
                  <h5 className="font-manga-title text-sm text-green-800">Model Evaluation</h5>
                </div>
                <p className="font-manga text-sm text-green-700">
                  Evaluated deep learning models' performance on 3D vision tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* Singapore Reflections */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-ink">
          The Singapore Revelation
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <SpeechBubble>
            <p className="font-manga text-center">
              <strong>Stereo matching</strong><br/>
              <span className="text-sm italic">(which sounds like dating for robots)</span>
            </p>
          </SpeechBubble>

          <SpeechBubble position="top-left">
            <p className="font-manga text-center">
              <strong>Depth estimation</strong><br/>
              <span className="text-sm italic">(teaching machines to see the void)</span>
            </p>
          </SpeechBubble>

          <SpeechBubble position="bottom-right">
            <p className="font-manga text-center">
              <strong>Night-to-day models</strong><br/>
              <span className="text-sm italic">(because the sun is fake and lighting is a lie)</span>
            </p>
          </SpeechBubble>
        </div>

        <SpeechBubble className="mt-8">
          <p className="font-manga-handwrite text-lg italic text-center">
            "He lived among data scientists and AI engineers — wizards, essentially, 
            who spoke in equations and summoned insights from statistical fog."
          </p>
        </SpeechBubble>
      </MangaPanel>

      {/* Clock B Experience */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-title text-3xl text-manga-ink mb-6 flex items-center gap-3">
          <Code className="w-8 h-8 text-manga-red" />
          The Earlier Quest
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-500 mb-6">
              <h4 className="font-manga-title text-xl text-orange-800 mb-4">
                Full Stack Developer Intern
              </h4>
              <h5 className="font-manga text-lg text-orange-700 mb-3">
                Clock B Business Technology
              </h5>
              <div className="space-y-2 font-manga text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span><strong>Location:</strong> Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span><strong>Duration:</strong> May 2023 - Jul 2023</span>
                </div>
              </div>
            </div>

            <SpeechBubble>
              <p className="font-manga italic">
                Before Singapore, there was the homeland training arc — where he learned 
                the ancient arts of frontend wizardry and database manipulation.
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <h4 className="font-manga-title text-xl text-manga-ink">The Full Stack Chronicles</h4>
            
            <div className="space-y-3">
              <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-red-600" />
                  <h5 className="font-manga-title text-sm text-red-800">UI/UX Implementation</h5>
                </div>
                <p className="font-manga text-sm text-red-700">
                  Implemented UI/UX designs using HTML, CSS, and JavaScript.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  <h5 className="font-manga-title text-sm text-blue-800">Database Management</h5>
                </div>
                <p className="font-manga text-sm text-blue-700">
                  Managed SQL databases for efficient data storage and retrieval.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <TestTube className="w-5 h-5 text-green-600" />
                  <h5 className="font-manga-title text-sm text-green-800">Quality Assurance</h5>
                </div>
                <p className="font-manga text-sm text-green-700">
                  Conducted unit and integration testing to ensure code quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* The Existential Crisis */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Evening Contemplations
        </h3>
        
        <SpeechBubble className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            At night, Pratik would wonder:
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-6">
          <SpeechBubble position="bottom-right">
            <p className="font-manga text-center">
              <strong>"Am I doing research, or is this simulation just trying to see 
              how far it can push a Nepali kid with a laptop?"</strong>
            </p>
          </SpeechBubble>

          <SpeechBubble position="top-left">
            <p className="font-manga text-center">
              <strong>"If machines can learn to see depth, can they also learn to see 
              the depth of human suffering?"</strong>
            </p>
          </SpeechBubble>
        </div>

        <div className="text-center mt-8">
          <div className="power-level inline-block">
            <span className="font-manga-title">EXPERIENCE LEVEL: REAL WORLD TESTED</span>
          </div>
          <div className="sound-effect text-sm mt-2">*Achievement Unlocked: Professional Reality*</div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default ExperienceChapter 