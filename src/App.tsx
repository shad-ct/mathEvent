
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Speakers from './pages/Speakers';
import Committees from './pages/Committees';
import Footer from './components/footer';
import Registration from './pages/Register';


const CaldamClone = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-slate-50 font-sans">
        <Navbar />

        <main className="flex-grow max-w-6xl mx-auto px-6 py-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default CaldamClone;