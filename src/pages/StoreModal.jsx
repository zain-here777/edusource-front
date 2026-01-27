import { Link } from "react-router-dom";
import tag from "../assets/images/banner/tag.png";
import bannerImage from "../assets/images/banner/bannerimage.png";
import icon1 from "../assets/images/storemodal/Variant-1.png";
import icon2 from "../assets/images/storemodal/Variant-2.png";
import icon3 from "../assets/images/storemodal/Variant-3.png";
const StoreModal = () => {
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
    <div className="bg-[#F7F7F7] pt-[35px] pb-[159px] px-[20px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full relative z-[1]">
        <div className="flex items-center justify-center w-full">
         <div className='flex  justify-between gap-5 items-start text-center w-full'>
            <div className="flex flex-1 flex-col">
              <div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium w-max text-light leading-5">
                <img className='w-auto h-[16px]' src={tag} alt="tag" />
                <span>
                  Flexible Solutions
                </span>
              </div>
              <div className="flex items-start justify-start gap-4 w-full">
                <h1 className="font-primary font-semibold text-[44px] leading-[61px] inline-block tracking-[1px] text-text">
                Built for Every Campus <span className='font-secondary block text-left italic font-normal text-subheading text-[48px]'>Store Model</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col max-w-[376px]">
              <p className='text-[18px] text-left  leading-[30px] font-medium text-dark'>
              Supports brick‑and‑mortar, virtual, and hybrid retail experiences. Built for Every Campus Store model.
              </p>
              <Link to="/contact" className="btn-primary text-[18px] mt-[33px] leading-[32px] w-max!">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[65px]">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col justify-center items-start p-[21px]  bg-gradient-to-b from-[#F3F2FF] to-[#FFFFFF] border-[5px] border-white shadow-[0px_0.796192px_0.796192px_-1px_rgba(0,0,0,0.04),0px_2.41451px_2.41451px_-2px_rgba(0,0,0,0.04),0px_6.38265px_6.38265px_-3px_rgba(0,0,0,0.03),0px_20px_20px_-4px_rgba(0,0,0,0.01),inset_0px_0px_1px_1px_#FFFFFF] rounded-[16px] box-border">
              <h3 className="font-primary font-semibold text-[26px] leading-[28px] flex items-center text-[#000052]">
                {card.title}
              </h3>
              <p className="font-primary text-[16px] mt-[12px] leading-[30px] text-text">
                {card.description}
              </p>
               
                <img src={card.icon} alt={card.title} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreModal;
