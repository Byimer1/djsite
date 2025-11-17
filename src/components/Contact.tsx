import { Phone, Mail, Calendar, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            BOOK YOUR EVENT
          </h2>
          <p className="text-xl text-orange-300 font-bold">
            Let's create an unforgettable experience with premium sound
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black mb-4 text-orange-400 tracking-wider">
                GET IN TOUCH
              </h3>
              <p className="text-white mb-6 text-lg font-semibold">
                Ready to book your event? Contact me directly to discuss your event details, get a custom quote, and lock in your date.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:240-516-4220"
                className="flex items-center gap-4 p-6 bg-slate-900 border-2 border-orange-500 rounded-xl hover:border-orange-400 transition-all transform hover:scale-105 group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-orange-400 font-bold uppercase tracking-wider">Call or Text</div>
                  <div className="text-2xl font-black text-white">240-516-4220</div>
                </div>
              </a>

              <a
                href="mailto:birukesh24@gmail.com"
                className="flex items-center gap-4 p-6 bg-slate-900 border-2 border-orange-500 rounded-xl hover:border-orange-400 transition-all transform hover:scale-105 group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-orange-400 font-bold uppercase tracking-wider">Email</div>
                  <div className="text-lg font-bold text-white">
                    birukesh24@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border-2 border-orange-500 p-10 rounded-2xl">
            <h3 className="text-3xl font-black mb-8 text-orange-400 tracking-wider">
              BOOKING INFO
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-black mb-2 text-white uppercase tracking-wide">Availability</h4>
                  <p className="text-white/80 font-semibold">
                    Book your date in advance to ensure availability. Weekend dates fill up quickly during peak season.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-black mb-2 text-white uppercase tracking-wide">Service Area</h4>
                  <p className="text-white/80 font-semibold">
                    Serving the DMV area and surrounding regions. Travel and pickup included in Full DJ Service package.
                  </p>
                </div>
              </div>

              <div className="border-t border-orange-500/30 pt-6 mt-6">
                <h4 className="font-black mb-4 text-white uppercase tracking-wide">Your Event Details:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white font-bold">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    Event date and location
                  </li>
                  <li className="flex items-center gap-3 text-white font-bold">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    Type of event
                  </li>
                  <li className="flex items-center gap-3 text-white font-bold">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    Expected number of guests
                  </li>
                  <li className="flex items-center gap-3 text-white font-bold">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    Preferred package
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-lg font-bold">
            📍 READY TO MAKE YOUR EVENT UNFORGETTABLE?
          </p>
          <p className="text-orange-300 font-semibold mt-2 text-lg">
            Let me know the date, location, and type of event to lock in your booking!
          </p>
        </div>
      </div>
    </section>
  );
}
