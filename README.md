# Abdulwassi Abdulrahman - Portfolio Website

A modern, responsive portfolio website for Backend PHP Developer Abdulwassi Abdulrahman, built with React, Tailwind CSS, and modern web technologies.

## 🌟 Features

### Design & User Experience
- **Modern & Professional Design**: Clean, minimal design with professional color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### Sections Included
1. **Hero Section**: Professional introduction with call-to-action buttons
2. **About Me**: Professional background and technical skills showcase
3. **Portfolio**: Grid layout showcasing 6 projects with hover effects
4. **Experience & Education**: Timeline-style layout for work history and education
5. **Contact**: Contact form with social media links
6. **Footer**: Professional footer with quick links and social icons

### Technical Features
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Shadcn/UI**: High-quality UI components
- **Lucide Icons**: Beautiful, consistent iconography
- **Smooth Scrolling Navigation**: Anchor-based navigation with smooth scrolling
- **Form Validation**: Client-side form validation for contact form
- **Local Storage**: Theme preference persistence

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## 📁 Project Structure

```
abdulwassi-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx      # About Me section
│   │   ├── Contact.jsx    # Contact section
│   │   ├── Experience.jsx # Experience & Education
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navigation.jsx # Navigation header
│   │   ├── Portfolio.jsx  # Portfolio section
│   │   └── ui/            # Shadcn/UI components
│   ├── App.jsx            # Main App component
│   ├── App.css            # Custom styles and animations
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

### Development
Start the development server:
```bash
npm run dev
# or
pnpm dev
```

The website will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.jsx` - Name, title, and tagline
- `src/components/About.jsx` - Professional background and skills
- `src/components/Portfolio.jsx` - Your projects and portfolio items
- `src/components/Experience.jsx` - Work experience and education
- `src/components/Contact.jsx` - Contact information and social links
- `src/components/Footer.jsx` - Footer content and links

### Styling
- **Colors**: Modify the color scheme in `src/App.css` and Tailwind classes
- **Animations**: Customize animations in `src/App.css`
- **Layout**: Adjust component layouts in individual component files

### Adding Projects
To add new projects to the portfolio:
1. Open `src/components/Portfolio.jsx`
2. Add new project objects to the `projects` array
3. Include: title, description, image, technologies, and links

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The website includes a sophisticated dark/light mode toggle:
- Automatic detection of system preference
- Manual toggle in navigation
- Persistent user preference storage
- Smooth transitions between themes

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Responsive design
- Accessible form labels
- Success/error messaging

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue.

## 📞 Contact

**Abdulwassi Abdulrahman**
- Email: abdulwassi@example.com
- LinkedIn: [linkedin.com/in/abdulwassi](https://linkedin.com/in/abdulwassi)
- GitHub: [github.com/abdulwassi](https://github.com/abdulwassi)

---

Built with ❤️ using React and Tailwind CSS

