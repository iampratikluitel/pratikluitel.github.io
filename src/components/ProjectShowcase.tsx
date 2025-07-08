import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Brain, Eye, Sun, Heart, Shield, Users, ExternalLink, Star } from 'lucide-react'

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Self-Attention Siamese Network",
      subtitle: "Unsupervised Few-Shot Learning Tasks",
      icon: <Brain className="w-6 h-6" />,
      description: "Developed a Siamese network with self-attention mechanisms for few-shot learning.",
      details: [
        "Incorporated transformer-inspired self-attention for dynamic feature weighting",
        "Utilized contrastive learning for discriminative representation learning"
      ],
      theme: "Neural Architecture",
      color: "bg-purple-100 border-purple-500",
      iconColor: "text-purple-600"
    },
    {
      title: "Realistic Deep Learning for 3D Vision",
      subtitle: "Accepted at ISPR",
      icon: <Eye className="w-6 h-6" />,
      description: "Proposed a novel framework to regularize stereo matching using edge structures.",
      details: [
        "Developed a disparity aggregation module for edge regularization",
        "Integrated the regularization term with various stereo matching networks"
      ],
      theme: "Computer Vision",
      color: "bg-blue-100 border-blue-500",
      iconColor: "text-blue-600",
      achievement: "Published Research"
    },
    {
      title: "Night-to-Day Image Translation",
      subtitle: "Enhancing Low-Light Vision",
      icon: <Sun className="w-6 h-6" />,
      description: "Developed a model for translating night-time images to day-time images.",
      details: [
        "Enhanced computer vision tasks in low-light conditions",
        "Improved vision performance in varying lighting conditions"
      ],
      theme: "Image Processing",
      color: "bg-yellow-100 border-yellow-500",
      iconColor: "text-yellow-600"
    },
    {
      title: "Sentiment Analysis & Employee Satisfaction",
      subtitle: "Computer Vision + CNN",
      icon: <Heart className="w-6 h-6" />,
      description: "Developed a hybrid CNN architecture for employee satisfaction detection.",
      details: [
        "Effective analysis of visuals to detect employee satisfaction",
        "Python implementation with Convolutional Neural Networks"
      ],
      theme: "Human Analytics",
      color: "bg-pink-100 border-pink-500",
      iconColor: "text-pink-600"
    },
    {
      title: "Event Organization Smart Contract",
      subtitle: "Remix IDE + Solidity",
      icon: <Shield className="w-6 h-6" />,
      description: "Developed a smart contract for event management with automated payment processing.",
      details: [
        "Secure cryptocurrency transactions",
        "Blockchain-based event management system"
      ],
      theme: "Blockchain",
      color: "bg-green-100 border-green-500",
      iconColor: "text-green-600"
    },
    {
      title: "Real-Time Pedestrian Detection",
      subtitle: "Social Distancing Monitoring",
      icon: <Users className="w-6 h-6" />,
      description: "Developed a tool using YOLOv3 to detect individuals in real-time video feeds.",
      details: [
        "Gauge separation and assess risk levels for social distancing",
        "Real-time video processing and analysis"
      ],
      theme: "Public Health Tech",
      color: "bg-red-100 border-red-500",
      iconColor: "text-red-600"
    }
  ]

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

      {/* Opening Philosophy */}
      <MangaPanel className="p-8">
        <SpeechBubble className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            "Sometimes, he taught kids. Other times, he tried to teach society. 
            Most times, he just taught himself to keep going."
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-3 gap-6">
          <SpeechBubble position="bottom-right">
            <p className="font-manga text-center">
              He built <strong>smart contracts</strong> in Solidity.
            </p>
          </SpeechBubble>

          <SpeechBubble position="top-left">
            <p className="font-manga text-center">
              He taught <strong>machines to see</strong> in the dark.
            </p>
          </SpeechBubble>

          <SpeechBubble position="bottom-left">
            <p className="font-manga text-center">
              He tried to quantify <strong>human happiness</strong>.
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* The Project Arsenal */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-3xl text-center mb-8 text-manga-ink">
          The Project Arsenal
        </h3>

        <SpeechBubble className="mb-8">
          <p className="font-manga-handwrite text-lg italic text-center">
            "He built:"
          </p>
        </SpeechBubble>

        <div className="space-y-8">
          {/* Self-Attention Siamese Network */}
          <div className="bg-purple-100 p-6 rounded-lg border-2 border-purple-500">
            <h4 className="font-manga-title text-xl text-purple-800 mb-4">
              Self-Attention Siamese Network for Unsupervised Few-Shot Learning Tasks
            </h4>
            
            <SpeechBubble position="bottom-right" className="mb-4">
              <p className="font-manga text-sm italic">A Siamese network, inspired by twins and trauma.</p>
            </SpeechBubble>

            <div className="space-y-2 font-manga text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p>Developed a Siamese network with self-attention mechanisms for few-shot learning.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p>Incorporated transformer-inspired self-attention for dynamic feature weighting.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p>Utilized contrastive learning for discriminative representation learning.</p>
              </div>
            </div>
          </div>

          {/* Realistic Deep Learning for 3D Vision */}
          <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <h4 className="font-manga-title text-xl text-blue-800">
                Realistic Deep Learning for 3D Vision
              </h4>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-manga-title text-xs text-yellow-700">Accepted at ISPR</span>
              </div>
            </div>
            
            <SpeechBubble position="top-left" className="mb-4">
              <p className="font-manga text-sm italic">A 3D vision model, so machines could see depth — even if most humans still can't.</p>
            </SpeechBubble>

            <div className="space-y-2 font-manga text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p>Proposed a novel framework to regularize stereo matching using edge structures.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p>Developed a disparity aggregation module for edge regularization.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p>Integrated the regularization term with various stereo matching networks.</p>
              </div>
            </div>
          </div>

          {/* Night-to-Day Image Translation */}
          <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-500">
            <h4 className="font-manga-title text-xl text-yellow-800 mb-4">
              Night-to-Day Image Translation
            </h4>
            
            <SpeechBubble position="bottom-left" className="mb-4">
              <p className="font-manga text-sm italic">Night-to-day models — again, because the sun is fake and lighting is a lie.</p>
            </SpeechBubble>

            <div className="space-y-2 font-manga text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                <p>Developed a model for translating night-time images to day-time images, enhancing computer vision tasks in low-light conditions.</p>
              </div>
            </div>
          </div>

          {/* Sentiment Analysis and Employee Satisfaction */}
          <div className="bg-pink-100 p-6 rounded-lg border-2 border-pink-500">
            <h4 className="font-manga-title text-xl text-pink-800 mb-4">
              Sentiment Analysis and Employee Satisfaction Indexing using Computer Vision
            </h4>
            <div className="power-level mb-4 text-xs">Python, CNN</div>
            
            <SpeechBubble position="top-right" className="mb-4">
              <p className="font-manga text-sm italic">Measuring human emotions through pixels — slightly dystopian but useful.</p>
            </SpeechBubble>

            <div className="space-y-2 font-manga text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0" />
                <p>Developed a hybrid Convolutional Neural Network (CNN) architecture for effective analysis of visuals to detect employee satisfaction.</p>
              </div>
            </div>
          </div>

          {/* Event Organization using Smart Contract */}
          <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500">
            <h4 className="font-manga-title text-xl text-green-800 mb-4">
              Event Organization using Smart Contract
            </h4>
            <div className="power-level mb-4 text-xs">Remix IDE, Solidity</div>
            
            <SpeechBubble position="bottom-right" className="mb-4">
              <p className="font-manga text-sm italic">Blockchain for events — because trust issues are real and smart contracts don't lie.</p>
            </SpeechBubble>

            <div className="space-y-2 font-manga text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                <p>Developed a smart contract for event management with automated payment processing for secure cryptocurrency transactions.</p>
              </div>
            </div>
          </div>

          {/* Real-Time Pedestrian Detection and Social Distancing */}
          <div className="bg-red-100 p-6 rounded-lg border-2 border-red-500">
            <h4 className="font-manga-title text-xl text-red-800 mb-4">
              Real-Time Pedestrian Detection and Social Distancing
            </h4>
            <div className="power-level mb-4 text-xs">Python</div>
            
            <SpeechBubble position="top-left" className="mb-4">
              <p className="font-manga text-sm italic">Social distancing detector — pandemic programming at its finest, teaching machines about personal space.</p>
            </SpeechBubble>

            <div className="space-y-2 font-manga text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <p>Developed a tool using YOLOv3 to detect individuals in real-time video feeds, gauge their separation, and assess risk levels for social distancing.</p>
              </div>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* Project Philosophy */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Creation Philosophy
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SpeechBubble>
              <p className="font-manga">
                <strong>Why build?</strong> the void whispers.
              </p>
            </SpeechBubble>
            
            <SpeechBubble position="bottom-right" className="mt-4">
              <p className="font-manga italic">
                Because somewhere between training neural networks and debugging at 3 AM, 
                you realize that creation is the closest thing we have to magic.
              </p>
            </SpeechBubble>
          </div>

          <div>
            <SpeechBubble position="top-left">
              <p className="font-manga">
                Each project was a question thrown into the digital void:
              </p>
            </SpeechBubble>
            
            <div className="space-y-2 mt-4 font-manga text-sm">
              <p>• Can machines learn with less data?</p>
              <p>• Can we make the dark bright?</p>
              <p>• Can code measure happiness?</p>
              <p>• Can blockchain solve trust?</p>
              <p>• Can AI help during a pandemic?</p>
            </div>
          </div>
        </div>

        <SpeechBubble className="mt-8">
          <p className="font-manga-handwrite text-lg italic text-center">
            "Sometimes the projects worked. Sometimes they didn't. 
            But in the building, in the trying, in the failing and fixing — 
            there was something almost... human."
          </p>
        </SpeechBubble>

        <div className="text-center mt-6">
          <div className="power-level inline-block">
            <span className="font-manga-title">SIDE QUESTS: COMPLETED</span>
          </div>
          <div className="sound-effect text-sm mt-2">*Achievement Unlocked: Digital Creator*</div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default ProjectShowcase 