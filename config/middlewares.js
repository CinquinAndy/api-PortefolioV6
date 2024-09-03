module.exports = ({env}) => {
    return [
        "strapi::errors",
        {
            name: "strapi::security",
            config: {
                contentSecurityPolicy: {
                    useDefaults: true,
                    directives: {
                        "connect-src": ["'self'", "https:", "app:"],
                        "img-src": [
                            "'self'",
                            "data:",
                            "blob:",
                            env("CF_PUBLIC_ACCESS_URL")?.replace(/^https?:\/\//, ""),
                            "app:",
                        ],
                        "media-src": [
                            "'self'",
                            "data:",
                            "blob:",
                            env("CF_PUBLIC_ACCESS_URL")?.replace(/^https?:\/\//, ""),
                            "app:",
                        ],
                        upgradeInsecureRequests: null,
                    },
                },
            },
        },
        {
            name: 'strapi::cors',
            config: {
                origin: ['app://obsidian.md', 'http://localhost:1420', 'capacitor://localhost', 'http://localhost'],
                methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
                headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
                keepHeaderOnError: true,
            },
        },
        "strapi::poweredBy",
        "strapi::logger",
        "strapi::query",
        "strapi::body",
        "strapi::session",
        "strapi::favicon",
        "strapi::public",
    ];
};