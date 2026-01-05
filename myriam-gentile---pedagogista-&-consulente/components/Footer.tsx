
import React, { useState } from 'react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const privacyContent = (
    <div className="space-y-6">
      <p className="font-medium text-[#4A3F35]">Informativa sulla Privacy - Ai sensi del Regolamento UE 2016/679 (GDPR)</p>
      
      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Titolare del trattamento</h4>
        <p>Nome: Myriam Gentile<br />Paese: Italia<br />Email di contatto: myriamgentilepedagogista@outlook.it</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Dati raccolti</h4>
        <p>Il sito raccoglie esclusivamente i dati forniti volontariamente dall’utente tramite il modulo di contatto:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Nome</li>
          <li>Indirizzo email</li>
          <li>Contenuto del messaggio</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Finalità del trattamento</h4>
        <p>I dati sono utilizzati unicamente per rispondere alle richieste inviate dall’utente tramite il modulo di contatto.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Base giuridica</h4>
        <p>Il trattamento è basato sul consenso dell’utente, espresso tramite l’invio volontario del messaggio.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Modalità di trattamento</h4>
        <p>I dati sono trattati in modo lecito, corretto e trasparente e non vengono ceduti a terzi.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Conservazione dei dati</h4>
        <p>I dati vengono conservati solo per il tempo necessario a rispondere alla richiesta e gestire eventuali comunicazioni successive.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Diritti dell’utente</h4>
        <p>L’utente ha diritto di: accedere ai propri dati, richiederne la rettifica o cancellazione, opporsi al trattamento. Le richieste possono essere inviate all’indirizzo email indicato sopra.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">Modifiche</h4>
        <p>La presente informativa può essere aggiornata in qualsiasi momento.<br />Ultimo aggiornamento: 05/01/2026</p>
      </section>
    </div>
  );

  const termsContent = (
    <div className="space-y-6">
      <p className="font-medium text-[#4A3F35]">Termini e Condizioni d'Uso</p>
      
      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">1. Oggetto</h4>
        <p>Il sito web di Myriam Gentile ha lo scopo di fornire informazioni sui servizi pedagogici e professionali offerti.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">2. Responsabilità</h4>
        <p>L'utente utilizza il sito e le informazioni in esso contenute sotto la propria responsabilità. Myriam Gentile non risponde di eventuali danni derivanti dall'uso del sito.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">3. Proprietà Intellettuale</h4>
        <p>Tutti i contenuti (testi, immagini, loghi) sono di proprietà di Myriam Gentile o dei rispettivi autori e sono protetti dalle leggi sul diritto d'autore. È vietata la riproduzione senza autorizzazione.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">4. Link Esterni</h4>
        <p>Il sito può contenere link a siti terzi. Myriam Gentile non ha alcun controllo su tali siti e non è responsabile del loro contenuto.</p>
      </section>

      <section>
        <h4 className="font-bold text-[#4A3F35] mb-2">5. Modifiche</h4>
        <p>I termini possono essere modificati in ogni momento. L'uso continuato del sito implica l'accettazione dei termini aggiornati.<br />Ultimo aggiornamento: 05/01/2026</p>
      </section>
    </div>
  );

  return (
    <>
      <footer className="py-20 bg-[#FDFBF7] border-t border-[#EBE7E0]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <h3 className="text-3xl font-serif mb-6 text-[#4A3F35]">Myriam Gentile</h3>
              <p className="text-sm text-[#6B5E51] font-light leading-relaxed mb-8">
                Pedagogista specializzata in empowerment educativo. Accompagno genitori ed educatrici attraverso le neuroscienze e la pedagogia della relazione.
              </p>
              <div className="text-[11px] text-[#A89E92] leading-relaxed uppercase tracking-widest bg-white p-4 rounded-xl border border-[#EBE7E0]">
                <p className="mb-2">Legge 15 aprile 2024 n. 55 - Albo Pedagogisti (istruttoria in corso)</p>
                <p>Partita IVA: 02480080445</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
              <div className="flex flex-wrap gap-8 text-sm font-medium">
                <a href="https://www.linkedin.com/in/myriam-gentile-012586196/" target="_blank" rel="noopener noreferrer" className="text-[#4A3F35] hover:text-[#D68C70] transition-colors">LinkedIn</a>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-[#4A3F35] hover:text-[#D68C70] transition-colors"
                >
                  Chi Sono
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-[#4A3F35] hover:text-[#D68C70] transition-colors"
                >
                  Servizi
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-[#4A3F35] hover:text-[#D68C70] transition-colors"
                >
                  Contatti
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-4">
                <button 
                  onClick={() => setLegalType('privacy')}
                  className="text-[10px] uppercase tracking-widest text-[#A89E92] hover:text-[#D68C70] transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setLegalType('terms')}
                  className="text-[10px] uppercase tracking-widest text-[#A89E92] hover:text-[#D68C70] transition-colors"
                >
                  Termini e Condizioni
                </button>
              </div>

              <p className="text-xs text-[#A89E92] mt-4">
                © {new Date().getFullYear()} Myriam Gentile • Pedagogista • Civitanova Marche & Online
              </p>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={legalType === 'privacy'} 
        onClose={() => setLegalType(null)} 
        title="Informativa sulla Privacy" 
        content={privacyContent} 
      />
      <LegalModal 
        isOpen={legalType === 'terms'} 
        onClose={() => setLegalType(null)} 
        title="Termini e Condizioni" 
        content={termsContent} 
      />
    </>
  );
};

export default Footer;
