import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Code, Database, Cpu, Brain, Zap, Shield, Calculator, Terminal } from 'lucide-react'
import { CharacterBattle, MainCharacter, VillainCharacter } from '@/components/MangaCharacters'

const SkillScrolls = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      description: "The ancient tongues of machine communication",
      skills: [
        { name: "Python", level: "Master", color: "bg-yellow-400", subtitle: "OpenCV, TensorFlow, PyTorch" },
        { name: "Java", level: "Advanced", color: "bg-orange-400", subtitle: "Object-oriented enlightenment" },
        { name: "R", level: "Advanced", color: "bg-blue-400", subtitle: "Statistical wizardry" },
        { name: "MATLAB", level: "Advanced", color: "bg-red-400", subtitle: "Mathematical sorcery" }
      ]
    },
    {
      title: "Mathematics",
      icon: <Calculator className="w-6 h-6" />,
      description: "The universal language of suffering",
      skills: [
        { name: "Linear Algebra", level: "Advanced", color: "bg-purple-500", subtitle: "Matrix multiplication nightmares" },
        { name: "Calculus", level: "Advanced", color: "bg-indigo-500", subtitle: "Derivatives of despair" },
        { name: "Probability & Statistics", level: "Advanced", color: "bg-pink-500", subtitle: "Quantifying uncertainty" }
      ]
    },
    {
      title: "Core Computer Science",
      icon: <Brain className="w-6 h-6" />,
      description: "The foundations of digital reality",
      skills: [
        { name: "Algorithms & Data Structures", level: "Expert", color: "bg-green-500", subtitle: "Elegant solutions to complex problems" },
        { name: "Machine Learning", level: "Expert", color: "bg-blue-600", subtitle: "Teaching machines to think" },
        { name: "Deep Learning", level: "Advanced", color: "bg-purple-600", subtitle: "Neural networks and digital souls" },
        { name: "Image Processing", level: "Advanced", color: "bg-cyan-500", subtitle: "Making sense of pixels" },
        { name: "Data Visualization", level: "Advanced", color: "bg-orange-500", subtitle: "Making data beautiful" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-6 h-6" />,
      description: "The weapons of digital warfare",
      skills: [
        { name: "Git", level: "Advanced", color: "bg-gray-500", subtitle: "Version control sanity" },
        { name: "Docker", level: "Intermediate", color: "bg-blue-500", subtitle: "Containerized existence" },
        { name: "Jupyter Notebook", level: "Expert", color: "bg-orange-400", subtitle: "Interactive enlightenment" },
        { name: "CUDA", level: "Intermediate", color: "bg-green-600", subtitle: "GPU acceleration magic" },
        { name: "Linux/Unix", level: "Advanced", color: "bg-black", subtitle: "Command line mastery" }
      ]
    }
  ]

  const softSkills = [
    "Communication",
    "Problem Solving", 
    "Teamwork",
    "Time Management"
  ]

  const renderSkillBar = (skill: any) => (
    <div key={skill.name} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-manga text-sm font-bold">{skill.name}</span>
        <span className="font-manga-title text-xs">{skill.level}</span>
      </div>
      {skill.subtitle && (
        <p className="font-manga text-xs text-gray-600 mb-1">{skill.subtitle}</p>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-manga-ink">
        <div 
          className={`${skill.color} h-full rounded-full border-r-2 border-manga-ink transition-all duration-1000`}
          style={{ 
            width: skill.level === 'Expert' ? '95%' : 
                   skill.level === 'Master' ? '90%' :
                   skill.level === 'Advanced' ? '75%' : '60%'
          }}
        />
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          III. CODING THE ABYSS
        </h2>
        
        <div className="text-center mb-6">
          <SpeechBubble>
            <p className="text-lg font-manga">
              At VIT, Pratik learned many things:
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* The Learning */}
      <MangaPanel className="p-8">
        <div className="space-y-6">
          <SpeechBubble>
            <p className="font-manga text-center">
              How to train neural networks without crying <em>(much)</em>.
            </p>
          </SpeechBubble>

          <SpeechBubble position="bottom-right">
            <p className="font-manga text-center">
              How to explain recursion to classmates using existential dread.
            </p>
          </SpeechBubble>

          <SpeechBubble position="top-left">
            <p className="font-manga text-center">
              How to debug TensorFlow models at 3AM while questioning if free will exists.
            </p>
          </SpeechBubble>
        </div>
        
        {/* Character Battle Scene */}

      </MangaPanel>

      {/* Technical Arsenal */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-3xl text-center mb-8 text-manga-ink flex items-center justify-center gap-3">
          <Zap className="w-8 h-8 text-manga-red" />
          Technical Arsenal
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="space-y-4">
              <div className="bg-manga-red/10 p-4 rounded-lg border-2 border-manga-red">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {category.icon}
                  <h4 className="font-manga-title text-lg text-manga-red">
                    {category.title}
                  </h4>
                </div>
                <p className="font-manga text-xs text-center italic mb-4 text-gray-600">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.skills.map(renderSkillBar)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MangaPanel>

      {/* Soft Skills */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-red">
          HUMAN COMPATIBILITY PROTOCOLS
        </h3>

        <SpeechBubble className="mb-6">
          <p className="font-manga text-center">
            <strong>Soft Skills:</strong> Because even machines need to communicate with other machines... 
            who happen to be operated by humans.
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <div key={skill} className="bg-manga-ink/5 p-4 rounded-lg border-2 border-manga-ink text-center">
              <p className="font-manga-title text-sm text-manga-ink">{skill}</p>
              <div className="power-level mt-2 text-xs">
                HUMAN.EXE
              </div>
            </div>
          ))}
        </div>
      </MangaPanel>

      {/* The Philosophy */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Digital Existentialism
        </h3>
        
        <SpeechBubble position="bottom-center" className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            "In the end, we are but shadows of echoes screaming into jars of mayonnaise, hoping the void sends us a coupon for meaning. But the void doesn’t shop here."
          </p>
          <p className="text-right font-manga text-sm mt-2">- Pratik</p>
        </SpeechBubble>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <Cpu className="w-12 h-12 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-lg">Learn</h4>
            <p className="font-manga text-sm">Absorb knowledge like a neural network absorbs training data</p>
          </div>
          
          <div className="space-y-2">
            <Code className="w-12 h-12 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-lg">Build</h4>
            <p className="font-manga text-sm">Create things that sometimes work on the first try</p>
          </div>
          
          <div className="space-y-2">
            <Brain className="w-12 h-12 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-lg">Question</h4>
            <p className="font-manga text-sm">Wonder why anything works at all in this digital universe</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="power-level inline-block">
            <span className="font-manga-title">STATUS: READY TO DECODE REALITY</span>
          </div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default SkillScrolls 