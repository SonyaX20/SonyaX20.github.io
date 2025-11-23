import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import PodcastAIPMSummary from './pages/PodcastAIPMSummary';
import PodcastFounderLedSales from './pages/PodcastFounderLedSales';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/ai-pm-podcast-summary" element={<PodcastAIPMSummary />} />
          <Route path="/blog/founder-led-sales" element={<PodcastFounderLedSales />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
