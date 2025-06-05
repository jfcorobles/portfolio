const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, copyFileSync } = require('fs');
const path = require('path');

(async () => {
    const distPath = path.resolve(__dirname, 'dist/portfolio/browser');
    const sitemap = new SitemapStream({ hostname: 'https://jfcorobles.github.io/portfolio' });

    const urls = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/portfolio/resume', changefreq: 'monthly', priority: 0.8 },
        { url: '/portfolio/projects', changefreq: 'monthly', priority: 0.8 },
        { url: '/portfolio/contact', changefreq: 'monthly', priority: 0.6 }
    ];

    const writeStream = createWriteStream(path.join(distPath, 'sitemap.xml'));

    sitemap.pipe(writeStream);

    urls.forEach(u => sitemap.write(u));
    sitemap.end();

    await streamToPromise(sitemap);
    console.log('Sitemap generated at dist/portfolio/sitemap.xml');

    const robotsSrc = path.resolve(__dirname, 'robots.txt');
    const robotsDest = path.join(distPath, 'robots.txt');
    copyFileSync(robotsSrc, robotsDest);
    console.log('robots.txt copied to dist/portfolio');
})();
