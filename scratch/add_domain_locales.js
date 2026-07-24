const fs = require('fs');

const en = {
  hero: {
    title: "Discover Your Ideal Domain Name",
    desc: "Search for new domains and register your name before someone else does",
    placeholder: "Search Now...",
    btn: "Search",
    note: "Free WHOIS privacy protection is included with every eligible domain registration."
  },
  cta: {
    titleCom: "com for",
    today: "Today!",
    subtitle: "Applicable for 3-Year Purchase",
    y1: "1st Year:",
    only: "only",
    y2: "2nd and 3rd Year:",
    perYear: "per year",
    titleDe: "de for"
  },
  steps: {
    title: "Get Your Business Online in 3 Easy Steps",
    s1Title: "Select a Domain Name",
    s1Desc: "Pick the right domain name extension from a range, including .com, .in, .org",
    s2Title: "Select Hosting Plan",
    s2Desc: "Choose the best web hosting price from MilesWeb, that's competitive",
    s3Title: "Launch Your Website",
    s3Desc: "Setup your website and get the instant account from us to launch website"
  },
  perks: {
    title: "Explore the Perks of Owning a Domain Name",
    p1Title: "Represent your business",
    p1Desc: "Clients will definitely check out your website before reaching to you, and your website representation starts right from",
    p2Title: "Get easily visible",
    p2Desc: "A clean and easy domain name attracts many visitors. Also, it is easy to remember the next time when you visitor wants to recall it",
    p3Title: "Send professional emails",
    p3Desc: "A domain name that relates to your business or organization, improves your website ranking on search engine pages",
    p4Title: "Establishes your brand identity",
    p4Desc: "Your brand's identity starts with a domain name. Choose from our powerful, memorable names that go perfectly with your audience",
    p5Title: "Business Safety",
    p5Desc: "Domain squatting and hi-jacking is a common practice carried out by hackers on your online business safety",
    p6Title: "Better Online Exposure",
    p6Desc: "A domain name that relates to your business or organization, improves your website ranking on search engine pages"
  },
  about1: {
    title: "Have you already chosen the ideal domain name? That's fantastic!",
    desc: "We won't mind. You can move your hosting to HostJar even if your domain name is already registered. We always welcome new customers to join our web hosting family and guarantee to give you the same superior hosting experience as others. Once you're affiliated with us, you'll feel safe and appreciated",
    btn: "Transfer Now"
  },
  about2: {
    title: "Purchased a Domain Already? Transfer It to Hostjar Today",
    desc1: "Manage your website domain at Hostjar by quickly transferring it from your current registrar - it only takes a few clicks",
    desc2: "With a simple \"one click\" setup feature you can connect your domain instantly to Web Hosting, Email Hosting or any services, without any tech knowledge. The Domain Manager comes complete with quick.",
    btn: "Search Domain"
  },
  about3: {
    title: "How Do You Manage Your Domain Name?",
    desc: "Most of Hostinger's web hosting packages come with free domains. You can get popular generic top-level domain names like .com, .net, .org, and other extensions for free",
    btn: "Register Domain"
  },
  faq: {
    title: "Frequently asked questions",
    desc: "Our domain services have transformed the way our customers manage their websites.",
    q1: "Do you charge for stopped instances?",
    a1: "We have not charged your card. What you have observed is a temporary authorization in order to validate the card provided. The hold will automatically expire based on your bank's policy, generally within a few days.",
    q2: "What is Vultr's role with respect to GDPR?",
    a2: "We have not charged your card. What you have observed is a temporary authorization in order to validate the card provided. The hold will automatically expire based on your bank's policy, generally within a few days.",
    q3: "How will I know if I was admitted into the program?",
    a3: "We have not charged your card. What you have observed is a temporary authorization in order to validate the card provided. The hold will automatically expire based on your bank's policy, generally within a few days.",
    q4: "What operating system templates do you offer?",
    a4: "We have not charged your card. What you have observed is a temporary authorization in order to validate the card provided. The hold will automatically expire based on your bank's policy, generally within a few days.",
    q5: "Is pricing the same in all data center locations?",
    a5: "We have not charged your card. What you have observed is a temporary authorization in order to validate the card provided. The hold will automatically expire based on your bank's policy, generally within a few days.",
    q6: "What payment methods do you accept?",
    a6: "We have not charged your card. What you have observed is a temporary authorization in order to validate the card provided. The hold will automatically expire based on your bank's policy, generally within a few days."
  }
};

const de = {
  hero: {
    title: "Entdecken Sie Ihren idealen Domainnamen",
    desc: "Suchen Sie nach neuen Domains und registrieren Sie Ihren Namen, bevor es jemand anderes tut",
    placeholder: "Jetzt suchen...",
    btn: "Suchen",
    note: "Der kostenlose WHOIS-Datenschutz ist in jeder berechtigten Domain-Registrierung enthalten."
  },
  cta: {
    titleCom: "com für",
    today: "Heute!",
    subtitle: "Gilt für 3-Jahres-Kauf",
    y1: "1. Jahr:",
    only: "nur",
    y2: "2. und 3. Jahr:",
    perYear: "pro Jahr",
    titleDe: "de für"
  },
  steps: {
    title: "Bringen Sie Ihr Unternehmen in 3 einfachen Schritten online",
    s1Title: "Wählen Sie einen Domainnamen",
    s1Desc: "Wählen Sie die richtige Domainnamen-Erweiterung aus einem Angebot, einschließlich .com, .in, .org",
    s2Title: "Wählen Sie einen Hosting-Plan",
    s2Desc: "Wählen Sie den besten Webhosting-Preis von MilesWeb, der wettbewerbsfähig ist",
    s3Title: "Starten Sie Ihre Website",
    s3Desc: "Richten Sie Ihre Website ein und erhalten Sie das sofortige Konto von uns, um die Website zu starten"
  },
  perks: {
    title: "Entdecken Sie die Vorteile eines Domainnamens",
    p1Title: "Repräsentieren Sie Ihr Unternehmen",
    p1Desc: "Kunden werden auf jeden Fall Ihre Website besuchen, bevor sie Sie kontaktieren, und Ihre Website-Repräsentation beginnt direkt mit",
    p2Title: "Werden Sie leicht sichtbar",
    p2Desc: "Ein sauberer und einfacher Domainname zieht viele Besucher an. Außerdem ist es leicht zu merken, wenn sich Ihr Besucher das nächste Mal daran erinnern möchte",
    p3Title: "Senden Sie professionelle E-Mails",
    p3Desc: "Ein Domainname, der sich auf Ihr Unternehmen oder Ihre Organisation bezieht, verbessert das Ranking Ihrer Website auf Suchmaschinen-Seiten",
    p4Title: "Etabliert Ihre Markenidentität",
    p4Desc: "Die Identität Ihrer Marke beginnt mit einem Domainnamen. Wählen Sie aus unseren leistungsstarken, einprägsamen Namen, die perfekt zu Ihrem Publikum passen",
    p5Title: "Geschäftssicherheit",
    p5Desc: "Domain-Squatting und Hi-Jacking sind gängige Praktiken von Hackern gegen die Sicherheit Ihres Online-Geschäfts",
    p6Title: "Bessere Online-Präsenz",
    p6Desc: "Ein Domainname, der sich auf Ihr Unternehmen oder Ihre Organisation bezieht, verbessert das Ranking Ihrer Website auf Suchmaschinen-Seiten"
  },
  about1: {
    title: "Haben Sie bereits den idealen Domainnamen gewählt? Das ist fantastisch!",
    desc: "Das stört uns nicht. Sie können Ihr Hosting zu HostJar umziehen, auch wenn Ihr Domainname bereits registriert ist. Wir heißen neue Kunden in unserer Webhosting-Familie immer willkommen und garantieren, Ihnen dasselbe erstklassige Hosting-Erlebnis zu bieten wie den anderen. Sobald Sie bei uns sind, werden Sie sich sicher und geschätzt fühlen",
    btn: "Jetzt transferieren"
  },
  about2: {
    title: "Bereits eine Domain gekauft? Transferieren Sie sie noch heute zu Hostjar",
    desc1: "Verwalten Sie Ihre Website-Domain bei Hostjar, indem Sie sie schnell von Ihrem aktuellen Registrar transferieren - es dauert nur wenige Klicks",
    desc2: "Mit einer einfachen \"Ein-Klick\"-Einrichtungsfunktion können Sie Ihre Domain sofort mit Webhosting, E-Mail-Hosting oder anderen Diensten verbinden, ohne technisches Wissen. Der Domain Manager ist komplett mit schnell.",
    btn: "Domain suchen"
  },
  about3: {
    title: "Wie verwalten Sie Ihren Domainnamen?",
    desc: "Die meisten Webhosting-Pakete von Hostinger enthalten kostenlose Domains. Sie können beliebte generische Top-Level-Domainnamen wie .com, .net, .org und andere Erweiterungen kostenlos erhalten",
    btn: "Domain registrieren"
  },
  faq: {
    title: "Häufig gestellte Fragen",
    desc: "Unsere Domain-Dienste haben die Art und Weise verändert, wie unsere Kunden ihre Websites verwalten.",
    q1: "Berechnen Sie für gestoppte Instanzen?",
    a1: "Wir haben Ihre Karte nicht belastet. Was Sie bemerkt haben, ist eine vorübergehende Autorisierung zur Validierung der angegebenen Karte. Die Sperrung läuft gemäß den Richtlinien Ihrer Bank automatisch nach wenigen Tagen ab.",
    q2: "Welche Rolle spielt Vultr in Bezug auf die DSGVO?",
    a2: "Wir haben Ihre Karte nicht belastet. Was Sie bemerkt haben, ist eine vorübergehende Autorisierung zur Validierung der angegebenen Karte. Die Sperrung läuft gemäß den Richtlinien Ihrer Bank automatisch nach wenigen Tagen ab.",
    q3: "Woher weiß ich, ob ich in das Programm aufgenommen wurde?",
    a3: "Wir haben Ihre Karte nicht belastet. Was Sie bemerkt haben, ist eine vorübergehende Autorisierung zur Validierung der angegebenen Karte. Die Sperrung läuft gemäß den Richtlinien Ihrer Bank automatisch nach wenigen Tagen ab.",
    q4: "Welche Betriebssystem-Vorlagen bieten Sie an?",
    a4: "Wir haben Ihre Karte nicht belastet. Was Sie bemerkt haben, ist eine vorübergehende Autorisierung zur Validierung der angegebenen Karte. Die Sperrung läuft gemäß den Richtlinien Ihrer Bank automatisch nach wenigen Tagen ab.",
    q5: "Ist die Preisgestaltung an allen Rechenzentrumsstandorten gleich?",
    a5: "Wir haben Ihre Karte nicht belastet. Was Sie bemerkt haben, ist eine vorübergehende Autorisierung zur Validierung der angegebenen Karte. Die Sperrung läuft gemäß den Richtlinien Ihrer Bank automatisch nach wenigen Tagen ab.",
    q6: "Welche Zahlungsmethoden akzeptieren Sie?",
    a6: "Wir haben Ihre Karte nicht belastet. Was Sie bemerkt haben, ist eine vorübergehende Autorisierung zur Validierung der angegebenen Karte. Die Sperrung läuft gemäß den Richtlinien Ihrer Bank automatisch nach wenigen Tagen ab."
  }
};

const it = {
  hero: {
    title: "Scopri il Tuo Nome a Dominio Ideale",
    desc: "Cerca nuovi domini e registra il tuo nome prima che lo faccia qualcun altro",
    placeholder: "Cerca Ora...",
    btn: "Cerca",
    note: "La protezione gratuita della privacy WHOIS è inclusa con ogni registrazione di dominio idonea."
  },
  cta: {
    titleCom: "com per",
    today: "Oggi!",
    subtitle: "Valido per l'acquisto di 3 anni",
    y1: "1° Anno:",
    only: "solo",
    y2: "2° e 3° Anno:",
    perYear: "all'anno",
    titleDe: "de per"
  },
  steps: {
    title: "Porta la tua attività online in 3 semplici passaggi",
    s1Title: "Seleziona un Nome a Dominio",
    s1Desc: "Scegli la giusta estensione del nome di dominio da una gamma, inclusi .com, .in, .org",
    s2Title: "Seleziona il Piano di Hosting",
    s2Desc: "Scegli il miglior prezzo di web hosting da MilesWeb, che è competitivo",
    s3Title: "Lancia il Tuo Sito Web",
    s3Desc: "Configura il tuo sito web e ottieni l'account istantaneo da noi per lanciare il sito web"
  },
  perks: {
    title: "Esplora i Vantaggi di Possedere un Nome a Dominio",
    p1Title: "Rappresenta la tua attività",
    p1Desc: "I clienti visiteranno sicuramente il tuo sito web prima di contattarti, e la rappresentazione del tuo sito web inizia proprio da",
    p2Title: "Diventa facilmente visibile",
    p2Desc: "Un nome a dominio pulito e semplice attrae molti visitatori. Inoltre, è facile da ricordare la prossima volta che il visitatore vorrà richiamarlo",
    p3Title: "Invia email professionali",
    p3Desc: "Un nome a dominio relativo alla tua attività o organizzazione, migliora il posizionamento del tuo sito web sulle pagine dei motori di ricerca",
    p4Title: "Stabilisce l'identità del tuo marchio",
    p4Desc: "L'identità del tuo marchio inizia con un nome a dominio. Scegli dai nostri nomi potenti e memorabili che si adattano perfettamente al tuo pubblico",
    p5Title: "Sicurezza Aziendale",
    p5Desc: "Il domain squatting e l'hi-jacking sono pratiche comuni attuate dagli hacker sulla sicurezza del tuo business online",
    p6Title: "Migliore Esposizione Online",
    p6Desc: "Un nome a dominio relativo alla tua attività o organizzazione, migliora il posizionamento del tuo sito web sulle pagine dei motori di ricerca"
  },
  about1: {
    title: "Hai già scelto il nome a dominio ideale? È fantastico!",
    desc: "Non ci dispiace. Puoi spostare il tuo hosting su HostJar anche se il tuo nome a dominio è già registrato. Diamo sempre il benvenuto a nuovi clienti per unirsi alla nostra famiglia di web hosting e garantiamo di darti la stessa esperienza di hosting superiore degli altri. Una volta affiliato con noi, ti sentirai al sicuro e apprezzato",
    btn: "Trasferisci Ora"
  },
  about2: {
    title: "Hai Già Acquistato un Dominio? Trasferiscilo Oggi su Hostjar",
    desc1: "Gestisci il dominio del tuo sito web su Hostjar trasferendolo rapidamente dal tuo attuale registrar - bastano pochi clic",
    desc2: "Con una semplice funzione di configurazione \"con un clic\" puoi collegare il tuo dominio istantaneamente al Web Hosting, all'Email Hosting o a qualsiasi servizio, senza alcuna conoscenza tecnica. Il Domain Manager è completo e veloce.",
    btn: "Cerca Dominio"
  },
  about3: {
    title: "Come Gestisci il Tuo Nome a Dominio?",
    desc: "La maggior parte dei pacchetti di web hosting di Hostinger include domini gratuiti. Puoi ottenere domini generici di primo livello popolari come .com, .net, .org e altre estensioni gratuitamente",
    btn: "Registra Dominio"
  },
  faq: {
    title: "Domande frequenti",
    desc: "I nostri servizi di dominio hanno trasformato il modo in cui i nostri clienti gestiscono i loro siti web.",
    q1: "Addebitate per le istanze interrotte?",
    a1: "Non abbiamo addebitato la tua carta. Quello che hai osservato è un'autorizzazione temporanea per convalidare la carta fornita. Il blocco scadrà automaticamente in base alla politica della tua banca, generalmente entro pochi giorni.",
    q2: "Qual è il ruolo di Vultr rispetto al GDPR?",
    a2: "Non abbiamo addebitato la tua carta. Quello che hai osservato è un'autorizzazione temporanea per convalidare la carta fornita. Il blocco scadrà automaticamente in base alla politica della tua banca, generalmente entro pochi giorni.",
    q3: "Come saprò se sono stato ammesso al programma?",
    a3: "Non abbiamo addebitato la tua carta. Quello che hai osservato è un'autorizzazione temporanea per convalidare la carta fornita. Il blocco scadrà automaticamente in base alla politica della tua banca, generalmente entro pochi giorni.",
    q4: "Quali modelli di sistema operativo offrite?",
    a4: "Non abbiamo addebitato la tua carta. Quello che hai osservato è un'autorizzazione temporanea per convalidare la carta fornita. Il blocco scadrà automaticamente in base alla politica della tua banca, generalmente entro pochi giorni.",
    q5: "I prezzi sono gli stessi in tutte le sedi dei data center?",
    a5: "Non abbiamo addebitato la tua carta. Quello che hai osservato è un'autorizzazione temporanea per convalidare la carta fornita. Il blocco scadrà automaticamente in base alla politica della tua banca, generalmente entro pochi giorni.",
    q6: "Quali metodi di pagamento accettate?",
    a6: "Non abbiamo addebitato la tua carta. Quello che hai osservato è un'autorizzazione temporanea per convalidare la carta fornita. Il blocco scadrà automaticamente in base alla politica della tua banca, generalmente entro pochi giorni."
  }
};

const langs = [
    { code: 'en', data: en },
    { code: 'de', data: de },
    { code: 'it', data: it }
];

langs.forEach(lang => {
    const file = `assets/locales/${lang.code}.js`;
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the end of the translations object, which is usually right before export default translations;
    const exportIndex = content.indexOf('export default translations;');
    if (exportIndex === -1) {
        console.error(`Could not find export default in ${file}`);
        return;
    }
    
    let newDataStr = JSON.stringify(lang.data, null, 6).slice(1, -1);
    
    const lastBraceIndex = content.lastIndexOf('}', exportIndex);
    
    const newContent = content.slice(0, lastBraceIndex) + ',\n    "domainPage": {\n' + newDataStr + '    }\n' + content.slice(lastBraceIndex);
    
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
});
