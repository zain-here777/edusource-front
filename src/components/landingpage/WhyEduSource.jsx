import { Link } from "react-router-dom";
import tag from "../../assets/images/banner/tag.png";
import bannerImage from "../../assets/images/banner/bannerimage.png";
import icon1 from "../../assets/images/whyus/icon-1.png";
import icon2 from "../../assets/images/whyus/icon-2.png";
import icon3 from "../../assets/images/whyus/icon-3.png";

const WhyEduSource = () => {
  const cards = [
    {
      icon: icon1,
      title: "Keep More Revenue On Campus",
      description: "Maximize margins and reinvest directly into student programs"
    },
    {
      icon: icon2,
      title: "Full Operational Control", 
      description: "From pricing to promotions, you decide everything"
    },
    {
      icon: icon3,
      title: "A Better Student Experience",
      description: "Build a welcoming, service-focused store students trust."
    }
  ];

  return (
    <div className="bg-white pt-[35px] pb-[159px] px-[20px] relative hasblurr overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full relative z-[1]">
        <div className="flex items-center justify-center w-full">
         <div className='flex flex-col items-center text-center w-full'>
            <div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium text-light leading-5">
              <img className='w-auto h-[16px]' src={tag} alt="tag" />
              <span>
                Why Us
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="flex-1 h-[4px] min-w-[50px] bg-[#EBEAF6] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.1)] rounded-[7px]"></div>
              <h1 className="font-primary font-semibold lg:text-[44px] text-[28px] lg:leading-[61px] leading-[36px] inline-block tracking-[1px] text-text px-4">
                Why Schools Choose <span className='font-secondary italic font-normal text-subheading lg:text-[48px] text-[32px]'>EduSource</span>
              </h1>
              <div className="flex-1 h-[4px] min-w-[50px] bg-[#EBEAF6] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.1)] rounded-[7px]"></div>
            </div>
            <p className='lg:text-[18px] text-[16px] mt-[14px] lg;leading-[30px] leading-[20px] font-medium text-dark max-w-[800px]'>
             Why Modern Institutions Choose EduSource
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[65px]">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-white shadow-[0px_1px_2px_rgba(69,69,69,0.24),0px_0px_0px_1px_rgba(71,71,71,0.08)] rounded-[24px]">
              <div className="flex flex-col justify-center items-center py-3 w-[52px] h-[52px] bg-white shadow-[0px_1px_2px_rgba(69,69,69,0.24),0px_0px_0px_1px_rgba(71,71,71,0.08)] rounded-[99px] flex-grow-0">
                <img src={card.icon} alt={card.title} className="w-[28px] h-[28px] object-contain" />
              </div>
              <h3 className="font-primary font-semibold text-[22px] mt-[19px] leading-[32px] text-text">
                {card.title}
              </h3>
              <p className="font-primary text-[18px] mt-[12px] leading-[32px] text-muted">
                {card.description}
              </p>
              <Link to="/contact" className="font-primary btn-secondary text-[18px] mt-[19px] leading-[32px] text-primary w-full!">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyEduSource;
