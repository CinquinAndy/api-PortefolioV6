module.exports = ({env}) => {
    var ssl = env("S3_SSL", "false") === "true" ? "https://" : "http://";
    const s3url = new URL(ssl + env("S3_ENDPOINT"));
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
                        "img-src": ["'self'", "data:", "blob:", s3url.host],
                        "media-src": ["'self'", "data:", "blob:", s3url.host],
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
