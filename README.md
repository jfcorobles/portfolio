# Portfolio Resume App

This is a personal portfolio web application showcasing my resume, projects, and contact information. The app is built with Angular and supports multiple languages (English and Spanish) using ngx-translate.

## Features

- 🌐 **Multi-language support**: Switch between English and Spanish languages seamlessly.
- 📄 **Resume download**: Download the resume PDF in the selected language.
- 📱 **Responsive design**: Optimized for desktop and mobile devices.
- 🔗 **Navigation**: Easy navigation through home, resume, projects, and contact sections.
- 🔧 **Built with Angular standalone components** and follows best practices for maintainability.
- 📈 **SEO Optimized**: Each route sets its own meta tags and title dynamically. Sitemap and robots.txt are generated and included automatically for search engine indexing.

## Technologies Used

- Angular (standalone components)
- ngx-translate for internationalization (i18n)
- Bootstrap 5 for styling and responsive layout
- TypeScript, HTML, CSS

## Usage

1. Select your preferred language from the dropdown menu in the navbar.
2. Navigate to the Resume section to view your experience and skills.
3. Click the **Download Resume** button to download the PDF in the chosen language.

## SEO Integration

To improve discoverability by search engines:

- Each page sets dynamic `<title>` and `<meta>` description tags using Angular's `Title` and `Meta` services.
- A `sitemap.xml` is automatically generated and includes the main routes of the application.
- A `robots.txt` is included to allow search engine crawlers and references the sitemap.
