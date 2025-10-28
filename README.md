# Sonja Xiao - Interactive Portfolio Website

A modern, interactive portfolio website featuring 3D parallax effects, built with React, Three.js, and Tailwind CSS.

## 🚀 Features

- **Interactive 3D Hero Section**: Eye-catching Three.js animated 3D objects with mouse parallax effects
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with gradient accents and smooth animations
- **Multiple Pages**: Home, Projects, Blog, and Contact pages
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Blog Section**: Platform for sharing insights and experiences
- **Contact Form**: Easy-to-use contact interface with all contact information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
cd sonja-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with responsive menu
│   ├── Hero3D.jsx           # 3D scene with parallax effects
│   ├── About.jsx            # About section
│   ├── Experience.jsx       # Professional experience section
│   ├── Skills.jsx           # Skills and competencies grid
│   ├── Education.jsx        # Education timeline
│   ├── Projects.jsx         # Featured projects component
│   ├── Contact.jsx          # Contact information and form
│   └── Footer.jsx           # Footer with social links
├── pages/
│   ├── Home.jsx             # Main landing page
│   ├── ProjectsPage.jsx     # Full projects page with filtering
│   ├── BlogPage.jsx         # Blog posts listing
│   └── ContactPage.jsx      # Dedicated contact page
├── utils/
│   └── parallax.js          # Parallax effect utilities
├── App.jsx                  # Main app component with routing
└── main.jsx                 # Application entry point
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
  },
  accent: {
    pink: '#ff0099',
    magenta: '#ff00ff',
    orange: '#ff9500',
    blue: '#4080ff',
  }
}
```

### Content

Update personal information in the respective component files:
- **Contact Info**: `src/components/Contact.jsx` and `src/components/Footer.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Education**: `src/components/Education.jsx`
- **Projects**: `src/components/Projects.jsx` and `src/pages/ProjectsPage.jsx`

## 🌟 Key Components

### Hero3D Component

The Hero3D component features:
- Animated 3D geometric objects (cubes, spheres, torus)
- Mouse-tracking parallax rotation
- Smooth transitions using lerp (linear interpolation)
- Optimized for performance with lazy loading

### Responsive Navigation

The Navbar includes:
- Smooth scrolling to sections
- Active link highlighting
- Mobile-friendly hamburger menu
- Glassmorphism effects

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repository for continuous deployment

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🎯 Performance Optimization

- **Code Splitting**: Hero3D component is lazy-loaded
- **Asset Optimization**: Images and assets are optimized
- **Efficient Rendering**: React hooks minimize unnecessary re-renders
- **Three.js Optimization**: Low-poly geometries for better performance

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Sonja Xiao**
- Email: siyux1927@gmail.com
- LinkedIn: [sonja-xiao-37347a241](https://linkedin.com/in/sonja-xiao-37347a241)
- Location: Berlin, Germany

## 🙏 Acknowledgments

- Three.js community for excellent 3D graphics library
- React Three Fiber for React integration
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons

---

Built with ❤️ in Berlin
