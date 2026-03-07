
import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/placeholder"; 

  return (
    <section id="booking" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-serif text-[#4A3F35]">Prenota un colloquio</h2>
            <p className="text-lg text-[#6B5E51] font-light max-w-2xl mx-auto">
              Scegli il momento più adatto a te per una consulenza o un primo incontro conoscitivo.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-[#F9F6F1] p-8 rounded-3xl border border-[#EBE7E0]">
                <h4 className="text-xl font-medium mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#D68C70]" />
                  Come funziona
                </h4>
                <ul className="space-y-4">
                  {["Scegli data e ora", "Inserisci i tuoi dati", "Ricevi conferma via email"].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#6B5E51]">
                      <CheckCircle className="w-4 h-4 text-[#7B8B6F] mt-0.5 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-inner border border-[#EBE7E0] min-h-[600px] relative">
              {GOOGLE_CALENDAR_URL.includes("placeholder") ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <Calendar className="w-16 h-16 text-[#D68C70]/20 mb-6" />
                  <p className="text-[#6B5E51]">Configurazione Calendario necessaria</p>
                </div>
              ) : (
                <iframe src={GOOGLE_CALENDAR_URL} style={{ border: 0 }} width="100%" height="600" frameBorder="0"></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
