import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Education from './routes/Education';
import ProjectDetail from './routes/ProjectDetail';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100">
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
