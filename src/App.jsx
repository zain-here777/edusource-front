import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyEdu from './components/landingpage/WhyEdu';
import StoreModal from './components/landingpage/StoreModal';
import Pricing from './pages/Pricing';
import BookDemo from './pages/BookDemo';
import CampusStore from './components/landingpage/CampusStore';
import Growth from './components/landingpage/Growth';
import Demo from './components/landingpage/Demo';
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
          <CampusStore />
          <Growth/>
          <Demo/>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
