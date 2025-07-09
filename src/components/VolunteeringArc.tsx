import MangaPanel from "@/components/MangaPanel";
import SpeechBubble from "@/components/SpeechBubble";
import { Users, BookOpen, Coffee, Heart, Lightbulb, Globe } from "lucide-react";

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
                <p>
                  📧 <strong>Email:</strong> pratikluitel11@gmail.com
                </p>
                <p>
                  📱 <strong>Phone:</strong> +977 9840761001
                </p>
                <p>
                  💼 <strong>LinkedIn:</strong> /in/pratikluitel
                </p>
                <p>
                  💻 <strong>GitHub:</strong> @pratikluitel
                </p>
              </div>
            </div>

            <div className="bg-manga-ink/5 p-6 rounded-lg border-2 border-manga-ink">
              <h4 className="font-manga-title text-lg text-manga-ink mb-4">
                Casual Mode
              </h4>
              <div className="space-y-2 font-manga text-sm">
                <p>☕ Always up for useless discussions</p>
                <p>🤖 AI/ML enthusiast & researcher</p>
                <p>📚 Manga & anime aficionado</p>
                <p>🎮 Gaming companion (when time permits)</p>
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
