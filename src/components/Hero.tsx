import { Music, Volume2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-full pulse-glow floating">
                <Music className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="mb-6 flex justify-center gap-1 text-orange-500 h-12 items-center">
            <div className="sound-bars text-orange-500">
              <span style={{ height: '30px' }}></span>
              <span style={{ height: '50px' }}></span>
              <span style={{ height: '70px' }}></span>
              <span style={{ height: '50px' }}></span>
              <span style={{ height: '30px' }}></span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-300 to-orange-500">
            DJ BIRUK
          </h1>

          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 mb-6 rounded-full"></div>

          <p className="text-2xl md:text-3xl text-white mb-2 font-bold tracking-wide">
            ELITE EVENT SOUND & DJ SERVICES
          </p>

          <p className="text-lg md:text-xl text-orange-300 mb-8 font-semibold">
            Premium Sound. Unforgettable Moments.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-white mb-12 font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>WEDDINGS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>GRADUATIONS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>PRIVATE PARTIES</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>CORPORATE EVENTS</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <Volume2 className="w-5 h-5" />
              BOOK YOUR EVENT
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-400 hover:text-orange-300 hover:border-orange-400 font-bold px-10 py-4 rounded-lg transition-all"
            >
              <Music className="w-5 h-5" />
              VIEW PACKAGES
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  );
}
