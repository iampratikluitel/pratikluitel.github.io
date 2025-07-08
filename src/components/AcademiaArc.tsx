import MangaPanel from "@/components/MangaPanel";
import SpeechBubble from "@/components/SpeechBubble";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Trophy,
  Book,
} from "lucide-react";

const AcademiaArc = () => {
  return (
    <div className="space-y-8">
      {/* Chapter Title */}
      <MangaPanel variant="dramatic" className="p-8">
        <h2 className="manga-title text-4xl md:text-6xl mb-6 text-manga-red text-center">
          II. THE CALL TO ADVENTURE: SCHOLARSHIP.EXE
        </h2>

        <div className="text-center mb-6">
          <SpeechBubble>
            <p className="text-lg font-manga">
              One day, a letter came. From the <strong>Embassy of India</strong>
              , no less.
            </p>
          </SpeechBubble>
        </div>
      </MangaPanel>

      {/* The Letter */}
      <MangaPanel className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SpeechBubble className="mb-6 bg-yellow-50 border-yellow-500">
              <p className="font-manga text-center italic">
                <strong>
                  "Congratulations, you've won a full ride to study computer
                  science!"
                </strong>
              </p>
              <p className="font-manga text-sm text-center mt-3">
                Which is bureaucrat-speak for:{" "}
                <em>"Come suffer in a different country, nerd."</em>
              </p>
            </SpeechBubble>

            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-6 h-6 text-green-600" />
                  <h4 className="font-manga-title text-lg text-green-800">
                    Full Ride Scholarship
                  </h4>
                </div>
                <p className="font-manga text-sm text-green-700">
                  Embassy of India - B.Tech Computer Science and Engineering
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h4 className="font-manga-title text-lg text-blue-800">
                    Merit Scholarship 2021
                  </h4>
                </div>
                <p className="font-manga text-sm text-blue-700">
                  Vellore Institute of Technology
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-manga-title text-3xl text-manga-ink mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-manga-red" />
              The Academia Stats
            </h3>

            <div className="space-y-4">
              <div className="bg-manga-red/10 p-4 rounded-lg border-2 border-manga-red">
                <h4 className="font-manga-title text-xl text-manga-red mb-3">
                  Vellore Institute of Technology
                </h4>
                <div className="space-y-2 font-manga">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      <strong>Duration:</strong> 2020 - 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>
                      <strong>Degree:</strong> Bachelor of Computer Science and
                      Engineering
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>
                      <strong>CGPA:</strong> 8.9/10
                    </span>
                  </div>
                </div>
              </div>

              <SpeechBubble position="bottom-left">
                <p className="font-manga italic text-sm">
                  And so he did. At VIT, India, a place where the temperature is
                  software-meltingly hot and the curriculum includes both deep
                  learning and deep despair.
                </p>
              </SpeechBubble>
            </div>
          </div>
        </div>
      </MangaPanel>

      {/* Coursework - The Knowledge Acquisition */}
      <MangaPanel variant="action" className="p-8">
        <h3 className="font-manga-dramatic text-3xl text-center mb-8 text-manga-red">
          THE KNOWLEDGE ACQUISITION PROTOCOL
        </h3>

        <SpeechBubble className="mb-6">
          <p className="font-manga text-center">
            <strong>Relevant Coursework:</strong> Or, "How to Question Reality
            Through Mathematics"
          </p>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Artificial Intelligence",
            "Image Processing",
            "Blockchain Technology",
            "Data Visualization",
            "Software Engineering",
            "Information Security",
            "Internet of Things",
            "Cyber Security",
          ].map((course, index) => (
            <div
              key={course}
              className="bg-manga-ink/5 p-3 rounded-lg border border-manga-ink"
            >
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4 text-manga-red" />
                <span className="font-manga text-sm">{course}</span>
              </div>
            </div>
          ))}
        </div>
      </MangaPanel>

      {/* The Realization */}
      <MangaPanel className="p-8">
        <h3 className="font-manga-title text-2xl text-center mb-6 text-manga-ink">
          The Academic Awakening
        </h3>

        <div className="space-y-6">
          <SpeechBubble>
            <p className="font-manga text-center">
              At VIT, Pratik learned many things that weren't in the syllabus:
            </p>
          </SpeechBubble>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <SpeechBubble position="bottom-right">
                <p className="font-manga text-sm">
                  How to train neural networks without crying <em>(much)</em>.
                </p>
              </SpeechBubble>

              <SpeechBubble position="top-left">
                <p className="font-manga text-sm">
                  How to explain recursion to classmates using only coffee cups
                  and existential dread.
                </p>
              </SpeechBubble>
            </div>

            <div className="space-y-3">
              <SpeechBubble position="bottom-left">
                <p className="font-manga text-sm">
                  How to debug code at 3AM while questioning if free will
                  exists.
                </p>
              </SpeechBubble>

              <SpeechBubble position="top-right">
                <p className="font-manga text-sm">
                  That CGPA 8.9/10 is not just a number, but a testament to
                  surviving the simulation.
                </p>
              </SpeechBubble>
            </div>
          </div>

          <div className="text-center">
            <div className="power-level inline-block">
              <span className="font-manga-title">
                ACADEMIC PROTOCOL: COMPLETE
              </span>
            </div>
          </div>
        </div>
      </MangaPanel>
    </div>
  );
};

export default AcademiaArc;
