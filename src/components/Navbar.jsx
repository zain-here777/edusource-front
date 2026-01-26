import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] h-[76px] bg-white shadow-[19px_-16px_72px_rgba(14,0,53,0.05)] backdrop-blur-sm rounded-[100px] z-50">
      <div className="flex flex-row justify-between items-center h-full px-5 gap-[153.5px]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img className='w-[170px]' src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-[75px] items-center">
          <Link
            to="/"
            className="text-muted hover:text-[#715DE3] px-3 py-2 font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
          >
            Home
          </Link>
          <Link
            to="/whyedu"
            className="text-muted hover:text-[#715DE3] px-3 py-2 font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
          >
            Why EduSource
          </Link>
          <Link
            to="/aboutus"
            className="text-muted hover:text-[#715DE3] px-3 py-2 font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/pricing"
            className="text-muted hover:text-[#715DE3] px-3 py-2 font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/bookdemo"
            className="btn-primary"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-muted hover:text-gray-900 p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
