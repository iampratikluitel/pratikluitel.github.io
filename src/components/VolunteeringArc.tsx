import MangaPanel from "@/components/MangaPanel";
import SpeechBubble from "@/components/SpeechBubble";
import { Users, BookOpen, Coffee, Heart, Lightbulb, Globe, Mail, Phone, BrainCircuit, Gamepad2 } from "lucide-react";

const VolunteeringArc = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          CHAPTER VI: MANGA & MADNESS
        </h2>

        <div className="text-center mb-6">
          <div className="sound-effect text-3xl text-manga-red mb-4">
            TO BE CONTINUED...
          </div>
          <SpeechBubble>
            <p className="text-lg font-manga">
              In which our protagonist realizes that the{" "}
              <strong>real treasure</strong> was the community he built along
              the way (and also the manga collection he definitely didn't spend
              too much money on).
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* Community Involvement */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-3xl text-center mb-8 text-manga-ink flex items-center justify-center gap-3">
          <Users className="w-8 h-8 text-manga-red" />
          Community Roots
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kalpabriksha Nepal Card */}
          <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-green-600" />
              <h4 className="font-manga-title text-lg text-green-800">
                Executive Member
              </h4>
            </div>
            <h5 className="font-manga text-md text-green-700 mb-2">
              Kalpabriksha Nepal, Kathmandu
            </h5>
            <ul className="list-none space-y-2 font-manga text-sm">
              <li>
                🌱 Organized school campaigns to raise awareness of social
                issues.
              </li>
              <li>
                🎬 Developed educational multimedia presentations and workshops.
              </li>
              <li>📱 Managed social media to promote youth initiatives.</li>
            </ul>
            <div className="power-level mt-4 text-xs bg-green-600 text-white px-2 py-1 inline-block">
              COMMUNITY DRUID
            </div>
          </div>

          {/* Nerdy Interests Card */}
        </div>
      </MangaPanel>
      <div className="space-y-6">
        {/* Interests Section */}
        <h4 className="font-manga-title text-lg text-manga-red mb-2">
          Scrolls of Obsessions
        </h4>
        <SpeechBubble>
          <p className="font-manga text-sm">
            • Devours dark manga like <em>Monster</em>, <em>Berserk</em>, and{" "}
            <em>Vagabond</em>because regular narratives aren’t existential
            enough.
            <br />• Cries “<em>Visca&nbsp;Barça!</em>” at unholy decibels every
            time <strong>FC Barcelona</strong> scores.
            <br />• Maintains the heretical belief that{" "}
            <strong>Lionel Messi</strong> is football’s answer to haiku.
          </p>
        </SpeechBubble>
      </div>
      {/* Current Status */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-red">
          CURRENT STATUS: STILL LOADING...
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <Coffee className="w-16 h-16 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-xl">Daily Quests</h4>
            <SpeechBubble className="text-sm">
              <p className="font-manga">
                - do things
                <br />
                - Master new technologies
                <br />
                - Consume optimal amount of something
                <br />- Debug life.exe
              </p>
            </SpeechBubble>
          </div>

          <div className="text-center space-y-4">
            <Globe className="w-16 h-16 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-xl">Future Missions</h4>
            <SpeechBubble className="text-sm">
              <p className="font-manga">
                - Get into college
                <br />
                - Build world-changing apps
                <br />
                - Maybe learn to cook
                <br />- Save the digital world
              </p>
            </SpeechBubble>
          </div>

          <div className="text-center space-y-4">
            <Heart className="w-16 h-16 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-xl">Life Goals</h4>
            <SpeechBubble className="text-sm">
              <p className="font-manga">
                - Make technology accessible
                <br />
                - Mentor the next generation
                <br />
                - Complete manga collection
                <br />- Achieve work-life balance
              </p>
            </SpeechBubble>
          </div>
        </div>
      </MangaPanel>

      {/* Contact & Connect */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          Connect with the Protagonist
        </h3>

        <div className="text-center space-y-6">
          <SpeechBubble>
            <p className="font-manga text-lg">
              Ready to embark on the next chapter of this epic journey? Whether
              you want to collaborate on projects, discuss the latest in AI, or
              debate which anime has the best plot twists, let's connect!
            </p>
          </SpeechBubble>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-manga-red/10 p-6 rounded-lg border-2 border-manga-red">
              <h4 className="font-manga-title text-lg text-manga-red mb-4">
                Professional Mode
              </h4>
              <div className="space-y-2 font-manga text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-manga-red" />
                  <strong>Email:</strong> <a href="mailto:pratikluitel11@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer">pratikluitel11@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-manga-red" />
                  <strong>Phone:</strong> <a href="tel:+9779840761001" className="hover:underline" target="_blank" rel="noopener noreferrer">+977 9840761001</a>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm0 0"/></svg>
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pratik-luitel/" className="hover:underline" target="_blank" rel="noopener noreferrer">@pratik-luitel</a>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1C388.7 9.9 357.3 1.7 322 0 285.7-1.7 256.3 0 224 0s-61.7-1.7-98 0C90.7 1.7 59.3 9.9 33.9 36.2 9.9 59.3 1.7 90.7 0 126c-1.7 36.3 0 65.7 0 98s-1.7 61.7 0 98c1.7 35.3 9.9 66.7 36.2 92.1 23.1 23.1 54.5 31.3 89.8 33 36.3 1.7 65.7 0 98 0s61.7 1.7 98 0c35.3-1.7 66.7-9.9 92.1-36.2 23.1-23.1 31.3-54.5 33-89.8 1.7-36.3 0-65.7 0-98s1.7-61.7 0-98zm-48.1 218.2c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.9 9s-103.5 2.7-132.9-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.9s-2.7-103.5 9-132.9c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.9-9s103.5-2.7 132.9 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.9s2.7 103.5-9 132.9z"/></svg>
                  <strong>Instagram:</strong> <a href="https://www.instagram.com/prateekluitel/" className="hover:underline" target="_blank" rel="noopener noreferrer">@prateekluitel</a>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-manga-red" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
                  <strong>GitHub:</strong> <a href="https://github.com/pratikluitel" className="hover:underline" target="_blank" rel="noopener noreferrer">@pratikluitel</a>
                </p>
              </div>
            </div>

            <div className="bg-manga-ink/5 p-6 rounded-lg border-2 border-manga-ink">
              <h4 className="font-manga-title text-lg text-manga-ink mb-4">
                Casual Mode
              </h4>
              <div className="space-y-2 font-manga text-sm">
      <p className="flex items-center gap-2">
        <Coffee size={16} /> Always up for useless discussions
      </p>
      <p className="flex items-center gap-2">
        <BrainCircuit size={16} /> AI/ML enthusiast & researcher
      </p>
      <p className="flex items-center gap-2">
        <BookOpen size={16} /> Manga & anime aficionado
      </p>
      <p className="flex items-center gap-2">
        <Gamepad2 size={16} /> Gaming companion (when time permits)
      </p>
    </div>
            </div>
          </div>

          <div className="power-level text-center mb-6">
            <span className="font-manga-title text-lg">
              STATUS: AVAILABLE FOR EPIC COLLABORATIONS
            </span>
          </div>
          

          

        </div>
      </MangaPanel>

      {/* The End... Or Is It? */}
      <MangaPanel variant="dramatic" className="p-8 text-center">
        <h3 className="font-manga-dramatic text-4xl mb-6 text-manga-red">
          TO BE CONTINUED...
        </h3>

        <SpeechBubble position="bottom-center" className="mb-6">
          <p className="font-manga-handwrite text-lg italic">
            "It’s not the end, we’re just the shadow of a cloud passing over the
            void, and the universe is still busy turning its existential
            children into a black hole."
          </p>
        </SpeechBubble>

        <div className="space-y-4">
          <div className="sound-effect text-3xl text-manga-red">
            NEXT CHAPTER LOADING...
          </div>
          <div className="animate-pulse">
            <span className="text-6xl">●●●</span>
          </div>
          <p className="font-manga text-sm text-gray-600">
            Stay tuned for more adventures in the world of technology,
            innovation, and the occasional existential crisis about semicolons.
          </p>
        </div>
      </MangaPanel>
    </div>
  );
};

export default VolunteeringArc;
