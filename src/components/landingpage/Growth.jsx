import { Link } from "react-router-dom";
import tag from "../../assets/images/banner/tag.png";
import check from "../../assets/images/campus-store/check.svg";
import campus from "../../assets/images/campus-store/expertise.png";
import AnimatedHeading from "../AnimatedHeading";
const Growth = () => {
	const features = [
		"Strategic store setup & launch support",
		"Staff training and onboarding",
		"Ongoing optimization and revenue strategy",
		"Higher education–ready workflows",
	];

	return (
		<div className="bg-[rgba(10,10,42,0.03)] hasblurrdown lg:py-[90px] py-[50px] px-[20px] relative overflow-hidden">
			<div className="max-w-[1200px] mx-auto w-full relative z-[1]">
				<div className="flex w-full lg:items-center max-lg:flex-col-reverse justify-center lg:gap-[74px] gap-[36px] max-lg:flex-col">
					<div className="lg:flex-1 lg:h-[479px] h-[300px] bg-gradient-to-b from-[#B0C0FF] to-[rgba(239,239,249,0)] rounded-[37px] relative flex items-center justify-center overflow-hidden">
						<img src={campus} className="w-full h-[inherit] object-contain absolute" alt="Campus Store" />
					</div>
					<div className='flex flex-1 text-left flex-col items-start w-full'>
						<div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium text-light leading-5">
							<img className='w-auto h-[16px]' src={tag} alt="tag" />
							<span>
								Your long term partner
							</span>
						</div>
						<div>
							<AnimatedHeading delay={0.05}>
								<h1 className="font-primary font-semibold lg:text-[44px] text-[28px] lg:leading-[61px] leading-[36px] inline-block tracking-[1px] text-text">
									More than software, A Partnership   <span className='font-secondary italic font-normal text-subheading lg:text-[48px] text-[32px]'> For Growth</span>
								</h1>
							</AnimatedHeading>
						</div>
						<ul className="mt-[24px] flex flex-col gap-[18px]">
							{features.map((feature, index) => (
								<li key={index} className="flex items-center gap-[9px]">
									<img src={check} alt="check" />
									<span className="font-medium lg:text-[22px] text-[18px] leading-[1.18182] text-[#222]">{feature}</span>
								</li>
							))}
						</ul>
						<Link to="/pricing" className="mt-[41px] btn-primary">
							Book a Demo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Growth;
