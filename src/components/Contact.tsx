import { Phone, Mail, Calendar, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Event
          </h2>
          <p className="text-xl text-slate-300">
            Let's make your event unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Get In Touch
              </h3>
              <p className="text-slate-300 mb-6">
                Ready to book your event? Contact me to discuss your event
                details, get a custom quote, and secure your date.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:240-516-4220"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="bg-orange-500 p-3 rounded-lg group-hover:bg-orange-600 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Call or Text</div>
                  <div className="text-lg font-semibold">240-516-4220</div>
                </div>
              </a>

              <a
                href="mailto:birukesh24@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="bg-orange-500 p-3 rounded-lg group-hover:bg-orange-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-lg font-semibold">
                    birukesh24@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Booking Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Availability</h4>
                  <p className="text-slate-300 text-sm">
                    Book your date in advance to ensure availability. Weekend
                    dates fill up quickly during peak season.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Service Area</h4>
                  <p className="text-slate-300 text-sm">
                    Serving the DMV area and surrounding regions. Travel and
                    pickup included in Full DJ Service package.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 mt-6">
                <h4 className="font-semibold mb-3">What to Include in Your Message:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Event date and location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Type of event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Expected number of guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Preferred package</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            Let me know the date, location, and type of event to lock in your
            booking!
          </p>
        </div>
      </div>
    </section>
  );
}
