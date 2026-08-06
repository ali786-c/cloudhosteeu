(function() {
    // Force root dark canvas background to eliminate any background bleed
    document.documentElement.style.setProperty('background-color', '#0b0e1a', 'important');
    document.body.style.setProperty('background-color', '#0b0e1a', 'important');

    const currentPath = window.location.pathname;
    const isIt = currentPath.includes("/it/");
    const isDe = currentPath.includes("/de/");
    const pathPrefix = isIt || isDe ? "../" : "";

    // Translations Dictionary for i18n support
    const translations = {
        en: {
            desc: "High-speed European NVMe Cloud Servers, LiteSpeed Managed WordPress Hosting & GDPR Compliant Infrastructure.",
            hosting: "Hosting",
            wpHosting: "WordPress Hosting",
            vpsHosting: "VPS Hosting",
            n8nHosting: "n8n Hosting",
            webHosting: "Web Hosting",
            dedicatedServers: "Dedicated Servers",
            features: "Features",
            dataCenters: "Data Centers",
            serverLocations: "Server Locations",
            uptime: "99.9% Uptime",
            operatingSystems: "Operating Systems",
            antiDdos: "1.2Tbps Anti-DDoS",
            company: "Company",
            aboutUs: "About Us",
            blog: "Blog & Guides",
            career: "Career",
            caseStudies: "Case Studies",
            contactUs: "Contact Us",
            privacyPolicy: "Privacy Policy",
            resources: "Resources & Support",
            faq: "Help FAQ",
            knowledgeBase: "Knowledge Base",
            systemStatus: "Live System Status",
            subscribeTitle: "Subscribe to CloudHoste Updates",
            subscribePlaceholder: "Your Email Address...",
            subscribeBtn: "Subscribe",
            paymentTitle: "Accepted Payment Options",
            copyright: "&copy; 2026 CloudHoste.eu. All rights reserved. High-Speed European Cloud Infrastructure."
        },
        de: {
            desc: "Schnelle europäische NVMe-Cloud-Server, LiteSpeed Managed WordPress Hosting & GDPR-konforme Infrastruktur.",
            hosting: "Hosting",
            wpHosting: "WordPress Hosting",
            vpsHosting: "VPS Hosting",
            n8nHosting: "n8n Hosting",
            webHosting: "Web Hosting",
            dedicatedServers: "Dedicated Server",
            features: "Funktionen",
            dataCenters: "Rechenzentren",
            serverLocations: "Server-Standorte",
            uptime: "99,9 % Betriebszeit",
            operatingSystems: "Betriebssysteme",
            antiDdos: "1,2 Tbit/s Anti-DDoS",
            company: "Unternehmen",
            aboutUs: "Über uns",
            blog: "Blog & Anleitungen",
            career: "Karriere",
            caseStudies: "Fallstudien",
            contactUs: "Kontaktieren Sie uns",
            privacyPolicy: "Datenschutz-Bestimmungen",
            resources: "Ressourcen & Support",
            faq: "Hilfe FAQ",
            knowledgeBase: "Wissensdatenbank",
            systemStatus: "Live-Systemstatus",
            subscribeTitle: "CloudHoste-Updates abonnieren",
            subscribePlaceholder: "Ihre E-Mail-Adresse...",
            subscribeBtn: "Abonnieren",
            paymentTitle: "Akzeptierte Zahlungsmethoden",
            copyright: "&copy; 2026 CloudHoste.eu. Alle Rechte vorbehalten. Schnelle europäische Cloud-Infrastruktur."
        },
        it: {
            desc: "Cloud Server NVMe Europei ad alta velocità, Hosting WordPress gestito LiteSpeed e Infrastruttura conforme al GDPR.",
            hosting: "Hosting",
            wpHosting: "Hosting WordPress",
            vpsHosting: "Hosting VPS",
            n8nHosting: "Hosting n8n",
            webHosting: "Hosting Web",
            dedicatedServers: "Server Dedicati",
            features: "Caratteristiche",
            dataCenters: "Data Center",
            serverLocations: "Posizioni Server",
            uptime: "Uptime 99.9%",
            operatingSystems: "Sistemi Operativi",
            antiDdos: "Protezione Anti-DDoS 1.2Tbps",
            company: "Azienda",
            aboutUs: "Chi Siamo",
            blog: "Blog e Guide",
            career: "Lavora con noi",
            caseStudies: "Casi di Studio",
            contactUs: "Contattaci",
            privacyPolicy: "Informativa sulla Privacy",
            resources: "Risorse e Supporto",
            faq: "Domande Frequenti (FAQ)",
            knowledgeBase: "Base di Conoscenza",
            systemStatus: "Stato del Sistema Live",
            subscribeTitle: "Iscriviti agli aggiornamenti di CloudHoste",
            subscribePlaceholder: "Il tuo indirizzo email...",
            subscribeBtn: "Iscriviti",
            paymentTitle: "Metodi di Pagamento Accettati",
            copyright: "&copy; 2026 CloudHoste.eu. Tutti i diritti riservati. Infrastruttura Cloud Europea ad alta velocità."
        }
    };

    const lang = isDe ? translations.de : (isIt ? translations.it : translations.en);

    const footerHTML = 
    '<footer id="global-footer" class="text-light m-0 p-0 position-relative" style="background-color: #0b0e1a !important; margin-top: auto !important; margin-bottom: 0 !important; border-top: 1px solid rgba(255,255,255,0.08); width: 100% !important; position: relative !important; z-index: 10 !important; clear: both !important; display: block !important;">' +
      '<div class="pt-16 pb-12">' +
        '<div class="container-fluid px-4 px-md-8 px-lg-12">' +
          '<div class="row g-4 justify-content-between">' +
            '<div class="col-lg-3 col-md-6">' +
              '<div class="d-flex flex-column h-100">' +
                '<a class="logo d-inline-block mb-4" href="' + pathPrefix + 'index.html">' +
                  '<img width="160" height="35" alt="CloudHoste official brand logo - light theme" class="logo__img" src="' + pathPrefix + 'assets/img/logo-light.svg"/>' +
                '</a>' +
                '<p class="mb-4 text-light text-opacity-75 fs-14 me-lg-4" style="line-height: 1.6;">' +
                  lang.desc +
                '</p>' +
                '<div class="d-flex align-items-center gap-3 mt-auto mb-4 mb-md-0">' +
                  '<a href="https://twitter.com/cloudhoste" target="_blank" rel="noopener noreferrer" class="text-light text-opacity-75 hover:text-white fs-18 text-decoration-none" aria-label="CloudHoste Twitter"><i class="bi bi-twitter-x"></i></a>' +
                  '<a href="https://linkedin.com/company/cloudhoste" target="_blank" rel="noopener noreferrer" class="text-light text-opacity-75 hover:text-white fs-18 text-decoration-none" aria-label="CloudHoste LinkedIn"><i class="bi bi-linkedin"></i></a>' +
                  '<a href="https://github.com/cloudhoste" target="_blank" rel="noopener noreferrer" class="text-light text-opacity-75 hover:text-white fs-18 text-decoration-none" aria-label="CloudHoste GitHub"><i class="bi bi-github"></i></a>' +
                  '<a href="https://facebook.com/cloudhoste" target="_blank" rel="noopener noreferrer" class="text-light text-opacity-75 hover:text-white fs-18 text-decoration-none" aria-label="CloudHoste Facebook"><i class="bi bi-facebook"></i></a>' +
                  '<a href="https://discord.gg/cloudhoste" target="_blank" rel="noopener noreferrer" class="text-light text-opacity-75 hover:text-white fs-18 text-decoration-none" aria-label="CloudHoste Discord"><i class="bi bi-discord"></i></a>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="col-lg-2 col-6">' +
              '<h6 class="mb-4 text-light fs-16 fw-bold text-uppercase" style="letter-spacing: 0.5px;">' + lang.hosting + '</h6>' +
              '<ul class="list-unstyled gap-2 d-flex flex-column mb-0">' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'wp-hosting.html">' + lang.wpHosting + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'vps-hosting.html">' + lang.vpsHosting + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'n8n-hosting.html">' + lang.n8nHosting + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'web-hosting.html">' + lang.webHosting + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'dedicated-server-hosting.html">' + lang.dedicatedServers + '</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="col-lg-2 col-6">' +
              '<h6 class="mb-4 text-light fs-16 fw-bold text-uppercase" style="letter-spacing: 0.5px;">' + lang.features + '</h6>' +
              '<ul class="list-unstyled gap-2 d-flex flex-column mb-0">' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'data-center.html">' + lang.dataCenters + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'server-location.html">' + lang.serverLocations + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'uptime.html">' + lang.uptime + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'operating-system.html">' + lang.operatingSystems + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'ddos-protection.html">' + lang.antiDdos + '</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="col-lg-2 col-6">' +
              '<h6 class="mb-4 text-light fs-16 fw-bold text-uppercase" style="letter-spacing: 0.5px;">' + lang.company + '</h6>' +
              '<ul class="list-unstyled gap-2 d-flex flex-column mb-0">' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'about.html">' + lang.aboutUs + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'blog.html">' + lang.blog + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'career.html">' + lang.career + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'case-study.html">' + lang.caseStudies + '</a></li>' +
                '<li><a aria-label="Contact CloudHoste support" class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="https://my.cloudhoste.eu/contact.php" target="_blank" rel="noopener noreferrer">' + lang.contactUs + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'privacy-policy.html">' + lang.privacyPolicy + '</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="col-lg-3 col-md-6">' +
              '<h6 class="mb-4 text-light fs-16 fw-bold text-uppercase" style="letter-spacing: 0.5px;">' + lang.resources + '</h6>' +
              '<ul class="list-unstyled gap-2 d-flex flex-column mb-4">' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'faq.html">' + lang.faq + '</a></li>' +
                '<li><a class="text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="' + pathPrefix + 'knowledge-base.html">' + lang.knowledgeBase + '</a></li>' +
                '<li><a class="d-inline-flex align-items-center gap-2 text-light text-opacity-75 hover:text-white fs-14 text-decoration-none" href="https://stats.uptimerobot.com/giVW8ZwKhY" target="_blank" rel="noopener noreferrer"><span class="status-dot-blink"></span> ' + lang.systemStatus + '</a></li>' +
              '</ul>' +
              '<div class="mt-3">' +
                '<a href="https://www.whtop.com/" title="Listed on WHTop.com, biggest web hosting directory!" target="_blank" rel="noopener noreferrer"><img src="https://images.whtop.com/listed-whtop-25.png" width="140" height="140" alt="Listed on WHTop.com" class="img-fluid rounded" style="max-width: 140px; height: auto;"/></a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="pt-8 pb-5 border-top border-light border-opacity-10" style="background-color: rgba(0,0,0,0.2);">' +
        '<div class="container-fluid px-4 px-md-8 px-lg-12">' +
          '<div class="row g-4 align-items-center justify-content-between">' +
            '<div class="col-md-6 col-lg-5">' +
              '<h6 class="text-light fs-15 fw-semibold mb-2">' + lang.subscribeTitle + '</h6>' +
              '<form action="https://my.cloudhoste.eu/subscribenewsletter.php" method="post" target="_blank" class="d-flex align-items-center gap-2">' +
                '<input class="form-control bg-light bg-opacity-10 text-light border-secondary placeholder::text-light placeholder::text-opacity-50 fs-14" placeholder="' + lang.subscribePlaceholder + '" type="email" name="email" required/>' +
                '<button class="btn btn-primary flex-shrink-0 px-5 fs-14 fw-semibold" type="submit">' + lang.subscribeBtn + '</button>' +
              '</form>' +
            '</div>' +
            '<div class="col-md-6 col-lg-5 text-md-end">' +
              '<h6 class="text-light fs-15 fw-semibold mb-2">' + lang.paymentTitle + '</h6>' +
              '<ul class="list-unstyled d-flex flex-wrap gap-2 align-items-center justify-content-md-end mb-0">' +
                '<li><img width="74" height="44" alt="Visa payment gateway - CloudHoste" class="img-fluid rounded" src="' + pathPrefix + 'assets/img/pm-img-1.webp"/></li>' +
                '<li><img width="75" height="44" alt="Mastercard payment gateway - CloudHoste" class="img-fluid rounded" src="' + pathPrefix + 'assets/img/pm-img-2.webp"/></li>' +
                '<li><img width="74" height="44" alt="Stripe payment gateway - CloudHoste" class="img-fluid rounded" src="' + pathPrefix + 'assets/img/stripe-logo.svg"/></li>' +
                '<li><img width="74" height="44" alt="PayPal payment gateway - CloudHoste" class="img-fluid rounded" src="' + pathPrefix + 'assets/img/pm-img-4.webp"/></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="row mt-5 pt-5 border-top border-light border-opacity-10 align-items-center">' +
            '<div class="col-12 text-center pb-2">' +
              '<p class="mb-0 fs-14 text-light text-opacity-60">' + lang.copyright + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

    const renderFooter = function() {
        const footerEl = document.getElementById("global-footer");
        if (footerEl) {
            footerEl.outerHTML = footerHTML;
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderFooter);
    } else {
        renderFooter();
    }
})();
