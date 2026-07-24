(function() {
    const currentPath = window.location.pathname;
    const isIt = currentPath.includes("/it/");
    const isDe = currentPath.includes("/de/");
    const pathPrefix = isIt || isDe ? "../" : "";
    const dsLink = document.createElement("link");
    dsLink.rel = "stylesheet";
    dsLink.href = pathPrefix + "assets/css/design-system.css";
    document.head.appendChild(dsLink);
    const aosLink = document.createElement("link");
    aosLink.rel = "stylesheet";
    aosLink.href = pathPrefix + "assets/css/aos.css";
    document.head.appendChild(aosLink);
    const animLink = document.createElement("link");
    animLink.rel = "stylesheet";
    animLink.href = pathPrefix + "assets/css/animations.css";
    document.head.appendChild(animLink);
    const aosScript = document.createElement("script");
    aosScript.src = pathPrefix + "assets/js/aos.js";
    document.head.appendChild(aosScript);
    const animeScript = document.createElement("script");
    animeScript.src = pathPrefix + "assets/js/anime.min.js";
    document.head.appendChild(animeScript);
    const animScript = document.createElement("script");
    animScript.src = pathPrefix + "assets/js/animations.js";
    animScript.defer = true;
    document.head.appendChild(animScript);

    const headerHTML = '<header class="navbar navbar-expand-lg primary-header primary-header--light m-0 border-0">' +
        '<div class="container-fluid px-4 px-md-8 px-lg-12 align-items-lg-center">' +
        '<a class="logo" href="' + pathPrefix + 'index.html">' +
        '<img width="160" height="35" alt="CloudHoste official brand logo - dark theme" class="logo__img logo__img--light" src="' + pathPrefix + 'assets/img/logo-dark.svg"/>' +
        '<img width="160" height="35" alt="CloudHoste official brand logo - light theme" class="logo__img logo__img--dark" src="' + pathPrefix + 'assets/img/logo-light.svg"/>' +
        '</a>' +
        '<button aria-controls="navbar0" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler border-0" data-bs-target="#navbar0" data-bs-toggle="collapse" type="button">' +
        '<iconify-icon icon="solar:hamburger-menu-line-duotone"></iconify-icon>' +
        '</button>' +
        '<nav class="collapse navbar-collapse" id="navbar0">' +
        '<ul class="navbar-nav flex-grow-1 justify-content-center mx-lg-4 mb-2 mb-lg-0">' +
        '<li class="nav-item"><a class="nav-link" href="index.html" data-i18n="nav.home">Home</a></li>' +
        '<li class="nav-item has-sub-level-1 navigation-3">' +
        '<a class="nav-link" href="#" data-i18n="nav.hosting">Hosting</a>' +
        '<ul class="navigation-3__menu">' +
        '<li class="navigation-3__menu-list">' +
        '<ul class="list">' +
        '<li><a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="wp-hosting.html"><span class="d-grid place-content-center w-10 h-10 bg-dark rounded-circle flex-shrink-0"><iconify-icon class="fs-24 text-light" icon="ic:sharp-wordpress"></iconify-icon></span><span class="d-block flex-grow-1"><span class="navigation-2__menu-title d-block fw-bold" data-i18n="services.wpTitle">Wordpress Hosting</span><span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">Managed WordPress Hosting for your website</span></span></a></li>' +
        '<li><a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="web-hosting.html"><span class="d-grid place-content-center w-10 h-10 bg-info rounded-circle flex-shrink-0"><iconify-icon class="fs-24 text-light" icon="solar:server-square-cloud-broken"></iconify-icon></span><span class="d-block flex-grow-1"><span class="navigation-2__menu-title d-block fw-bold" data-i18n="services.webTitle">Web Hosting</span><span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">The tools to level-up your business</span></span></a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="navigation-3__menu-list">' +
        '<div class="navigation-2__menu-promo bg-primary-subtle-rgb dark:bg-secondary-subtle border border-primary border-opacity-10 rounded p-3 d-flex flex-column gap-4 h-100">' +
        '<h6 class="navigation-3__menu-title fs-20 mb-0"># 1 Web Hosting Service</h6>' +
        '<ul class="list gap-3">' +
        '<li class="d-flex align-items-start gap-1 fs-14"><iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon><span class="d-block navigation-3__menu-text">Flexible easy to use control panel</span></li>' +
        '<li class="d-flex align-items-start gap-1 fs-14"><iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon><span class="d-block navigation-3__menu-text"><strong>99%</strong> Uptime Guarantee</span></li>' +
        '<li class="d-flex align-items-start gap-1 fs-14"><iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon><span class="d-block navigation-3__menu-text"><strong>30 - Day</strong> money back guarantee</span></li>' +
        '<li class="d-flex align-items-start gap-1 fs-14"><iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon><span class="d-block navigation-3__menu-text"><strong>Free SSL</strong> certificate included</span></li>' +
        '<li class="d-flex align-items-start gap-1 fs-14"><iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon><span class="d-block navigation-3__menu-text"><strong>24/7</strong> Expert Support</span></li>' +
        '</ul>' +
        '<a class="btn btn-secondary align-items-center fs-14 text-light justify-content-center mt-auto" href="web-hosting.html">Learn More <iconify-icon class="fs-20 flex-shrink-0" icon="lsicon:arrow-right-outline"></iconify-icon></a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="nav-item"><a class="nav-link" href="vps-hosting.html" data-i18n="nav.vps">VPS Hosting</a></li>' +
        '<li class="nav-item"><a class="nav-link" href="n8n-hosting.html" data-i18n="nav.n8n">n8n Hosting</a></li>' +
        '<li class="nav-item has-sub-level-1 navigation-3">' +
        '<a class="nav-link" href="#" data-i18n="nav.domain">Domain</a>' +
        '<ul class="navigation-3__menu navigation-3__menu-short flex-column">' +
        '<li><a class="navigation-2__menu-link link d-flex align-items-center gap-3" href="domain.html"><span class="d-grid place-content-center w-8 h-8 bg-primary rounded-circle flex-shrink-0"><iconify-icon class="fs-16 text-white" icon="solar:globus-outline"></iconify-icon></span><span class="navigation-2__menu-title fw-bold">Domain Registration</span></a></li>' +
        '<li><a class="navigation-2__menu-link link d-flex align-items-center gap-3" href="https://my.cloudhoste.eu/cart.php?a=add&domain=transfer"><span class="d-grid place-content-center w-8 h-8 bg-warning rounded-circle flex-shrink-0"><iconify-icon class="fs-16 text-white" icon="solar:refresh-broken"></iconify-icon></span><span class="navigation-2__menu-title fw-bold">Domain Transfer</span></a></li>' +
        '<li><a class="navigation-2__menu-link link d-flex align-items-center gap-3" href="https://my.cloudhoste.eu/index.php?rp=/domain/pricing"><span class="d-grid place-content-center w-8 h-8 bg-success rounded-circle flex-shrink-0"><iconify-icon class="fs-16 text-white" icon="solar:tag-price-broken"></iconify-icon></span><span class="navigation-2__menu-title fw-bold">Domain Pricing</span></a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="nav-item"><a class="nav-link" href="https://my.cloudhoste.eu/contact.php" data-i18n="nav.contact">Contact Us</a></li>' +
        '</ul>' +
        '<div class="d-flex align-items-center gap-3 ms-lg-auto">' +
        '<a aria-label="Log in to your secure client billing dashboard" class="btn btn-sm btn-primary order-lg-2 fw-semibold" href="https://my.cloudhoste.eu/clientarea.php" data-i18n="nav.signIn">Sign In</a>' +
        '<div class="dropdown order-lg-1">' +
        '<button class="btn btn-link text-decoration-none dropdown-toggle d-flex align-items-center gap-1" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--bs-heading-color);">' +
        '<iconify-icon id="currentLangIcon" icon="twemoji:flag-united-kingdom"></iconify-icon> <span id="currentLangText" class="ms-1" style="font-size:14px; font-weight:600;">EN</span>' +
        '</button>' +
        '<ul class="dropdown-menu dropdown-menu-end shadow-sm border-0" aria-labelledby="langDropdown">' +
        '<li><a class="dropdown-item d-flex align-items-center gap-2" href="javascript:void(0)" onclick="changeLanguage(\'en\')"><iconify-icon icon="twemoji:flag-united-kingdom"></iconify-icon> English</a></li>' +
        '<li><a class="dropdown-item d-flex align-items-center gap-2" href="javascript:void(0)" onclick="changeLanguage(\'de\')"><iconify-icon icon="twemoji:flag-germany"></iconify-icon> Deutsch</a></li>' +
        '<li><a class="dropdown-item d-flex align-items-center gap-2" href="javascript:void(0)" onclick="changeLanguage(\'it\')"><iconify-icon icon="twemoji:flag-italy"></iconify-icon> Italiano</a></li>' +
        '</ul>' +
        '</div>' +
        '<button aria-label="Toggle theme mode" class="theme-toggle-btn order-lg-1 ms-1" id="themeToggleBtn" type="button" title="Switch Theme"><iconify-icon icon="bi:moon-stars" id="themeDropdownIcon"></iconify-icon></button>' +
        '</div>' +
        '</nav>' +
        '</div>' +
        '</header>';
        
    const headerEl = document.getElementById("global-header");
    if (headerEl) {
        headerEl.outerHTML = headerHTML;
        const filename = currentPath.split("/").pop() || "index.html";
        const activeLink = document.querySelector(`.navbar-nav a[href="${filename}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
            const parentDropdown = activeLink.closest(".has-sub-level-1");
            if (parentDropdown) {
                const trigger = parentDropdown.querySelector(".nav-link");
                if (trigger) trigger.classList.add("active");
            }
        }
        document.querySelectorAll(".has-sub-level-1 > a.nav-link").forEach(function(trigger) {
            trigger.addEventListener("click", function(e) {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    const parent = this.closest(".has-sub-level-1");
                    document.querySelectorAll(".has-sub-level-1.is-open").forEach(function(openParent) {
                        if (openParent !== parent) openParent.classList.remove("is-open");
                    });
                    parent.classList.toggle("is-open");
                }
            });
        });
    }
})();