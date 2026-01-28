import { Link } from "react-router-dom";
import tag from "../../assets/images/banner/tag.png";
import bannerImage from "../../assets/images/banner/bannerimage.png";
import icon1 from "../../assets/images/storemodal/Variant-1.png";
import icon2 from "../../assets/images/storemodal/Variant-2.png";
import icon3 from "../../assets/images/storemodal/Variant-3.png";
import AnimatedHeading from "../AnimatedHeading";
const StoreModel = () => {
  const cards = [
    {
      icon: icon1,
      title: "Inclusive Access Made Simple",
      description: "Automate enrollments, billing, opt-outs, and publisher reporting."
    },
    {
      icon: icon2,
      title: "Unified Commerce Engine", 
      description: "One system for physical textbooks, digital materials, merchandise, and retail."
    },
    {
      icon: icon3,
      title: "Frictionless Student Journey",
      description: "A seamless experience for renting, shopping, or ordering online."
    }
  ];

  return (
    <div className="bg-[#F7F7F7] py-[73px] px-[20px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full relative z-[1]">
        <div className="flex items-center justify-center w-full">
         <div className='flex  justify-between gap-5 lg:items-start items-center text-center w-full max-lg:flex-col max-lg:gap-5'>
            <div className="flex flex-1 flex-col">
              <div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium w-max text-light leading-5 max-lg:mx-auto  ">
                <img className='w-auto h-[16px]' src={tag} alt="tag" />
                <span>
                  Flexible Solutions
                </span>
              </div>
              <div className="w-full lg:text-left text-center">
                <AnimatedHeading delay={0.05}>
                  <h1 className="font-primary font-semibold lg:text-[44px] text-[28px] lg:leading-[61px] leading-[36px] inline-block tracking-[1px] text-text">
                  Built for Every Campus <span className='font-secondary block w-full italic font-normal text-subheading lg:text-[48px] text-[32px]'>Store Model</span>
                  </h1>
                </AnimatedHeading>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-[376px] max-w-[80%] max-lg:items-center">
              <p className='text-[18px] lg:text-left text-center leading-[30px] font-medium text-dark'>
              Supports brick‑and‑mortar, virtual, and hybrid retail experiences. Built for Every Campus Store model.
              </p>
              <Link to="/contact" className="btn-primary text-[18px] mt-[33px] leading-[32px] w-max!">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[44px]">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col justify-center items-start p-[18px]  bg-gradient-to-b from-[#F3F2FF] to-[#FFFFFF] border-[5px] border-white shadow-[0px_0.796192px_0.796192px_-1px_rgba(0,0,0,0.04),0px_2.41451px_2.41451px_-2px_rgba(0,0,0,0.04),0px_6.38265px_6.38265px_-3px_rgba(0,0,0,0.03),0px_20px_20px_-4px_rgba(0,0,0,0.01),inset_0px_0px_1px_1px_#FFFFFF] rounded-[16px] box-border">
              <h3 className="font-primary font-semibold text-[26px] leading-[28px] flex items-center text-[#000052]">
                {card.title}
              </h3>
              <p className="font-primary text-[16px] lg:mt-[15px] mt-[8px] leading-[30px] text-text">
                {card.description}
              </p>
                <img src={card.icon} alt={card.title} className="h-[295px] w-full mt-[20px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreModel;
