import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Home from './routes/Home';
import Education from './routes/Education';
import ProjectDetail from './routes/ProjectDetail';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <div
      className={`relative min-h-screen ${isDark ? 'text-white' : 'bg-[#faf5ff] text-[#1e1033]'}`}
      style={
        isDark
          ? {
              background:
                'radial-gradient(ellipse 90% 55% at 50% -8%, rgba(192,132,252,0.22) 0%, transparent 65%), #000000',
            }
          : undefined
      }
    >
      <Background3D isDark={isDark} />
      <Navbar />
      <main className="pt-20">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
