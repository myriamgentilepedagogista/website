**
 * Google Apps Script Backend per Myriam Gentile
 * POST dal sito -> invio email a Myriam con Reply-To = email del contatto
 */

function doOptions() {
  return ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function doPost(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    const name = (params.name || "").trim();
    const email = (params.email || "").trim();
    const service = (params.service || "Richiesta Generica").trim();
    const message = (params.message || "").trim();

    if (!name || !email || !message) {
      return _json({ ok: false, error: "Missing required fields: name, email, message." });
    }

    const recipient = "myriamgentilepedagogista@outlook.it";
    const subject = "Nuova Richiesta Contatto: " + service;

    const body =
`Hai ricevuto un nuovo messaggio dal tuo sito web.

--- DETTAGLI MITTENTE ---
Nome: ${name}
Email: ${email}
Servizio richiesto: ${service}

--- MESSAGGIO ---
${message}

-------------------------
Puoi rispondere direttamente a questa email per contattare il mittente.
`;

    GmailApp.sendEmail(recipient, subject, body, {
      replyTo: email,
      name: "Sito Myriam Gentile"
    });

    return _json({ ok: true });

  } catch (error) {
    console.error(error);
    return _json({ ok: false, error: String(error) });
  }
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
}

/**
 * Esegui una volta dall'editor per autorizzare GmailApp
 */
function autorizzaScript() {
  GmailApp.sendEmail(
    Session.getActiveUser().getEmail(),
    "Autorizzazione Script OK",
    "Lo script è ora autorizzato a inviare email dal sito."
  );
  Logger.log("Autorizzazione completata.");
}
