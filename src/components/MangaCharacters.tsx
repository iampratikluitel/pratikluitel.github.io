import React from 'react';

// Main Character - Pratik as a manga protagonist
export const MainCharacter: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`manga-character main-character ${className}`}>
      <div className="character-sprite bg-gradient-to-b from-blue-400 to-blue-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-manga-ink shadow-lg">
        <span className="text-white font-bold text-lg md:text-xl">P</span>
      </div>
      <div className="character-name text-center mt-2">
        <span className="font-manga-title text-sm text-manga-red">PRATIK</span>
        <div className="text-xs text-manga-ink">Level 99</div>
      </div>
    </div>
  );
};

// Sensei Character - Mentor figure
export const SenseiCharacter: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`manga-character sensei ${className}`}>
      <div className="character-sprite bg-gradient-to-b from-gray-600 to-gray-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-manga-ink shadow-lg">
        <span className="text-white font-bold text-lg md:text-xl">S</span>
      </div>
      <div className="character-name text-center mt-2">
        <span className="font-manga-title text-sm text-manga-ink">SENSEI</span>
        <div className="text-xs text-gray-600">Mentor</div>
      </div>
    </div>
  );
};

// Villain Character - Challenges and obstacles
export const VillainCharacter: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`manga-character villain ${className}`}>
      <div className="character-sprite bg-gradient-to-b from-red-600 to-red-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-manga-ink shadow-lg">
        <span className="text-white font-bold text-lg md:text-xl">B</span>
      </div>
      <div className="character-name text-center mt-2">
        <span className="font-manga-title text-sm text-manga-red">BUGS</span>
        <div className="text-xs text-red-600">Enemy</div>
      </div>
    </div>
  );
};

// Sidekick Character - Helper/companion
export const SidekickCharacter: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`manga-character sidekick ${className}`}>
      <div className="character-sprite bg-gradient-to-b from-green-400 to-green-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-manga-ink shadow-lg">
        <span className="text-white font-bold text-lg md:text-xl">AI</span>
      </div>
      <div className="character-name text-center mt-2">
        <span className="font-manga-title text-sm text-green-600">COPILOT</span>
        <div className="text-xs text-green-600">Companion</div>
      </div>
    </div>
  );
};

// Floating Character - For background decoration
export const FloatingCharacter: React.FC<{ 
  character: 'main' | 'sensei' | 'villain' | 'sidekick';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ character, position, className = "" }) => {
  const characterMap = {
    main: MainCharacter,
    sensei: SenseiCharacter,
    villain: VillainCharacter,
    sidekick: SidekickCharacter
  };
  
  const positionClassMap: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };
  
  const CharacterComponent = characterMap[character];
  
  return (
    <div className={`absolute ${positionClassMap[position]} opacity-20 hover:opacity-40 transition-opacity duration-300 ${className}`}>
      <CharacterComponent />
    </div>
  );
};

// Character Stats Display
export const CharacterStats: React.FC<{ 
  character: 'main' | 'sensei' | 'villain' | 'sidekick';
  stats: Record<string, number>;
  className?: string;
}> = ({ character, stats, className = "" }) => {
  const characterNames = {
    main: 'PRATIK',
    sensei: 'SENSEI',
    villain: 'BUGS',
    sidekick: 'COPILOT'
  };

  return (
    <div className={`character-stats bg-white/90 backdrop-blur-sm p-4 rounded-lg border-2 border-manga-ink shadow-lg ${className}`}>
      <h4 className="font-manga-title text-lg text-manga-red mb-3">{characterNames[character]} STATS</h4>
      <div className="space-y-2">
        {Object.entries(stats).map(([stat, value]) => (
          <div key={stat} className="flex justify-between items-center">
            <span className="font-manga text-sm text-manga-ink">{stat.toUpperCase()}</span>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-manga-red h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(value, 100)}%` }}
                ></div>
              </div>
              <span className="font-manga-title text-xs text-manga-red">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Character Battle Scene
export const CharacterBattle: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`character-battle flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border-2 border-manga-ink ${className}`}>
      <div className="flex items-center gap-4">
        <MainCharacter />
        <div className="text-2xl font-manga-title text-manga-red">VS</div>
        <VillainCharacter />
      </div>
      <div className="text-center">
        <div className="sound-effect text-sm text-manga-ink mb-2">*BATTLE INTENSIFIES*</div>
        <div className="font-manga-title text-xs text-manga-red">FIGHT!</div>
      </div>
    </div>
  );
};

// Character Team Formation
export const CharacterTeam: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`character-team grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 rounded-lg border-2 border-manga-ink ${className}`}>
      <div className="text-center">
        <MainCharacter />
        <div className="text-xs text-manga-ink mt-1">Leader</div>
      </div>
      <div className="text-center">
        <SenseiCharacter />
        <div className="text-xs text-manga-ink mt-1">Mentor</div>
      </div>
      <div className="text-center">
        <SidekickCharacter />
        <div className="text-xs text-manga-ink mt-1">Support</div>
      </div>
      <div className="text-center">
        <VillainCharacter />
        <div className="text-xs text-manga-ink mt-1">Rival</div>
      </div>
    </div>
  );
};

export default {
  MainCharacter,
  SenseiCharacter,
  VillainCharacter,
  SidekickCharacter,
  FloatingCharacter,
  CharacterStats,
  CharacterBattle,
  CharacterTeam
}; 