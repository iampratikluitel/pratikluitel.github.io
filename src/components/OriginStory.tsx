import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { MapPin, Phone, Mail, User } from 'lucide-react'

const OriginStory = () => {
  return (
    <div className="space-y-8">
      {/* Opening narration */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          I. CHILDHOOD, OR: THE TUTORIAL PHASE
        </h2>
        
        <SpeechBubble className="mb-6">
          <p className="text-lg font-manga leading-relaxed">
            Once upon a time in <strong>Okhaldhunga</strong> — which, for all we know, may be a figment of some forgotten god's fever dream — a boy was born.
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SpeechBubble position="bottom-right" className="mb-4">
              <p className="font-manga">
                He did not come out clutching a purpose. He was not serenaded by angels or algorithms. No comet tore through the sky to mark his arrival.
              </p>
            </SpeechBubble>
            
            <SpeechBubble position="top-left" className="mb-4">
              <p className="font-manga italic">
                Just a crying creature with thumbs, dropped onto a blue speck twirling around a dying star, in a universe governed by physics, lunacy, and the occasional goat.
              </p>
            </SpeechBubble>

            <div className="power-level inline-block mb-4">
              <span className="font-manga-title">THIS IS PRATIK</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-manga-title text-2xl text-manga-ink flex items-center gap-2">
              <User className="w-6 h-6" />
              Current Coordinates
            </h3>
            
            <div className="bg-manga-ink/5 p-4 rounded-lg border-2 border-manga-ink">
              <div className="space-y-3 font-manga">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-manga-red" />
                  <span><strong>Location:</strong> Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-manga-red" />
                  <span><strong>Phone:</strong> +977 9840761001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-manga-red" />
                  <span><strong>Email:</strong> pratikluitel11@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* The Questioning Begins */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-dramatic text-3xl md:text-4xl mb-6 text-center text-manga-ink">
          The Great Questioning
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <SpeechBubble>
              <p className="font-manga text-center">
                <strong>"Why are we here?"</strong><br/>
                <span className="text-sm italic">He asked the universe. The universe did not respond.</span>
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <SpeechBubble position="top-left">
              <p className="font-manga text-center">
                <strong>"What is the meaning of life?"</strong><br/>
                <span className="text-sm italic">Still waiting for an answer. Probably involves code.</span>
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <SpeechBubble position="bottom-right">
              <p className="font-manga text-center">
                <strong>"Why do Nepali uncles yell on the phone?"</strong><br/>
                <span className="text-sm italic">Some mysteries are not meant to be solved.</span>
              </p>
            </SpeechBubble>
          </div>
        </div>
      </MangaPanel>

      {/* The Origin Conclusion */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-title text-2xl md:text-3xl mb-6 text-center text-manga-red">
          The Beginning of Everything
        </h3>
        
        <SpeechBubble className="mb-4">
          <p className="font-manga-handwrite text-lg italic text-center">
            "No one had answers. So he began inventing his own."
          </p>
        </SpeechBubble>

        <div className="text-center">
          <div className="inline-block bg-white p-4 rounded-lg border-2 border-manga-ink shadow-lg">
            <p className="font-manga-title text-manga-red">
              Status: Tutorial Complete
            </p>
            <div className="sound-effect text-sm mt-2">*Achievement Unlocked: Existential Dread*</div>
          </div>
        </div>
      </MangaPanel>
    </div>
  )
}

export default OriginStory 