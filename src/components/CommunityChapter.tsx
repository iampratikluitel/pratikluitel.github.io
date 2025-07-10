import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Heart, Users, Presentation, Calendar, MapPin, ExternalLink, TreePine, Blocks, Phone, Mail } from 'lucide-react'

const CommunityChapter = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          VI. PRESENT STATE: STILL LOADING...
        </h2>
        
        <div className="text-center mb-6">
          <SpeechBubble>
            <p className="text-lg font-manga">
              Today, Pratik Luitel exists. <em>Probably.</em>
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* The Existential Introduction */}
      <MangaPanel className="p-8">
        <SpeechBubble className="mb-6">
          <p className="font-manga text-center">
            He may be a hallucination in a neural net.<br/>
            He may be an NPC with main-character delusions.<br/>
            He may be real — flesh, bone, and syntax errors.
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-6">
          <SpeechBubble position="bottom-right">
            <p className="font-manga italic">
              He dreams of fixing Kathmandu, of using AI to understand biodiversity, 
              of building systems that don't just "optimize," but matter.
            </p>
          </SpeechBubble>

          <SpeechBubble position="top-left">
            <p className="font-manga italic">
              He knows it's absurd. He knows the void is vast.<br/>
              But sometimes, when the right function compiles, or a neural network converges — 
              it feels almost... <strong>human</strong>.
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* Community Work */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-title text-3xl text-manga-ink mb-8 flex items-center justify-center gap-3">
          <Heart className="w-8 h-8 text-manga-red" />
          Community Quests
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kalpabriksha Nepal */}
          <div className="space-y-4">
            <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="w-6 h-6 text-green-600" />
                <h4 className="font-manga-title text-xl text-green-800">
                  Executive Member
                </h4>
              </div>
              
              <h5 className="font-manga text-lg text-green-700 mb-3">
                Kalpabriksha Nepal
              </h5>
              
              <div className="space-y-2 font-manga text-sm mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>June 2021 - Present</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="font-manga text-xs">
                    Organized school campaigns to raise awareness of social issues
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="font-manga text-xs">
                    Developed educational multimedia presentations and workshops
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="font-manga text-xs">
                    Managed social media to promote youth initiatives
                  </p>
                </div>
              </div>
            </div>

            <SpeechBubble position="bottom-right">
              <p className="font-manga text-xs italic">
                He helped run Kalpabriksha, planting ideas (and sometimes actual trees) across Kathmandu.
              </p>
            </SpeechBubble>
          </div>

          {/* Blockchain Community Nepal */}
          <div className="space-y-4">
            <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Blocks className="w-6 h-6 text-blue-600" />
                <h4 className="font-manga-title text-xl text-blue-800">
                  Volunteer
                </h4>
              </div>
              
              <h5 className="font-manga text-lg text-blue-700 mb-3">
                Blockchain Community Nepal
              </h5>
              
              <div className="space-y-2 font-manga text-sm mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>June 2023 - Jul 2023</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="font-manga text-xs">
                    Organized blockchain technology sessions in colleges
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="font-manga text-xs">
                    Hosted industry expert meetups and seminars
                  </p>
                </div>
              </div>
            </div>

            <SpeechBubble position="top-left">
              <p className="font-manga text-xs italic">
                He volunteered with Blockchain Nepal, because clearly decentralization would save us all.
              </p>
            </SpeechBubble>
          </div>
        </div>
      </MangaPanel>

      {/* Current Status */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          Current Status Report
        </h3>
        
        <div className="space-y-6">
          <SpeechBubble>
            <p className="font-manga text-center">
              Sometimes, he taught kids. Other times, he tried to teach society.<br/>
              Most times, he just taught himself to keep going.
            </p>
          </SpeechBubble>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-manga-ink/5 p-6 rounded-lg border-2 border-manga-ink">
              <h4 className="font-manga-title text-lg text-manga-red mb-4">Contact Protocols</h4>
              <div className="space-y-3 font-manga text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-manga-red" />
                  <a href="mailto:pratikluitel11@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer"><strong>Email:</strong> pratikluitel11@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-manga-red" />
                  <a href="tel:+9779840761001" className="hover:underline" target="_blank" rel="noopener noreferrer"><strong>Phone:</strong> +977 9840761001</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-manga-red" />
                  <a href="https://maps.google.com/?q=Kathmandu, Nepal" className="hover:underline" target="_blank" rel="noopener noreferrer"><strong>Location:</strong> Kathmandu, Nepal</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm0 0"/></svg>
                  <a href="https://www.linkedin.com/in/pratik-luitel/" className="hover:underline" target="_blank" rel="noopener noreferrer"><strong>LinkedIn:</strong> @pratik-luitel</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1C388.7 9.9 357.3 1.7 322 0 285.7-1.7 256.3 0 224 0s-61.7-1.7-98 0C90.7 1.7 59.3 9.9 33.9 36.2 9.9 59.3 1.7 90.7 0 126c-1.7 36.3 0 65.7 0 98s-1.7 61.7 0 98c1.7 35.3 9.9 66.7 36.2 92.1 23.1 23.1 54.5 31.3 89.8 33 36.3 1.7 65.7 0 98 0s61.7 1.7 98 0c35.3-1.7 66.7-9.9 92.1-36.2 23.1-23.1 31.3-54.5 33-89.8 1.7-36.3 0-65.7 0-98s1.7-61.7 0-98zm-48.1 218.2c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.9 9s-103.5 2.7-132.9-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.9s-2.7-103.5 9-132.9c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.9-9s103.5-2.7 132.9 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.9s2.7 103.5-9 132.9z"/></svg>
                  <a href="https://www.instagram.com/prateekluitel/" className="hover:underline" target="_blank" rel="noopener noreferrer"><strong>Instagram:</strong> @prateekluitel</a>
                </div>
              </div>
            </div>

            <div className="bg-manga-red/10 p-6 rounded-lg border-2 border-manga-red">
              <h4 className="font-manga-title text-lg text-manga-red mb-4">Current Objectives</h4>
              <div className="space-y-2 font-manga text-sm">
                <p>• Building systems that matter</p>
                <p>• Teaching machines to understand humans</p>
                <p>• Understanding humans through machines</p>
                <p>• Questioning the nature of digital reality</p>
                <p>• Surviving the simulation</p>
              </div>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* Final Panel */}
      <MangaPanel variant="dramatic" className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-red">
          FINAL PANEL
        </h3>
        
        <SpeechBubble className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            A man stands at the edge of code and chaos.<br/>
            A keyboard in one hand. A question in the other.
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <SpeechBubble position="bottom-right">
              <p className="font-manga text-center">
                <strong>"Why bother?"</strong> the void whispers.
              </p>
            </SpeechBubble>
          </div>

          <div className="text-center">
            <SpeechBubble position="top-left">
              <p className="font-manga-title text-xl text-manga-red">
                He smiles.
              </p>
            </SpeechBubble>
            
            <div className="mt-6">
              <h4 className="manga-title text-4xl text-manga-ink">
                "Because I can."
              </h4>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="power-level inline-block">
            <span className="font-manga-title">STATUS: EXISTENCE CONFIRMED</span>
          </div>
          <div className="sound-effect text-sm mt-2">*To Be Continued...*</div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg border-2 border-manga-ink shadow-lg">
              <p className="font-manga-title text-sm text-manga-red mb-1">Ready for Collaboration</p>
              <p className="font-manga text-xs">pratikluitel11@gmail.com</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-manga-ink shadow-lg">
              <p className="font-manga-title text-sm text-manga-red mb-1">Currently Loading</p>
              <p className="font-manga text-xs">Next chapter in progress...</p>
            </div>
          </div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default CommunityChapter 