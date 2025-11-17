import { Music, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Music className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">DJ Biruk</span>
            </div>
            <p className="text-slate-400 text-sm">
              Professional DJ and sound services for all your special events.
              Creating memorable experiences through music.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#packages" className="hover:text-orange-500 transition-colors">
                  Service Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-500 transition-colors">
                  Event Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:240-516-4220" className="hover:text-orange-500 transition-colors">
                  240-516-4220
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a
                  href="mailto:birukesh24@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  birukesh24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DJ Biruk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
