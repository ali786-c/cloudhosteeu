/**
 * CloudHoste i18n Translation Engine
 */

(function () {
    const DEFAULT_LANG = 'en';
    let currentLang = localStorage.getItem('selected_language') || DEFAULT_LANG;
    let translations = {};

    // Determine path prefix (for pages in subdirectories like /it/ or /de/)
    const currentPath = window.location.pathname;
    const isSubdir = currentPath.includes("/it/") || currentPath.includes("/de/");
    const pathPrefix = isSubdir ? "../" : "";

    /**
     * Fetch translation JS file
     */
    async function loadTranslations(lang) {
        return new Promise((resolve) => {
            if (window.locales && window.locales[lang]) {
                resolve(window.locales[lang]);
                return;
            }
            const script = document.createElement('script');
            script.src = `${pathPrefix}assets/locales/${lang}.js`;
            script.onload = () => {
                resolve(window.locales[lang]);
            };
            script.onerror = () => {
                console.warn(`Translation file for ${lang} not found.`);
                resolve(null);
            };
            document.head.appendChild(script);
        });
    }

    /**
     * Resolve nested JSON keys (e.g., "hero.title")
     */
    function resolveKey(obj, path) {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    }

    /**
     * Apply translations to DOM
     */
    function applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = resolveKey(translations, key);
            
            if (translation) {
                // If it's an input/textarea with placeholder, translate placeholder instead
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', translation);
                    }
                } else {
                    // Check if it contains HTML (like <strong> tags)
                    if (translation.includes('<')) {
                        el.innerHTML = translation;
                    } else {
                        el.innerText = translation;
                    }
                }
            }
        });
    }

    /**
     * Initialize i18n engine
     */
    async function initI18n() {
        translations = await loadTranslations(currentLang) || {};
        applyTranslations();
        
        // Update language switcher UI if it exists
        updateLanguageSwitcherUI(currentLang);
    }

    /**
     * Change language dynamically
     */
    window.changeLanguage = async function (lang) {
        if (lang === currentLang) return;
        
        currentLang = lang;
        localStorage.setItem('selected_language', lang);
        
        translations = await loadTranslations(lang) || {};
        applyTranslations();
        updateLanguageSwitcherUI(lang);
    };

    /**
     * Update Language Switcher Dropdown Text/Icon
     */
    function updateLanguageSwitcherUI(lang) {
        const langIcon = document.getElementById('currentLangIcon');
        const langText = document.getElementById('currentLangText');
        
        if (!langIcon || !langText) return;
        
        if (lang === 'en') {
            langIcon.setAttribute('icon', 'twemoji:flag-united-kingdom');
            langText.innerText = 'EN';
        } else if (lang === 'de') {
            langIcon.setAttribute('icon', 'twemoji:flag-germany');
            langText.innerText = 'DE';
        } else if (lang === 'it') {
            langIcon.setAttribute('icon', 'twemoji:flag-italy');
            langText.innerText = 'IT';
        }
    }

    // Export translations globally for dynamically injected components
    window.t = function(key) {
        return resolveKey(translations, key) || key;
    };
    
    window.applyTranslations = applyTranslations;

    // Run on DOM loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }
})();
