// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'it',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    force_consent: false,                   // default: false
    hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },
    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },
    languages: {
        'it': {
            consent_modal: {
                title: 'Salve, vuole un biscottino?',
                description: 'Ciao, questo sito usa cookies essenziali per il funzionamento tecnico e la comprensione delle interazioni con il sito. Questi ultimi saranno attivati solo dopo aver accettato . <button type="button" data-cc="c-settings" class="cc-link">Maggiori informazioni</button>',
                primary_btn: {
                    text: 'Accetta',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rifiuta',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Preferenze sui Cookie',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accetta tutti',
                reject_all_btn: 'Riufiuta tutti',
                close_btn_label: 'Chiudi',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Dominio'},
                    {col3: 'Scadenza'},
                    {col4: 'Descrizione'}
                ],
                blocks: [
                    {
                        title: 'Utilizzo dei cookies 📢',
                        description: 'I cookie sono utilizzati per assicurare le funzionalitá base e migliorare l esperienza degli utenti. Puoi scegliere di accettare ogni categoria in base alle tue preferenze. '
                    }, {
                        title: 'Cookies Necessari',
                        description: 'Questi cookies sono essenziali per il funzionamento del sito ',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: 'CookieConsent',
                                col2: 'adrianoamalfi.com',
                                col3: '-',
                                col4: 'Salvataggio preferenze cookies.',
                            }, 
                            {
                                col1: 'ghost-members-ssr',
                                col2: 'adrianoamalfi.com',
                                col3: '-',
                                col4: 'Gestione della membership.',
                            }, 
                            {
                                col1: 'plausible',
                                col2: 'adrianoamalfi.com',
                                col3: '-',
                                col4: 'Monitoraggio',
                            }, 
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '-',
                                col4: 'Google Analytics Anonimizzato',
                            }
                        ]
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'Questi cookie consentono il monitaggio del sito',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '-',
                                col4: 'Google Analytics Anonimizzato',
                            }
                        ]
                    }, {
                        title: 'Pubblicitá',
                        description: 'Questi cookies raccolgono informazioni sull utilizzo del sito web. Tutti i dati sono anomizzati e non possono essere utilizzati per identificare',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Altre informazioni',
                        description: 'Per altri informazioni consultare la pagina <a class="cc-link" href="/about">About</a>.',
                    }
                ]
            }
        }
    }
});