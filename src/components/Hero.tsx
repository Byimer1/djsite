import { Music } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 p-4 rounded-full">
              <Music className="w-12 h-12" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            DJ Biruk
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            Event Sound & DJ Services
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-slate-400 mb-8">
            <span>Weddings</span>
            <span>•</span>
            <span>Graduations</span>
            <span>•</span>
            <span>Private Parties</span>
            <span>•</span>
            <span>Corporate Events</span>
          </div>

          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Book Your Event
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
