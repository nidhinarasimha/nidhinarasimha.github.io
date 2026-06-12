import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Education from './routes/Education';
import ProjectDetail from './routes/ProjectDetail';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-800'}`}
      style={
        isDark
          ? {
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), radial-gradient(ellipse 90% 55% at 50% -8%, rgba(125,211,252,0.12) 0%, transparent 60%)',
              backgroundColor: '#000000',
              backgroundSize: '24px 24px, 100% 100%',
            }
          : {
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), radial-gradient(ellipse 90% 55% at 50% -8%, rgba(56,189,248,0.15) 0%, transparent 60%)',
              backgroundColor: '#e2e8f0',
              backgroundSize: '24px 24px, 100% 100%',
            }
      }
    >
      <Navbar />
      <main className="pt-20">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
