
import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, Info, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'consulenza-genitoriale',
    message: '',
  });

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; msg: string }>(null);

  const contactInfos = [
    {
      icon: <Mail className="w-5 h-5 text-[#D68C70]" />,
      label: 'Email',
      value: 'myriamgentilepedagogista@outlook.it',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#7B8B6F]" />,
      label: 'Cellulare',
      value: '+39 345 2291697',
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#4A3F35]" />,
      label: 'Indirizzo Studio',
      value: 'Via San Callisto da Caravario 5-G, Studio Kairos, Civitanova Marche (MC)',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    setStatus(null);

    const serviceLabels: Record<string, string> = {
      'consulenza-genitoriale': 'Consulenza Genitoriale',
      'tutoraggio-dsa-bes': 'Tutoraggio DSA / BES',
      'coordinamento-pedagogico': 'Coordinamento Pedagogico',
      'orientamento-mentoring': 'Orientamento & Mentoring',
      altro: 'Altro',
    };

    const selectedService = serviceLabels[formData.service] || formData.service;
    const recipient = "myriamgentilepedagogista@outlook.it";
    const subject = encodeURIComponent(`Richiesta Contatto: ${selectedService} - ${formData.name}`);
    
    const body = encodeURIComponent(
      `Nuova richiesta dal sito web:\n\n` +
      `Nome: ${formData.name}\n` +
      `Email di risposta: ${formData.email}\n` +
      `Servizio: ${selectedService}\n\n` +
      `Messaggio:\n${formData.message}`
    );

    // Creazione del link mailto
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Mostriamo un feedback all'utente e poi apriamo il client email
    setStatus({
      type: 'success',
      msg: 'Sto aprendo la tua applicazione di posta... Controlla la finestra del tuo browser o del tuo computer per inviare il messaggio.',
    });

    // Timeout minimo per permettere all'utente di leggere il messaggio prima dell'apertura del client
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsRedirecting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F9F6F1] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">
              Contatti
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-serif text-[#4A3F35]">
              Iniziamo un percorso insieme.
            </h2>
            <p className="text-lg text-[#6B5E51] mb-12 font-light leading-relaxed max-w-md">
              Puoi trovarmi presso il mio studio a Civitanova Marche o richiedere una consulenza online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-6 bg-white rounded-3xl border border-[#EBE7E0] transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F9F6F1] flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <p className="text-[10px] text-[#A89E92] uppercase tracking-widest font-bold mb-1">
                    {info.label}
                  </p>
                  <p className="text-[#4A3F35] font-medium text-sm break-words">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="mb-12 overflow-hidden rounded-[2.5rem] border border-[#EBE7E0] shadow-md h-[250px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.4392703222375!2d13.7245397!3d43.3050631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1332727e1ffb2b67%3A0x1df0fc2ba681fc57!2sVia%20S.%20Callisto%20Caravario%2C%205%2C%2062012%20Civitanova%20Marche%20MC!5e0!3m2!1sen!2sit!4v1767629105027!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa dello Studio Kairos"
              />
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#D68C70]/5 rounded-2xl border border-[#D68C70]/10 max-w-md">
              <Info className="w-5 h-5 text-[#D68C70] shrink-0 mt-0.5" />
              <p className="text-sm text-[#6B5E51] leading-relaxed">
                Ricevo su appuntamento a <strong>Civitanova Marche</strong> presso lo{' '}
                <strong>Studio Kairos</strong> (Via San Callisto da Caravario 5-G) e offro consulenze{' '}
                <strong>online</strong>.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#D68C70]/5 rounded-[3rem] -rotate-2 transform scale-105"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-[#4A3F35]/5 border border-[#F3F0E9]">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-2 ml-1">
                      Il tuo Nome
                    </label>
                    <input
                      required
                      disabled={isRedirecting}
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-[#F9F6F1] border border-[#EBE7E0] rounded-2xl outline-none focus:border-[#D68C70] focus:ring-2 focus:ring-[#D68C70]/5 transition-all disabled:opacity-50"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-2 ml-1">
                      Email
                    </label>
                    <input
                      required
                      disabled={isRedirecting}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-[#F9F6F1] border border-[#EBE7E0] rounded-2xl outline-none focus:border-[#D68C70] focus:ring-2 focus:ring-[#D68C70]/5 transition-all disabled:opacity-50"
                      placeholder="mario@esempio.it"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4A3F35] mb-2 ml-1">
                    Interesse per
                  </label>
                  <select
                    disabled={isRedirecting}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 bg-[#F9F6F1] border border-[#EBE7E0] rounded-2xl outline-none focus:border-[#D68C70] focus:ring-2 focus:ring-[#D68C70]/5 transition-all appearance-none disabled:opacity-50"
                  >
                    <option value="consulenza-genitoriale">Consulenza Genitoriale</option>
                    <option value="tutoraggio-dsa-bes">Tutoraggio DSA / BES</option>
                    <option value="coordinamento-pedagogico">Coordinamento Pedagogico</option>
                    <option value="orientamento-mentoring">Orientamento & Mentoring</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4A3F35] mb-2 ml-1">
                    Come posso aiutarti?
                  </label>
                  <textarea
                    required
                    disabled={isRedirecting}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-[#F9F6F1] border border-[#EBE7E0] rounded-2xl outline-none focus:border-[#D68C70] focus:ring-2 focus:ring-[#D68C70]/5 transition-all resize-none disabled:opacity-50"
                    placeholder="Scrivimi brevemente la tua richiesta..."
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isRedirecting}
                    className={`w-full py-5 bg-[#4A3F35] text-white rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all transform shadow-xl shadow-[#4A3F35]/10 
                      ${
                        isRedirecting
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:bg-[#3A322A] hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                  >
                    {isRedirecting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Apertura client email...
                      </>
                    ) : (
                      <>
                        Invia tramite Email <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {status && (
                    <div
                      className={`p-4 rounded-xl text-sm font-medium animate-fade-in-up flex items-start gap-3 ${
                        status.type === 'success'
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'bg-red-50 text-red-700 border border-red-100'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">{status.type === 'success' ? 'ℹ' : '⚠'}</div>
                      <p>{status.msg}</p>
                    </div>
                  )}
                </div>

                <p className="text-[10px] text-center text-[#A89E92] px-4 italic leading-relaxed">
                  Inviando questo modulo acconsenti al trattamento dei dati personali secondo la normativa
                  vigente. Cliccando il tasto si aprirà il tuo programma di posta elettronica per completare l'invio.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
