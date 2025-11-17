import { Music, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-orange-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg pulse-glow">
                <Music className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-black tracking-wider">DJ BIRUK</span>
            </div>
            <p className="text-white/70 font-semibold leading-relaxed">
              Elite event sound and DJ services. Creating unforgettable moments through premium sound and professional performance.
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 text-orange-400 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3 text-white font-bold">
              <li>
                <a href="#packages" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 group-hover:bg-orange-400 rounded-full transition-colors"></span>
                  Service Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 group-hover:bg-orange-400 rounded-full transition-colors"></span>
                  Event Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 group-hover:bg-orange-400 rounded-full transition-colors"></span>
                  Book Event
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 text-orange-400 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors" />
                <a href="tel:240-516-4220" className="hover:text-orange-400 transition-colors">
                  240-516-4220
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors" />
                <a
                  href="mailto:birukesh24@gmail.com"
                  className="hover:text-orange-400 transition-colors break-all"
                >
                  birukesh24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/30 pt-8 text-center">
          <p className="text-white/60 font-bold tracking-wide">
            &copy; {new Date().getFullYear()} DJ BIRUK. ELITE EVENT SOUND & DJ SERVICES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
