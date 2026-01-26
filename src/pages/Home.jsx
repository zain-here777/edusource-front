import { Link } from 'react-router-dom';
import bannerBg from '../assets/images/banner/bannerbg.png';
import bannerImage from '../assets/images/banner/bannerimage.png';
import tag from '../assets/images/banner/tag.png';
const Home = () => {
  return (
    <div className="min-h-screen hasshade flex items-start justify-center relative overflow-hidden">
      <img className="w-full h-[1164px] bg-brand-gradient  object-cover absolute top-0 left-0" src={bannerBg} alt="banner" />
      <div className="max-w-[1200px] pt-[171px] w-full h-max z-1 flex items-center justify-center">
        <div className='flex flex-col items-center text-center'>
          <div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium text-light leading-5">
            <img className='w-auto h-[16px]' src={tag} alt="tag" />
            <span>
              Campus Commerce Platform
            </span>
          </div>
          <h1 className="font-primary font-semibold text-[64px] leading-[72px] inline-block tracking-[1px] text-text flex-none">
            The Operating System for Modern <br></br>
            Self-Managed <span className='font-secondary italic font-semibold text-[75px]'>Campus Stores</span>
          </h1>
          <p className='text-[18px] mt-4 leading-[30px] font-medium text-dark max-w-[800px]'>
            Run your campus store with more control, more profit, and a frictionless student <br/> experience — all from one platform built for higher education.
          </p>
          <div className='mt-8 flex gap-3'>
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
          <div className='mt-[62px]'>
              <img src={bannerImage} alt="bannerimage" className='object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
