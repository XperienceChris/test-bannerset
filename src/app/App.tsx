import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const episodes = [
  {
    id: 1,
    thumb: 'https://mtsprout.nl/wp-content/uploads/2023/08/chatgpt-verbieden.jpg',
    title: 'Je marketingteam kan veel\nmeer dan alleen ChatGPT',
    description: 'We kijken door de verkeerde bril naar AI. En dat is precies het probleem van veel teams.',
    segment: '0:00 – 1:20',
    duration: '1 min 20 sec',
    accent: '#00f0ff'
  },
  {
    id: 2,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/NLlooptachter.png',
    title: 'Nederland loopt achter.\nJouw marketingteam ook?',
    description: 'CBS-onderzoek toont aan: de kloof met de VS groeit. AI verandert jouw marketingteam. Hoe hou jij het stuur?',
    segment: '1:20 – 2:04',
    duration: '44 sec',
    accent: '#ff0080'
  },
  {
    id: 3,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/Christiaan.png',
    title: 'Over mij. Waarom doe ik dit',
    description: 'Ik ben geen bureau, businesscoach of influencer. Wel iemand die zo\'n 50 bedrijven met een marketingteam van binnen zag en hen hielp professionaliseren.',
    segment: '2:37 – 3:12',
    duration: '35 sec',
    accent: '#7c3aed'
  },
  {
    id: 4,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/snelheidiskey.png',
    title: 'Marketingteams die nu achterblijven, komen straks niet meer bij',
    description: 'Teams die AI gebruiken, groeien 27% sneller. De rest raakt achterop. Hoe loop je die achterstand nog in?',
    segment: '3:12 – 3:37',
    duration: '25 sec',
    accent: '#10b981'
  },
  {
    id: 5,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/klaarvoordeorkaan.png',
    title: '77% van de marketingteams staat stil. Terwijl de AI orkaan op ons afkomt',
    description: '3 op de 4 ondernemers is niet voorbereid. Dat is niet best. Maar een enorme kans voor jou als jij wél klaarstaat.',
    segment: '3:37 – 4:23',
    duration: '46 sec',
    accent: '#f59e0b'
  },
  {
    id: 6,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/topgunrealiteit.png',
    title: 'Jouw marketingleiderschap is geen \'TopGun realiteit\'',
    description: 'Veel ondernemers denken: \'ik fix dit wel\' Maar dit is geen film die goed afloopt voor twijfelaars.',
    segment: '4:25 – 5:11',
    duration: '46 sec',
    accent: '#ef4444'
  },
  {
    id: 7,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/huidigemodeldood.png',
    title: 'Je huidige marketingmodel is dood',
    description: 'Werken met marketingbureaus? Dat is straks heel anders. Of het verdwijnt helemaal. Stap jij op die sneltrein? Of raast ie straks voorbij?',
    segment: '5:14 – 6:04',
    duration: '50 sec',
    accent: '#8b5cf6'
  },
  {
    id: 8,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/nooitmeerwachten.png',
    title: 'Nooit meer wachten op je marketingteam',
    description: 'Doorlooptijden: nu zijn het dagen of weken. Straks wordt dat 20 minuten. Met factor 10 meer output.',
    segment: '0:00 – 0:41',
    duration: '41 sec',
    accent: '#06b6d4'
  },
  {
    id: 9,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/stopbureautheater.png',
    title: 'Weg met het marketingbureau!',
    description: 'Afstemmen, onderhandelen, plasjes, doorlooptijden. In de nieuwe wereld ben je zelf in de lead — sneller live en goedkoper dan ooit.',
    segment: '5:14 – 6:35',
    duration: '1 min 21 sec',
    accent: '#ec4899'
  },
  {
    id: 10,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/snelreageren.png',
    title: '10x sneller beslissen in je\nmarketingaansturing',
    description: 'Besluitvorming kost nu tijd. Vooral omdat iedereen een mening, maar niemand de data heeft. Dat is straks voorbij.',
    segment: '0:00 – 0:36',
    duration: '36 sec',
    accent: '#14b8a6'
  },
  {
    id: 11,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/andere-normen.png',
    title: 'Mensloze marketingteams?\nHet is dichterbij dan je denkt.',
    description: 'Kansen om extreem te schalen. Want de beperking zit straks niet in middelen, mensen of bureaus.',
    segment: '0:00 – 0:31',
    duration: '31 sec',
    accent: '#84cc16'
  },
  {
    id: 12,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/anderetijden.png',
    title: 'Voor de meeste marketingteams\nis het 2 voor 12...',
    description: '10x productiever voor 10% van de prijs. Wat doet dit met marketingteams? We zagen dit eerder in de finance. Wat leren we daarvan?',
    segment: '0:00 – 0:45',
    duration: '~45 sec',
    accent: '#f97316'
  },
  {
    id: 13,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/agentic.png',
    title: 'Je stuurt straks geen mensen meer aan',
    description: 'Maar agents. Zij worden straks je marketingcapability. Hoe maak je die transformatie?',
    segment: '0:00 – 0:16',
    duration: '16 sec',
    accent: '#a855f7'
  },
  {
    id: 14,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/aanpak.png',
    title: 'Hoe leg je nu de basis voor jouw AI Marketingteam? (als je slim bent)',
    description: 'Want je hebt niet veel nodig om deze golf te surfen. 4 must-haves. 3 fases. 90 dagen.',
    segment: '0:00 – 0:40',
    duration: '40 sec',
    accent: '#3b82f6'
  },
  {
    id: 15,
    thumb: 'https://denieuwemarketingmanager.nl/wp-content/uploads/2026/04/watwordtjeroadmap.png',
    title: 'AI in je marketingteam?\nZo doe je dat als baas',
    description: 'De accenten verschuiven. Focus vertroebelt. Maar als jij weet hoe het werkt, word je gegarandeerd een van de winnaars.',
    segment: '7:14 – einde',
    duration: '~1 min',
    accent: '#fbbf24',
    isBonus: true
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentEpisode = episodes[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return episodes.length - 1;
      if (nextIndex >= episodes.length) return 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0f] overflow-hidden relative">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentEpisode.accent}15 0%, transparent 70%)`
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Instagram post container */}
      <div className="relative w-[min(90vh,90vw)] aspect-square bg-[#0d0d14] rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#ff0080] p-0.5">
              <div className="w-full h-full rounded-full bg-[#0d0d14] flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-['Archivo_Black'] tracking-tight" style={{ fontSize: '1.1rem', color: '#fff' }}>
                Marketingleiderschap in het AI tijdperk
              </h3>
              <p className="font-['Manrope'] text-sm text-white/50">14 inzichten voor Directies & DGA's</p>
            </div>
          </div>
        </div>

        {/* Card carousel */}
        <div className="absolute inset-0 flex items-center justify-center px-12 pt-24 pb-28">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.4 }
              }}
              className="w-full h-full relative flex flex-col"
              style={{ perspective: '1200px' }}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-[47vh] rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                <img
                  src={currentEpisode.thumb}
                  alt={currentEpisode.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bonus badge */}
                {currentEpisode.isBonus && (
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-xl bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-orange-400/50"
                    initial={{ scale: 0, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    <span className="font-['Archivo_Black'] text-orange-300 tracking-wider" style={{ fontSize: '0.65rem' }}>
                      BONUS
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Content below image */}
              <div className="flex-1 flex flex-col px-2">
                {/* Title */}
                <motion.h2
                  className="font-['Archivo_Black'] leading-tight tracking-tight text-white mb-2"
                  style={{ fontSize: '1.4rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentEpisode.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < currentEpisode.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="font-['Manrope'] text-white/70 mb-3 leading-relaxed"
                  style={{ fontSize: '0.85rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentEpisode.description}
                </motion.p>

                {/* Meta info with play button */}
                <motion.div
                  className="flex items-center gap-2.5 font-['Manrope'] mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-white/40" style={{ fontSize: '0.75rem' }}>
                    {currentEpisode.segment}
                  </span>
                  <span className="text-white/20">•</span>
                  <span
                    className="font-bold"
                    style={{ fontSize: '0.75rem', color: currentEpisode.accent }}
                  >
                    {currentEpisode.duration}
                  </span>

                  {/* Play button inline */}
                  <button
                    className="ml-auto w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl group/play"
                    style={{
                      background: `linear-gradient(135deg, ${currentEpisode.accent}30, ${currentEpisode.accent}10)`,
                      border: `2px solid ${currentEpisode.accent}60`
                    }}
                  >
                    <Play
                      className="w-3.5 h-3.5 transition-all duration-300 ml-0.5"
                      style={{ color: currentEpisode.accent }}
                      fill={currentEpisode.accent}
                    />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-[35%] -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-[35%] -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
        </button>

        {/* Progress indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2 z-20">
          {episodes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative group"
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8' : 'w-1'
                }`}
                style={{
                  background: index === currentIndex
                    ? currentEpisode.accent
                    : 'rgba(255, 255, 255, 0.3)'
                }}
              />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `0 0 12px ${currentEpisode.accent}60`
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
