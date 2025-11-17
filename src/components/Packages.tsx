import { Music2, Mic, Speaker, Check } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      title: 'Full DJ Service',
      price: 'Starting from $650',
      icon: Music2,
      description: 'Complete professional DJ experience for your event',
      features: [
        'Live DJ performance with curated playlists',
        '2x EV ETX 15P professional speakers',
        'Subwoofer for deep bass and premium sound',
        'Wireless microphone for announcements',
        'Complete setup, soundcheck, and breakdown',
        'Travel and pickup included',
      ],
      highlight: true,
    },
    {
      title: 'Speaker Rental',
      price: '$300',
      icon: Speaker,
      description: 'Professional sound system for DIY events',
      features: [
        '2x EV ETX 15P speakers',
        '1x Wireless microphone',
        'Setup and soundcheck',
        'Pickup after event',
        'Perfect for speeches or self-managed events',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="sound-bars text-orange-500 h-8">
              <span style={{ height: '20px' }}></span>
              <span style={{ height: '35px' }}></span>
              <span style={{ height: '45px' }}></span>
              <span style={{ height: '35px' }}></span>
              <span style={{ height: '20px' }}></span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            SERVICE PACKAGES
          </h2>
          <p className="text-xl text-orange-300 font-semibold">
            Choose the perfect sound solution for your event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative group rounded-2xl overflow-hidden transition-all transform hover:scale-105 ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 text-white ring-4 ring-orange-400 shadow-2xl'
                  : 'bg-slate-900 text-white border-2 border-slate-800 hover:border-orange-500'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-4 right-4 bg-black text-orange-400 px-4 py-1 rounded-full text-sm font-black tracking-wider">
                  FEATURED
                </div>
              )}

              <div className="p-8 relative">
                {!pkg.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}

                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-xl ${
                      pkg.highlight
                        ? 'bg-white/20 backdrop-blur-sm'
                        : 'bg-orange-500/20 border border-orange-500/50'
                    }`}
                  >
                    <pkg.icon className="w-8 h-8 text-orange-300" />
                  </div>
                  <h3 className="text-3xl font-black">{pkg.title.toUpperCase()}</h3>
                </div>

                <div className="mb-6 relative">
                  <span className="text-5xl font-black text-orange-300">{pkg.price}</span>
                  <span className="text-lg ml-2 text-white/70 font-bold">
                    /EVENT
                  </span>
                </div>

                <p className="mb-6 text-lg font-semibold text-white/90">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 mt-0.5 flex-shrink-0 text-orange-300" />
                      <span className="text-base font-semibold text-white/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center font-black px-6 py-4 rounded-lg transition-all transform hover:scale-105 uppercase tracking-wide ${
                    pkg.highlight
                      ? 'bg-black text-orange-400 hover:bg-slate-900 shadow-lg'
                      : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
                  }`}
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white flex items-center justify-center gap-3 font-bold text-lg">
            <Mic className="w-6 h-6 text-orange-500" />
            PERFECT FOR WEDDINGS • GRADUATIONS • PARTIES • CORPORATE EVENTS
            <Mic className="w-6 h-6 text-orange-500" />
          </p>
        </div>
      </div>
    </section>
  );
}
