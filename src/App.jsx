import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhyEduSource from './components/landingpage/WhyEduSource';
import AboutUs from './pages/AboutUs';
import HomePage from './components/HomePage';
import Pricing from './pages/Pricing';
import BookDemo from './pages/BookDemo';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/whyedu" element={<WhyEduSource />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/bookdemo" element={<BookDemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
