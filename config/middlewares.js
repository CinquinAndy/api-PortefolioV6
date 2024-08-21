module.exports = ({env}) => {
    return [
        "strapi::errors",
        {
            name: "strapi::security",
            config: {
                cors: {},
                contentSecurityPolicy: {
                    useDefaults: true,
                    directives: {
                        "connect-src": ["'self'", "https:"],
                        "img-src": [
                            "'self'",
                            "data:",
                            "blob:",
                            env("CF_PUBLIC_ACCESS_URL")?.replace(/^https?:\/\//, ""),
                        ],
                        "media-src": [
                            "'self'",
                            "data:",
                            "blob:",
                            env("CF_PUBLIC_ACCESS_URL")?.replace(/^https?:\/\//, ""),
                        ],
                        upgradeInsecureRequests: null,
                    },
                },
            },
        },
        {
            name: 'strapi::cors',
            config: {
                // this is for my local obsidian plugin, export one note to strapi, as an article
                // origin: ['app://obsidian.md'],
                // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
                // headers: ['Content-Type', 'Authorization'],
                origin: ["*"],
                methods: ["*"],
                headers: ["*"]
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
