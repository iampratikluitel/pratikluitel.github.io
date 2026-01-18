import MangaPanel from "@/components/MangaPanel";
import SpeechBubble from "@/components/SpeechBubble";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Rocket,
  Globe,
  Lightbulb,
} from "lucide-react";

const BonnChapter = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          II.5. THE GERMAN EXPEDITION: ROBOTICS.EXE
        </h2>

        <div className="text-center mb-6">
          <div className="sound-effect text-3xl text-manga-red mb-4">
            NEW HORIZON UNLOCKED!
          </div>
          <SpeechBubble>
            <p className="text-lg font-manga">
              After conquering the Indian simulation, a new quest appeared:{" "}
              <strong>Master of Science in Mobile Robotics</strong> at the{" "}
              <strong>University of Bonn</strong>, Germany.
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* The Journey Begins */}
      <MangaPanel className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-manga-red/10 p-6 rounded-lg border-2 border-manga-red mb-6">
              <h4 className="font-manga-title text-xl text-manga-red mb-3 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                University of Bonn
              </h4>
              <div className="space-y-3 font-manga">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    <strong>Duration:</strong> 2025 - Present
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>
                    <strong>Degree:</strong> Master of Science Mobile Robotics
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    <strong>Location:</strong> Bonn, Germany
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>
                    <strong>Focus:</strong> Robotics, AI, Computer Vision
                  </span>
                </div>
              </div>
            </div>

            <SpeechBubble position="bottom-left">
              <p className="font-manga italic text-sm">
                From the sweltering heat of VIT to the crisp efficiency of Bonn—
                where precision engineering meets cutting-edge AI in the realm of
                mobile robotics.
              </p>
            </SpeechBubble>
          </div>

          <div className="space-y-4">
            <h3 className="font-manga-title text-2xl text-manga-ink mb-4">
              The German Awakening
            </h3>

            <SpeechBubble>
              <p className="font-manga text-sm">
                <strong>Cultural Shift:</strong> Where "efficiency" isn't just a
                buzzword but a way of life, and punctuality is measured in
                milliseconds.
              </p>
            </SpeechBubble>

            <SpeechBubble position="top-right">
              <p className="font-manga text-sm">
                <strong>Academic Evolution:</strong> From theory to practice, from
                simulations to real robots that might one day question their own
                existence.
              </p>
            </SpeechBubble>

            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <h4 className="font-manga-title text-sm text-blue-800">
                  Why Mobile Robotics?
                </h4>
              </div>
              <p className="font-manga text-sm text-blue-700">
                Because the future belongs to machines that can move, think, and
                occasionally question why they're moving and thinking.
              </p>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* The Robotics Journey */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-red">
          THE ROBOTICS ODYSSEY BEGINS
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <Rocket className="w-12 h-12 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-lg">Mobile Systems</h4>
            <SpeechBubble className="text-sm">
              <p className="font-manga">
                Teaching machines to navigate the physical world—because virtual
                reality is just a warm-up.
              </p>
            </SpeechBubble>
          </div>

          <div className="text-center space-y-3">
            <Lightbulb className="w-12 h-12 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-lg">AI & Perception</h4>
            <SpeechBubble position="top-left" className="text-sm">
              <p className="font-manga">
                Computer vision, sensor fusion, and the art of making machines see
                what humans can't.
              </p>
            </SpeechBubble>
          </div>

          <div className="text-center space-y-3">
            <Globe className="w-12 h-12 text-manga-red mx-auto" />
            <h4 className="font-manga-title text-lg">International Research</h4>
            <SpeechBubble position="bottom-right" className="text-sm">
              <p className="font-manga">
                Collaborating across continents, languages, and time zones—because
                innovation knows no borders.
              </p>
            </SpeechBubble>
          </div>
        </div>
      </MangaPanel>

      {/* Current Status */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Journey Continues...
        </h3>

        <SpeechBubble position="bottom-center" className="mb-6">
          <p className="font-manga-handwrite text-lg italic text-center">
            "In Bonn, inside a sentence that forgot why it started, Pratik does a thing—then another thing—while several unrelated nouns watch quietly from a distance."
          </p>
        </SpeechBubble>

        <div className="text-center mt-8">
          <div className="power-level inline-block">
            <span className="font-manga-title">
              STATUS: ROBOTICS MASTERY IN PROGRESS...
            </span>
          </div>
          <div className="sound-effect text-sm mt-2">
            *Achievement Unlocked: German Precision Mode*
          </div>
        </div>
      </MangaPanel>
    </div>
  );
};

export default BonnChapter;
