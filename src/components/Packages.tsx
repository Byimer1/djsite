import { Music2, Mic, Speaker, Check } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      title: 'Full DJ Service',
      price: '$650',
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
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-slate-600">
            Choose the perfect package for your event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white ring-4 ring-orange-400'
                  : 'bg-slate-50 text-slate-900'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      pkg.highlight
                        ? 'bg-white/20'
                        : 'bg-orange-500 text-white'
                    }`}
                  >
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span
                    className={`text-lg ml-2 ${
                      pkg.highlight ? 'text-white/80' : 'text-slate-600'
                    }`}
                  >
                    /event
                  </span>
                </div>

                <p
                  className={`mb-6 ${
                    pkg.highlight ? 'text-white/90' : 'text-slate-600'
                  }`}
                >
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          pkg.highlight ? 'text-white' : 'text-orange-500'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.highlight ? 'text-white/90' : 'text-slate-700'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center font-semibold px-6 py-3 rounded-lg transition-all ${
                    pkg.highlight
                      ? 'bg-white text-orange-600 hover:bg-slate-50'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 flex items-center justify-center gap-2">
            <Mic className="w-5 h-5 text-orange-500" />
            Ideal for weddings, graduations, private parties, and corporate
            events
          </p>
        </div>
      </div>
    </section>
  );
}
