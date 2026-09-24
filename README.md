# WebPro

WebPro is a responsive web agency landing page created as a learning project. It presents a fictional agency’s services, team, portfolio, contact form, and frequently asked questions in a single-page layout.

## Features

- Responsive navigation and page sections for About, Services, Team, Work, Contact, and FAQ
- Service descriptions, team profiles, and example project cards
- Bootstrap-powered navigation and FAQ accordion interactions
- Contact form validation with a client-side confirmation
- Scroll-to-top button

## Built with

- HTML5
- CSS3
- JavaScript
- Bootstrap (local CSS and JavaScript files)

## Run locally

No build tools or package installation are required.

1. Clone or download this repository.
2. Open `index.html` in a browser, or serve the project directory with a local web server.

## Project structure

```text
.
├── index.html          # Single-page site markup
├── css/
│   ├── style.css       # Project styles
│   └── bootstrap.css   # Bootstrap styles
├── js/
│   ├── main.js         # Page interactions and contact form behavior
│   └── bootstrap.bundle.js
└── assets/             # Images, illustrations, icons, and fonts
```

## Contact form behavior

The contact form is a front-end demonstration. On submission, it stores the entered fields in the browser’s `localStorage` under `formData`, displays a confirmation, and clears the form. It does not send messages to a server.

## Author

Mustaf Ismajli
