/**
 * CloudHoste Dynamic AOS, Anime.js Auto-Mapping, & Ambient Glow Orb Engine
 * Automatically injects ambient lighting orbs, spawns floating logo-branded hexagons,
 * performs character splitting for hero reveals, and maps AOS attributes at runtime.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject ambient glow orbs for visual depth (similar to Scaleway's UI system)
    injectGlowOrbs();

    // 2. Spawn branded floating hexagons in the hero background
    injectFloatingHexagons();

    // 3. Apply character splitting & spring typography reveal on Hero Heading
    initHeroTypographyReveal();

    // 4. Map AOS attributes to all semantic elements dynamically
    mapAosAttributes();

    // 5. Initialize the AOS engine with premium configuration
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,           // 1s animation duration for smooth flows
            easing: "ease-out-back",  // Premium bouncy exit timing curve
            once: true,               // Only run animations once when scrolling down
            offset: 80,               // Trigger animations 80px before entering viewport
            delay: 0,                 // Default delay
            disableMutationObserver: false
        });
    }

    // 6. Init SVG Outline Drawing animations on viewport entry
    initSvgDrawing();

    // 7. Init Anime.js createLayout auto-morph on pricing section
    initLayoutMorph();

    // 8. Init word-level heading mask reveal engine
    initHeadingRevealEngine();

    // 9. Init dynamic navbar slide-in entrance
    setTimeout(initHeaderEntrance, 120);
});

/**
 * Dynamically injects large, soft radial glow spheres behind primary page sections
 * to create ambient lighting depth without modifying static HTML templates.
 */
function injectGlowOrbs() {
    const mainContent = document.body;
    if (!mainContent) return;

    const sections = Array.from(mainContent.querySelectorAll("section, .hero-3, .section-space-y, .banner-section, .hero-section, .pricing-section-2"));
    const heroSection = sections[0];

    // Hero Section Ambient Glow (Dual-orb system for visual depth)
    if (heroSection) {
        heroSection.style.position = "relative";
        
        // Left Glow Orb (Indigo/Violet)
        const leftOrb = document.createElement("div");
        leftOrb.className = "bg-glow-orb";
        leftOrb.style.top = "-15%";
        leftOrb.style.left = "-20%";
        leftOrb.style.width = "650px";
        leftOrb.style.height = "650px";
        leftOrb.style.background = "radial-gradient(circle, rgba(73, 66, 228, 0.22) 0%, rgba(112, 0, 255, 0.08) 50%, rgba(0,0,0,0) 70%)";
        heroSection.prepend(leftOrb);

        // Right Glow Orb (Purple/Magenta)
        const rightOrb = document.createElement("div");
        rightOrb.className = "bg-glow-orb";
        rightOrb.style.top = "20%";
        rightOrb.style.right = "-20%";
        rightOrb.style.width = "550px";
        rightOrb.style.height = "550px";
        rightOrb.style.background = "radial-gradient(circle, rgba(112, 0, 255, 0.16) 0%, rgba(73, 66, 228, 0.05) 50%, rgba(0,0,0,0) 70%)";
        heroSection.prepend(rightOrb);

        // Fade-in after rendering
        setTimeout(() => {
            leftOrb.classList.add("loaded");
            rightOrb.classList.add("loaded");
        }, 100);
    }

    // Middle Page Ambient Glows (Staggered dynamically down the page layout)
    sections.slice(1).forEach((sec, idx) => {
        if (idx % 2 === 0) {
            sec.style.position = "relative";
            
            const centerOrb = document.createElement("div");
            centerOrb.className = "bg-glow-orb";
            centerOrb.style.top = "50%";
            centerOrb.style.left = "50%";
            centerOrb.style.transform = "translate(-50%, -50%)";
            centerOrb.style.width = "600px";
            centerOrb.style.height = "600px";
            centerOrb.style.background = "radial-gradient(circle, rgba(73, 66, 228, 0.14) 0%, rgba(112, 0, 255, 0.05) 50%, rgba(0,0,0,0) 70%)";
            sec.prepend(centerOrb);

            setTimeout(() => {
                centerOrb.classList.add("loaded");
            }, 200);
        }
    });
}

/**
 * Spawns translucent floating hexagon shapes in the hero background.
 * Uses Anime.js to generate slow, organic loop drift and rotation.
 */
function injectFloatingHexagons() {
    const mainContent = document.body;
    if (!mainContent) return;

    const sections = Array.from(mainContent.querySelectorAll("section, .hero-3, .section-space-y, .banner-section, .hero-section, .pricing-section-2"));
    const heroSection = sections[0];
    if (!heroSection) return;

    // Create a container for the hexagons
    const hexContainer = document.createElement("div");
    hexContainer.style.position = "absolute";
    hexContainer.style.top = "0";
    hexContainer.style.left = "0";
    hexContainer.style.width = "100%";
    hexContainer.style.height = "100%";
    hexContainer.style.overflow = "hidden";
    hexContainer.style.pointerEvents = "none";
    hexContainer.style.zIndex = "1";
    heroSection.prepend(hexContainer);

    // Number of hexagons to spawn
    const hexCount = 5;
    for (let i = 0; i < hexCount; i++) {
        const size = Math.floor(Math.random() * 60) + 40; // Size between 40px and 100px
        const left = Math.floor(Math.random() * 80) + 10; // Position from 10% to 90%
        const top = Math.floor(Math.random() * 60) + 15;  // Position from 15% to 75%
        
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 100 100");
        svg.className = "floating-hexagon";
        svg.style.position = "absolute";
        svg.style.width = `${size}px`;
        svg.style.height = `${size}px`;
        svg.style.left = `${left}%`;
        svg.style.top = `${top}%`;
        svg.style.pointerEvents = "none";
        svg.style.opacity = "0.06"; // Extremely subtle overlay
        svg.style.fill = "#4942e4";

        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", "50,5 90,28 90,72 50,95 10,72 10,28");
        svg.appendChild(polygon);
        
        hexContainer.appendChild(svg);
    }

    // Animate the hexagons with slow, loopable drifting parallax using Anime.js
    if (typeof anime !== "undefined") {
        anime.animate(hexContainer.querySelectorAll(".floating-hexagon"), {
            translateY: () => anime.random(-60, 60),
            translateX: () => anime.random(-60, 60),
            rotate: () => anime.random(-180, 180),
            scale: () => anime.random(0.9, 1.2),
            duration: () => anime.random(10000, 18000),
            delay: () => anime.random(0, 1500),
            alternate: true,
            loop: true,
            ease: "inOutSine"
        });
    }
}

/**
 * Splits the hero heading text into character spans and triggers
 * a premium, spring-based character reveal animation on load.
 */
function initHeroTypographyReveal() {
    const mainContent = document.body;
    if (!mainContent) return;

    const sections = Array.from(mainContent.querySelectorAll("section, .hero-3, .section-space-y, .banner-section, .hero-section, .pricing-section-2"));
    const heroSection = sections[0];
    if (!heroSection) return;

    const heading = heroSection.querySelector("h1, h2.banner-title, .hero-content h1, .col-lg-6 h1");
    if (!heading) return;

    // Exclude standard scroll fades to avoid animation conflicts
    heading.classList.remove("animate-on-scroll", "fade-up");
    heading.removeAttribute("data-aos");

    // Split text into wrapped characters
    const originalText = heading.textContent.trim();
    heading.textContent = "";
    
    // Create fragment for high rendering performance
    const fragment = document.createDocumentFragment();
    for (let char of originalText) {
        const span = document.createElement("span");
        span.className = "hero-letter";
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.textContent = char === " " ? "\u00A0" : char;
        fragment.appendChild(span);
    }
    heading.appendChild(fragment);

    // Animate the letters using Anime.js spring physics
    if (typeof anime !== "undefined") {
        anime.animate(heading.querySelectorAll(".hero-letter"), {
            translateY: [45, 0],
            opacity: [0, 1],
            scale: [0.85, 1],
            delay: anime.stagger(30, { start: 200 }), // 30ms stagger between letters
            duration: 1000,
            ease: "outElastic(1, .6)" // Physics spring ease
        });
    }
}

/**
 * Initializes SVG stroke drawing effects when elements enter the screen.
 */
function initSvgDrawing() {
    if (typeof anime === "undefined") return;

    const svgs = document.querySelectorAll("[data-draw-svg], .data-center-map, .hero-svg");
    
    // Setup observer to draw stroke paths on intersection
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const svg = entry.target;
                const paths = svg.querySelectorAll("path, polygon, circle, rect");
                
                paths.forEach(path => {
                    const stroke = path.getAttribute("stroke");
                    if (stroke && stroke !== "none") {
                        // Prepare elements for drawing outline
                        const pathLength = path.getTotalLength ? path.getTotalLength() : 400;
                        path.setAttribute("stroke-dasharray", pathLength);
                        path.setAttribute("stroke-dashoffset", pathLength);
                        
                        anime.animate(path, {
                            strokeDashoffset: 0,
                            duration: 1800,
                            ease: "inOutSine",
                            delay: anime.random(100, 400)
                        });
                    }
                });
                
                obs.unobserve(svg);
            }
        });
    }, { threshold: 0.1 });

    svgs.forEach(svg => observer.observe(svg));
}

/**
 * Parses the DOM and injects data-aos attributes on common components.
 */
function mapAosAttributes() {
    const mainContent = document.body;
    if (!mainContent) return;

    const sections = Array.from(mainContent.querySelectorAll("section, .hero-3, .section-space-y, .banner-section, .hero-section, .pricing-section-2"));
    const heroSection = sections[0];

    // A. HERO / BANNER ELEMENTS (Timed layout reveals)
    if (heroSection) {
        // Hero Subheading/Paragraph
        const p = heroSection.querySelector("p");
        if (p) {
            p.setAttribute("data-aos", "fade-up");
            p.setAttribute("data-aos-delay", "350"); // Delayed to let the heading reveal finish
            p.setAttribute("data-aos-duration", "1000");
        }

        // Hero CTAs / Forms
        const ctaElements = heroSection.querySelectorAll(".btn, form, .input-group, .hero-buttons, .promo-text, .circular-card-list__item");
        ctaElements.forEach((cta, i) => {
            cta.setAttribute("data-aos", "fade-up");
            cta.setAttribute("data-aos-delay", (500 + (i * 100)).toString());
            cta.setAttribute("data-aos-duration", "1000");
        });

        // Hero Image (Sleek zoom-in or fade slide)
        const heroImg = heroSection.querySelector("img, .banner-img, .hero-img, .hero-image");
        if (heroImg && !heroImg.classList.contains("preloader__img")) {
            heroImg.setAttribute("data-aos", "zoom-in");
            heroImg.setAttribute("data-aos-delay", "450");
            heroImg.setAttribute("data-aos-duration", "1200");
            heroImg.setAttribute("data-aos-easing", "ease-out-back");
        }
    }

    // B. SECTION HEADERS (Titles & Subtitles)
    const sectionHeaders = document.querySelectorAll(".section-space-md-bottom, .text-center .col-md-10, .row.justify-content-center .col-xl-7, .row.justify-content-center .col-lg-8");
    sectionHeaders.forEach(header => {
        if (heroSection && heroSection.contains(header)) return;

        const badge = header.querySelector("span, .text-primary, h6");
        if (badge) {
            badge.setAttribute("data-aos", "fade-up");
            badge.setAttribute("data-aos-duration", "800");
        }

        // Exclude title from simple AOS block fades to let our HeadingRevealEngine morph it word-by-word
        const title = header.querySelector("h2, h3, h4");

        const desc = header.querySelector("p");
        if (desc) {
            desc.setAttribute("data-aos", "fade-up");
            desc.setAttribute("data-aos-delay", "200");
            desc.setAttribute("data-aos-duration", "800");
        }
    });

    // C. CARD GRIDS & GRID COLUMNS (Staggered Entrance)
    const rows = document.querySelectorAll(".row.g-4, .row.gy-4, .row.gx-4, .row.g-6");
    rows.forEach(row => {
        if (heroSection && heroSection.contains(row)) return;

        const cols = Array.from(row.querySelectorAll(":scope > [class*='col-']"));
        if (!cols.length) return;

        cols.forEach((col, index) => {
            const card = col.querySelector(".card, .bg-body, .p-6, .p-4, .rounded-3") || col;
            if (card) {
                card.setAttribute("data-aos", "fade-up");
                card.setAttribute("data-aos-duration", "850");
                
                // Sequential delays (e.g. 0ms, 120ms, 240ms, etc.)
                const delay = Math.min(index * 120, 600);
                card.setAttribute("data-aos-delay", delay.toString());
                card.setAttribute("data-aos-easing", "ease-out-quad");
            }
        });
    });

    // D. FEATURE SPLITS / LEFT-RIGHT CONTENT PAGES (Slide Left/Right reveals)
    const featureSections = sections.slice(1);
    featureSections.forEach(section => {
        const row = section.querySelector(".row");
        if (!row) return;

        const cols = Array.from(row.querySelectorAll(":scope > [class*='col-']"));
        if (cols.length === 2) {
            const leftCol = cols[0];
            const rightCol = cols[1];

            const leftImg = leftCol.querySelector("img, svg, .graphic, .badge-grid");
            const rightText = rightCol.querySelector("h2, h3, p, .list");

            if (leftImg) {
                leftImg.setAttribute("data-aos", "fade-right");
                leftImg.setAttribute("data-aos-duration", "1000");
            } else {
                leftCol.setAttribute("data-aos", "fade-right");
                leftCol.setAttribute("data-aos-duration", "1000");
            }

            if (rightText) {
                rightCol.setAttribute("data-aos", "fade-left");
                rightCol.setAttribute("data-aos-duration", "1000");
                rightCol.setAttribute("data-aos-delay", "150");
            } else {
                rightCol.setAttribute("data-aos", "fade-left");
                rightCol.setAttribute("data-aos-duration", "1000");
                rightCol.setAttribute("data-aos-delay", "150");
            }
        }
    });

    // E. ACCORDIONS / FAQ LISTS (Staggered Reveals)
    const faqLists = document.querySelectorAll(".accordion, .faq-list");
    faqLists.forEach(list => {
        const items = Array.from(list.querySelectorAll(".accordion-item, .faq-item"));
        items.forEach((item, index) => {
            item.setAttribute("data-aos", "fade-up");
            item.setAttribute("data-aos-duration", "800");
            const delay = Math.min(index * 80, 480);
            item.setAttribute("data-aos-delay", delay.toString());
        });
    });

    // F. PRICING DETAILS TABLES AND ROWS (Fade-in or Scale-in)
    const pricingTables = document.querySelectorAll(".table-responsive, table");
    pricingTables.forEach(table => {
        table.setAttribute("data-aos", "fade-in");
        table.setAttribute("data-aos-duration", "1000");
    });
}

/**
 * Initializes Anime.js v4 createLayout morph animation on the pricing cards.
 * Transitions cards from a vertical grid into a clean horizontal list view on click.
 */
function initLayoutMorph() {
    const toggleBtn = document.getElementById("pricing-layout-toggle");
    const gridContainer = document.getElementById("pricing-grid-container");
    if (!toggleBtn || !gridContainer) return;

    // Check if anime.createLayout is loaded
    if (typeof anime === "undefined" || !anime.createLayout) {
        console.warn("Anime.js createLayout is not available in the global scope.");
        return;
    }

    // Initialize AutoLayout on gridContainer
    const layout = anime.createLayout(gridContainer, {
        duration: 850,
        ease: "outQuad"
    });

    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("is-active");
        
        // Execute dynamic FLIP layout morph transition
        layout.update(() => {
            gridContainer.classList.toggle("is-list");
        }, {
            duration: 850,
            delay: anime.stagger(50), // Staggers cards morph start sequentially
            ease: "outQuad"
        });
    });
}

/**
 * Animates the navbar logo, link items, and CTAs sequentially on page load.
 */
function initHeaderEntrance() {
    const header = document.querySelector(".header-wrapper");
    if (!header) return;

    // Trigger base class reveal
    header.classList.add("loaded");

    if (typeof anime === "undefined") return;

    // Select dynamic header targets (excluding logo to keep brand anchor static)
    const navLinks = header.querySelectorAll(".MainNavigation-module-scss-module__3b43fq__categoryButton, .Header-module-scss-module__tB8mKq__links > li, .Header-module-scss-module__tB8mKq__cta a");
    const targets = Array.from(navLinks);

    // Stagger slide-down & fade-in entrance
    anime.animate(targets, {
        translateY: [-15, 0],
        opacity: [0, 1],
        delay: anime.stagger(40, { start: 100 }),
        duration: 800,
        ease: "outQuad"
    });
}

/**
 * Splitting Engine: Splits section headings into words and reveals them
 * sequentially from behind a clipping overflow mask as they scroll into view.
 */
function initHeadingRevealEngine() {
    const headings = document.querySelectorAll("section h2, section h3, section h4, .section-space-y h2, .section-space-y h3, .section-space-y h4");
    if (!headings.length) return;

    headings.forEach(heading => {
        // Skip hero banner title and loader texts
        const isHero = heading.closest(".hero-section, .banner-section, .hero-3");
        const isPreloader = heading.classList.contains("preloader__img");
        if (isHero || isPreloader) return;

        // Clean simple scroll animations to prevent glitches
        heading.classList.remove("animate-on-scroll", "fade-up");
        heading.removeAttribute("data-aos");

        const text = heading.textContent.trim().replace(/\s+/g, " ");
        if (!text) return;

        // Split text into words
        const words = text.split(" ");
        heading.textContent = "";

        const fragment = document.createDocumentFragment();
        words.forEach(word => {
            // Masking container (hides the text before rise)
            const wrapper = document.createElement("span");
            wrapper.className = "reveal-word-wrapper";
            
            // Rising word element
            const inner = document.createElement("span");
            inner.className = "reveal-word-inner";
            inner.textContent = word;
            
            wrapper.appendChild(inner);
            fragment.appendChild(wrapper);
        });
        heading.appendChild(fragment);
    });

    if (typeof anime === "undefined") return;

    // Trigger reveals using an IntersectionObserver on heading scroll entry
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const heading = entry.target;
                const inners = heading.querySelectorAll(".reveal-word-inner");
                
                anime.animate(inners, {
                    translateY: ["105%", "0%"],
                    opacity: [0, 1],
                    delay: anime.stagger(60), // Cascading delay
                    duration: 850,
                    ease: "outExpo"
                });
                
                obs.unobserve(heading);
            }
        });
    }, { threshold: 0.1 });

    headings.forEach(heading => {
        if (heading.closest(".hero-section, .banner-section")) return;
        observer.observe(heading);
    });
}

