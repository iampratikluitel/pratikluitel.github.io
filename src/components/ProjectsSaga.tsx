import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Brain, Eye, Sun, Heart, Shield, Users, Star } from 'lucide-react'

const ProjectsSaga = () => {
  const projects = [
    {
      title: "Self-Attention Siamese Network",
      subtitle: "The Pattern Twins",
      icon: <Brain className="w-8 h-8" />,
      tech: ["Python", "PyTorch", "Contrastive Learning"],
      description: "A Siamese network with self-attention for few-shot learning. Transformer vibes, twin trauma, and contrastive enlightenment.",
      achievement: "Few-Shot Accuracy ++",
      status: "Epic",
      color: "bg-purple-500"
    },
    {
      title: "Realistic Deep Learning for 3D Vision",
      subtitle: "Edge Guardian",
      icon: <Eye className="w-8 h-8" />,
      tech: ["Python", "TensorFlow", "Stereo Matching"],
      description: "A framework that regularizes stereo matching with edge structures. Because machines deserve depth perception, too.",
      achievement: "Accepted at ISPR",
      status: "Legendary",
      color: "bg-blue-500"
    },
    {
      title: "Night-to-Day Image Translation",
      subtitle: "Digital Dawn Maker",
      icon: <Sun className="w-8 h-8" />,
      tech: ["Python", "GAN", "CV"],
      description: "Turns 2 AM into 2 PM for computer vision models. Sunlight sold separately.",
      achievement: "Low-Light Boost",
      status: "Rare",
      color: "bg-yellow-500"
    },
    {
      title: "Sentiment Analysis & Employee Satisfaction",
      subtitle: "Mood Meter",
      icon: <Heart className="w-8 h-8" />,
      tech: ["Python", "CNN", "Computer Vision"],
      description: "Measures workplace joy via pixels. Slightly dystopian, surprisingly effective.",
      achievement: "Happy Index ↑",
      status: "Epic",
      color: "bg-pink-500"
    },
    {
      title: "Event Organization Smart Contract",
      subtitle: "Trustless Ticketing",
      icon: <Shield className="w-8 h-8" />,
      tech: ["Solidity", "Remix IDE", "Blockchain"],
      description: "Smart contracts for event payments. Because trust issues are real and code is law.",
      achievement: "Gas Fees Minimized",
      status: "Rare",
      color: "bg-green-500"
    },
    {
      title: "Real-Time Pedestrian Detection",
      subtitle: "Social Distance Oracle",
      icon: <Users className="w-8 h-8" />,
      tech: ["Python", "YOLOv3", "OpenCV"],
      description: "Detects humans in live video and judges their personal space. Pandemic programming at its finest.",
      achievement: "Risk Alert 99%",
      status: "Epic",
      color: "bg-red-500"
    }
  ]

  const renderProject = (project: any, index: number) => (
    <MangaPanel key={project.title} className="p-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${project.color} p-3 rounded-lg text-white`}>
              {project.icon}
            </div>
            <div>
              <h4 className="font-manga-title text-lg text-manga-ink">{project.title}</h4>
              <p className="font-manga text-sm text-gray-600">{project.subtitle}</p>
            </div>
          </div>
          <div className={`power-level text-xs ${project.status === 'Legendary' ? 'bg-yellow-400' : project.status === 'Epic' ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'} px-2 py-1 rounded`}> 
            {project.status}
          </div>
        </div>

        {/* Description */}
        <SpeechBubble className="text-sm">
          <p className="font-manga">{project.description}</p>
        </SpeechBubble>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span key={tech} className="bg-manga-ink/10 px-2 py-1 rounded text-xs font-manga border border-manga-ink">
              {tech}
            </span>
          ))}
        </div>

        {/* Achievement + sound effect */}
        <div className="flex justify-between items-center">
          <span className="font-manga-title text-sm text-manga-red">{project.achievement}</span>
          <div className="sound-effect text-sm">
            {index % 3 === 0 ? 'BOOM!' : index % 3 === 1 ? 'ZAP!' : 'POW!'}
          </div>
        </div>
      </div>
    </MangaPanel>
  )

  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          V. THE SIDE QUESTS
        </h2>

        <div className="text-center mb-6">
          <SpeechBubble>
            <p className="text-lg font-manga">
              Not content with just the main storyline, Pratik picked up side quests:
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* Project Gallery */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-3xl text-center mb-8 text-manga-ink">
          The Project Arsenal
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => renderProject(project, index))}
        </div>
      </MangaPanel>

      {/* Chapter Conclusion */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-red">
          The Side Quest Epilogue
        </h3>

        <SpeechBubble className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            "Sometimes the projects worked. Sometimes they combusted in a glorious heap of stack traces.
            But in the building, in the failing, and in the trying again, there was something almost… human."
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SpeechBubble>
              <p className="font-manga">
                <strong>Moral of the Side Quests:</strong> Creation is the closest thing we have to magic.
              </p>
            </SpeechBubble>
          </div>

          <div>
            <SpeechBubble position="bottom-right">
              <p className="font-manga italic">
                And if the universe is absurd, then let our code be even more so—beautifully, defiantly so.
              </p>
            </SpeechBubble>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="power-level inline-block">
            <span className="font-manga-title">SIDE QUESTS: COMPLETE</span>
          </div>
          <div className="sound-effect text-sm mt-2">*Achievement Unlocked: Digital Alchemist*</div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default ProjectsSaga 