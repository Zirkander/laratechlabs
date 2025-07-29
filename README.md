# LarATECH Labs

A modern, minimalist website for LarATECH Labs - Building the future, one innovation at a time.

## Features

- Modern, edgy design with cyan accent colors
- Responsive layout that works on all devices
- Contact form with email functionality
- Fast performance with optimized bundle size
- Built with React and Vite

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Zirkander/laratechlabs.git
cd laratechlabs
```

2. Install dependencies:
```bash
npm install
```

3. Set up email functionality (EmailJS):
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{to_email}}` - Will be set to zirkander@lawrencecox.net
     - `{{from_name}}` - Sender's full name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{reply_to}}` - Reply-to email address
   - Copy `.env.example` to `.env` and fill in your EmailJS credentials:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your EmailJS values

4. Run the development server:
```bash
npm run dev
```

## Deployment

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to AWS or any static hosting service.

## Technologies Used

- React
- Vite
- React Router
- EmailJS for contact form
- CSS with custom properties
