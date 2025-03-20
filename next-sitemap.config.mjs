/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: 'https://www.widestudiodigitale.it',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};