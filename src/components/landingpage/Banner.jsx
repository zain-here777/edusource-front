import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import bannerBg from '../../assets/images/banner/bannerbg.png';
import bannerImage from '../../assets/images/banner/bannerimage.png';
import tag from '../../assets/images/banner/tag.png';
const Banner = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    
    const initTilt = () => {
      if (tiltNode && window.innerWidth >= 1024) {
        if (!tiltNode.vanillaTilt) {
          VanillaTilt.init(tiltNode, {
            max: 3,
            speed: 300,
            glare: true,
            'max-glare': 0.2,
          });
        }
      } else if (tiltNode && tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };

    // Initialize on mount
    initTilt();

    // Handle resize
    const handleResize = () => {
      initTilt();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (tiltNode && tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen hasshade   relative overflow-hidden">
      <div className='hasshadow w-full h-full flex items-start justify-center'>
        <img className="w-full z-[-1] h-[1164px] bg-brand-gradient  object-cover absolute top-0 left-0" src={bannerBg} alt="banner" />
        <div className="max-w-[1200px] lg:pt-[171px] pt-[120px] px-[20px] w-full h-max z-1 flex items-center justify-center">
          <div ref={tiltRef} className='flex flex-col items-center text-center'>
            <div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium text-light leading-5">
              <img className='w-auto h-[16px]' src={tag} alt="tag" />
              <span>
                Campus Commerce Platform
              </span>
            </div>
            <h1 className="font-primary font-semibold lg:text-[64px] text-[28px] lg:leading-[72px] leading-9 inline-block tracking-[1px] text-text flex-none">
              The Operating System for Modern <br></br>
              Self-Managed <span className='max-lg:w-full max-lg:block font-secondary italic font-semibold lg:text-[75px] text-[28px] lg:leading-[72px] leading-9'>Campus Stores</span>
            </h1>
            <p className='lg:text-[18px] text-[16px] mt-4 lg:leading-[30px] leading-[20px] font-medium text-dark max-w-[800px]'>
              Run your campus store with more control, more profit, and a frictionless student <br/> experience — all from one platform built for higher education.
            </p>
            <div className='mt-8 flex gap-3 justify-center flex-wrap'>
              <Link
                  to="/bookdemo"
                  className="btn-primary"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/learnmore"
                  className="btn-secondary"
                >
                Learn more
                </Link>
            </div>
            <div className='lg:mt-[62px] mt-[20px]'>
                <img src={bannerImage} alt="bannerimage" className='object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
