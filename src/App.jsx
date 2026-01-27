import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyEdu from './pages/WhyEdu';
import StoreModal from './pages/StoreModal';
import Pricing from './pages/Pricing';
import BookDemo from './pages/BookDemo';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whyedu" element={<WhyEdu />} />
            <Route path="/aboutus" element={<StoreModal />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/bookdemo" element={<BookDemo />} />
          </Routes>
          <WhyEdu/>
          <StoreModal />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
