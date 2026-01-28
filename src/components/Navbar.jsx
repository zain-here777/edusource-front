import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className="fixed lg:top-8 top-[20px] left-[max(20px,calc((100vw-min(calc(100vw-40px),calc(1200px-40px)))/2))] w-[calc(100%-40px)] max-w-[calc(1200px-40px)] h-[76px] bg-white shadow-[19px_-16px_72px_rgba(14,0,53,0.05)] backdrop-blur-sm rounded-[100px] z-50"
      >
        <div className="flex flex-row items-center justify-between h-full lg:px-[20px] px-[17px] w-full">
          {/* Mobile: Logo and Menu Button */}
          <div className="flex items-center lg:hidden w-full justify-between">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img className='w-[100px]' src={logo} alt="logo" />
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-muted hover:text-gray-900 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center w-full">
            {/* Logo - Left side */}
            <div className="flex items-center justify-start">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <img className='w-[170px]' src={logo} alt="logo" />
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="flex flex-1 xl:gap-[40px] lg:gap-[30px] items-center justify-center">
              <Link
                to="/"
                className="text-muted hover:text-[#715DE3]  font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
              >
                Home
              </Link>
              <Link
                to="/whyedu"
                className="text-muted hover:text-[#715DE3]  font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
              >
                Why EduSource
              </Link>
              <Link
                to="/aboutus"
                className="text-muted hover:text-[#715DE3]  font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-muted hover:text-[#715DE3]  font-primary font-normal text-base leading-[22.4px] tracking-normal align-middle transition-colors"
              >
                Pricing
              </Link>
            </div>

            {/* Book Demo Button - Right side, separate */}
            <div className="flex items-center justify-end">
              <Link
                to="/bookdemo"
                className="btn-primary"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-auto">
          {/* Header with Logo and Close button */}
          <div className="flex items-center justify-between px-4 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img className='w-[170px]' src={logo} alt="logo" />
            </Link>
            <button
              onClick={closeMenu}
              className="text-muted hover:text-gray-900 p-2 transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links - Scrollable area */}
          <nav className="flex flex-col flex-1 overflow-auto px-4 py-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-muted hover:text-[#715DE3] px-3 py-3 font-primary font-normal text-base leading-[22.4px] tracking-normal transition-colors border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              to="/whyedu"
              onClick={closeMenu}
              className="text-muted hover:text-[#715DE3] px-3 py-3 font-primary font-normal text-base leading-[22.4px] tracking-normal transition-colors border-b border-gray-100"
            >
              Why EduSource
            </Link>
            <Link
              to="/aboutus"
              onClick={closeMenu}
              className="text-muted hover:text-[#715DE3] px-3 py-3 font-primary font-normal text-base leading-[22.4px] tracking-normal transition-colors border-b border-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/pricing"
              onClick={closeMenu}
              className="text-muted hover:text-[#715DE3] px-3 py-3 font-primary font-normal text-base leading-[22.4px] tracking-normal transition-colors border-b border-gray-100"
            >
              Pricing
            </Link>
            <Link
              to="/bookdemo"
              onClick={closeMenu}
              className="btn-primary mt-4 w-full justify-center"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
