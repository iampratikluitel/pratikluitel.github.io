import MangaPanel from "@/components/MangaPanel";
import SpeechBubble from "@/components/SpeechBubble";
import { MapPin, Phone, Mail, User } from "lucide-react";

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
            Once upon a time in <strong>Okhaldhunga</strong> which, for all we
            know, may be a figment of some forgotten god's fever dream, a boy
            was born.
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SpeechBubble position="bottom-right" className="mb-4">
              <p className="font-manga">
                He did not come out clutching a purpose. He was not serenaded by
                angels or algorithms. No comet tore through the sky to mark his
                arrival.
              </p>
            </SpeechBubble>

            <SpeechBubble position="top-left" className="mb-4">
              <p className="font-manga italic">
                Just a crying creature with thumbs, dropped onto a blue speck
                twirling around a dying star, in a universe governed by physics,
                lunacy, and the occasional goat.
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
                  <a href="https://maps.google.com/?q=Kathmandu, Nepal" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    <strong>Location:</strong> Kathmandu, Nepal
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-manga-red" />
                  <a href="tel:+9779840761001" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    <strong>Phone:</strong> +977 9840761001
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-manga-red" />
                  <a href="mailto:pratikluitel11@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    <strong>Email:</strong> pratikluitel11@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm0 0"/></svg>
                  <a href="https://www.linkedin.com/in/pratik-luitel/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    <strong>LinkedIn:</strong> @pratik-luitel
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.276.059-2.687.334-3.678 1.325-.991.991-1.266 2.402-1.325 3.678-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.276.334 2.687 1.325 3.678.991.991 2.402 1.266 3.678 1.325 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.276-.059 2.687-.334 3.678-1.325.991-.991 1.266-2.402 1.325-3.678.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.266-3.678-1.325-1.28-.059-1.688-.071-4.947-.071zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  <a href="https://www.instagram.com/prateekluitel/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    <strong>Instagram:</strong> @prateekluitel
                  </a>
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
                <strong>"Why are we here?"</strong>
                <br />
                <span className="text-sm italic">
                  He asked the universe. The universe did not respond.
                </span>
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <SpeechBubble position="top-left">
              <p className="font-manga text-center">
                <strong>"What is the meaning of life?"</strong>
                <br />
                <span className="text-sm italic">
                  Still waiting for an answer. Probably involves code.
                </span>
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <SpeechBubble position="bottom-right">
              <p className="font-manga text-center">
                <strong>"Why do Nepali uncles yell on the phone?"</strong>
                <br />
                <span className="text-sm italic">
                  Some mysteries are not meant to be solved.
                </span>
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

        <SpeechBubble position="bottom-center" className="mb-4">
          <p className="font-manga-handwrite text-lg italic text-center">
            "No one had answers. So he began inventing his own."
          </p>
        </SpeechBubble>

        <div className="text-center">
          <div className="inline-block bg-white p-4 rounded-lg border-2 border-manga-ink shadow-lg">
            <p className="font-manga-title text-manga-red">
              Status: Tutorial Complete
            </p>
            <div className="sound-effect text-sm mt-2">
              *Achievement Unlocked: Existential Dread*
            </div>
          </div>
        </div>
      </MangaPanel>
    </div>
  );
};

export default OriginStory;
