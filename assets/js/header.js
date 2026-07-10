// Global Header Component
(function() {
    const headerHTML = `<header class="navbar navbar-expand-lg primary-header primary-header--light m-0 border-0">
<div class="container-fluid px-4 px-md-8 px-lg-12 align-items-lg-center">
<a class="logo" href="index.html">
<img alt="Eurohost official brand logo - dark theme" class="logo__img logo__img--light" src="assets/img/logo-dark.svg"/>
<img alt="Eurohost official brand logo - light theme" class="logo__img logo__img--dark" src="assets/img/logo-light.svg"/>
</a>
<button aria-controls="navbar0" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler border-0" data-bs-target="#navbar0" data-bs-toggle="collapse" type="button">
<iconify-icon icon="solar:hamburger-menu-line-duotone"></iconify-icon>
</button>
<nav class="collapse navbar-collapse" id="navbar0">
<ul class="navbar-nav flex-grow-1 justify-content-center mx-lg-4 mb-2 mb-lg-0">
<li class="nav-item">
<a class="nav-link" href="index.html">Home</a>
</li>
<li class="nav-item has-sub-level-1 navigation-3">
<a class="nav-link" href="#">Hosting</a>
<ul class="navigation-3__menu">
<li class="navigation-3__menu-list">
<ul class="list">
<!--
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="vps-hosting.html">
<span class="d-grid place-content-center w-10 h-10 rounded-circle flex-shrink-0 bg-primary">
<iconify-icon class="fs-24 text-light" icon="solar:server-2-broken"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												VPS Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												Get a powerful VPS Hosting plan
											</span>
</span>
</a>
</li>
-->
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="wp-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-dark rounded-circle flex-shrink-0">
<iconify-icon class="fs-24 text-light" icon="ic:sharp-wordpress"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												Wordpress Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												Managed WordPress Hosting for your website
											</span>
</span>
</a>
</li>
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="web-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-info rounded-circle flex-shrink-0">
<iconify-icon class="fs-24 text-light" icon="solar:server-square-cloud-broken"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												Web Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												The tools to level-up your business
											</span>
</span>
</a>
</li>
<!--
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="reseller-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-success rounded-circle flex-shrink-0">
<iconify-icon class="fs-24 text-light" icon="streamline-ultimate:server-share"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												Reseller Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												Secure, speedy, reliable services
											</span>
</span>
</a>
</li>
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="email-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-secondary rounded-circle flex-shrink-0">
<iconify-icon class="fs-24 text-light" icon="mage:email-notification"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												Email Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												Professional address to build brand
											</span>
</span>
</a>
</li>
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="cpanel-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-warning rounded-circle flex-shrink-0">
<iconify-icon class="fs-24 text-light" icon="simple-icons:cpanel"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												cPanel Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												Designed for professionals and agencies
											</span>
</span>
</a>
</li>
-->
<!--
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="n8n-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-danger rounded-circle flex-shrink-0">
<iconify-icon class="fs-24 text-light" icon="solar:routing-broken"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
												n8n Hosting
											</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
												Self-hosted workflow automation servers
											</span>
</span>
</a>
</li>
-->
</ul>
</li>
<li class="navigation-3__menu-list">
<div class="navigation-2__menu-promo bg-primary-subtle-rgb dark:bg-secondary-subtle border border-primary border-opacity-10 rounded p-3 d-flex flex-column gap-4 h-100">
<h6 class="navigation-3__menu-title fs-20 mb-0">
									# 1 Web Hosting Service
								</h6>
<ul class="list gap-3">
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
											Flexibale easy to use control panel
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
<strong>99%</strong> Uptime Guarantee
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
<strong>45 - Day</strong> money back guarantee
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
<strong>Free SSL</strong> certificate included
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
<strong>One-Click</strong> App Installer
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
<strong>24/7</strong> Expert Support
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
<strong>Unlimited</strong> Bandwidth
										</span>
</li>
<li class="d-flex align-items-start gap-1 fs-14">
<iconify-icon class="fs-24 text-success flex-shrink-0" icon="lets-icons:check-fill"></iconify-icon>
<span class="d-block navigation-3__menu-text">
											Free Website Migration
										</span>
</li>
</ul>
<a class="btn btn-secondary align-items-center fs-14 text-light justify-content-center mt-auto" href="#">
									Learn More
									<iconify-icon class="fs-20 flex-shrink-0" icon="lsicon:arrow-right-outline"></iconify-icon>
</a>
</div>
</li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="vps-hosting.html">VPS Hosting</a>
</li>
<li class="nav-item">
<a class="nav-link" href="n8n-hosting.html">n8n Hosting</a>
</li>
<li class="nav-item">
<a class="nav-link" href="domain.html">Domain</a>
</li>
<li class="nav-item">
<a class="nav-link" href="contact.html">Contact Us</a>
</li>
<!--
<li class="nav-item has-sub-level-1 navigation-3">
<a class="nav-link" href="#">Server</a>
<ul class="navigation-3__menu navigation-3__menu-short flex-column">
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="dedicated-server-hosting.html">
<span class="d-grid place-content-center w-10 h-10 bg-info rounded-circle flex-shrink-0">
<iconify-icon class="fs-20 text-white" icon="solar:server-square-cloud-broken"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
										Dedicated Server
									</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
										Multiple interconnected servers to distribute
										resources
									</span>
</span>
</a>
</li>
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="server-location.html">
<span class="d-grid place-content-center w-10 h-10 bg-secondary rounded-circle flex-shrink-0">
<iconify-icon class="fs-20 text-light" icon="solar:server-path-broken"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
										Server Location
									</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
										Choose a server location for optimal performance
									</span>
</span>
</a>
</li>
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="data-center.html">
<span class="d-grid place-content-center w-10 h-10 bg-warning rounded-circle flex-shrink-0">
<iconify-icon class="fs-20 text-light" icon="solar:server-2-outline"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
										All Data Center
									</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
										Explore our global data center locations
									</span>
</span>
</a>
</li>
<li>
<a class="navigation-2__menu-link link d-flex align-items-start gap-3" href="uptime.html">
<span class="d-grid place-content-center w-10 h-10 bg-danger rounded-circle flex-shrink-0">
<iconify-icon class="fs-20 text-light" icon="lucide:server-crash"></iconify-icon>
</span>
<span class="d-block flex-grow-1">
<span class="navigation-2__menu-title d-block fw-bold">
										Server Uptime
									</span>
<span class="navigation-2__menu-text line-clamp line-clamp--2 fs-14">
										Monitor server uptime and performance
									</span>
</span>
</a>
</li>
</ul>
</li>
-->
<!-- <li class="nav-item"><a class="nav-link" href="blog-2.html">Blog</a></li> -->
</ul>
<div class="d-flex align-items-center gap-3 ms-lg-auto">
<a aria-label="Log in to your secure client billing dashboard" class="btn btn-sm btn-primary order-lg-2 fw-semibold" href="sign-in-2.html">
					Sign In
				</a>
<div class="dropdown dropdown-modifier dropdown-xsm order-lg-1">
<button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle px-4 px-lg-0 fs-14 border-0 align-items-center gap-1" data-bs-toggle="dropdown" type="button">
<iconify-icon icon="bi:sun" id="themeDropdownIcon"></iconify-icon>
</button>
<ul class="dropdown-menu dropdown-menu-end dropdown-menu-light mw-unset">
<li>
<button class="dropdown-item d-flex align-items-center gap-2 fs-14" id="lightTheme" type="button">
<span class="d-block flex-shrink-0">
<iconify-icon icon="bi:sun"></iconify-icon>
</span>
<span class="d-block flex-grow-1"> Light </span>
</button>
</li>
<li>
<button class="dropdown-item d-flex align-items-center gap-2 fs-14" id="darkTheme" type="button">
<span class="d-block flex-shrink-0">
<iconify-icon icon="bi:moon-stars"></iconify-icon>
</span>
<span class="d-block flex-grow-1"> Dark </span>
</button>
</li>
</ul>
</div>
</div>
</nav>
</div>
</header>`;
    
    // Inject the header synchronously if script is placed right after placeholder
    const headerEl = document.getElementById('global-header');
    if (headerEl) {
        headerEl.outerHTML = headerHTML;
        
        // Highlight active link based on current path
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const activeLink = document.querySelector(`.navbar-nav a[href="${currentPath}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            // If it's inside a dropdown, we can optionally highlight the dropdown trigger
            const parentDropdown = activeLink.closest('.has-sub-level-1');
            if (parentDropdown) {
                const trigger = parentDropdown.querySelector('.nav-link');
                if (trigger) trigger.classList.add('active');
            }
        }
    }
})();
