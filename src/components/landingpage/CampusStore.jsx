import { Link } from "react-router-dom";
import tag from "../../assets/images/banner/tag.png";
import bannerImage from "../../assets/images/banner/bannerimage.png";
import icon1 from "../../assets/images/whyus/icon-1.png";
import icon2 from "../../assets/images/whyus/icon-2.png";
import icon3 from "../../assets/images/whyus/icon-3.png";
import inventoryIcon from "../../assets/images/campus-store/img-01.png";
import inventoryIcon2 from "../../assets/images/campus-store/img-02.png";
import campus from "../../assets/images/campus-store/campus.png";

const CampusStore = () => {
	const features = [
		{
			icon: inventoryIcon,
			title: "Smart Inventory + POS",
			description: "Track everything from textbooks to merchandise across all locations."
		},
		{
			icon: inventoryIcon2,
			title: "Actionable Analytics",
			description: "Get insights into purchasing patterns, course demand, and profitability."
		},
		{
			icon: inventoryIcon2,
			title: "True Omnichannel Retail",
			description: "Run a modern online store synced with your in-store inventory, including BOPIS"
		}
	];

	return (
		<div className="bg-white py-[90px] px-[20px] relative hasblurr overflow-hidden">
			<div className="max-w-[1200px] mx-auto w-full relative z-[1]">
				<div className="flex items-center justify-center w-full">
					<div className='flex flex-col items-center text-center w-full'>
						<div className="flex mb-[14px] flex-row justify-center items-center py-[11px] pl-[7px] pr-[11px] gap-[7px] h-[28px] bg-gradient-to-br from-[rgba(245,245,245,0)] via-[rgba(245,245,245,0.6)] to-[rgba(245,245,245,0.6)] border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)] drop-shadow-[0px_1px_2px_rgba(82,88,102,0.06)] rounded-[200px] font-medium text-light leading-5">
							<img className='w-auto h-[16px]' src={tag} alt="tag" />
							<span>
								Technology That Scales
							</span>
						</div>
						<div className="flex items-center justify-center gap-4 w-full">
							<div className="flex-1 h-[4px] min-w-[50px] bg-[#EBEAF6] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.1)] rounded-[7px]"></div>
							<h1 className="font-primary font-semibold text-[44px] leading-[61px] inline-block tracking-[1px] text-text px-4">
								The Technology Backbone for Your  <span className='font-secondary  block w-full italic font-normal text-subheading text-[48px]'> Campus Store</span>
							</h1>
							<div className="flex-1 h-[4px] min-w-[50px] bg-[#EBEAF6] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.1)] rounded-[7px]"></div>
						</div>
					</div>
				</div>
				<div className="mt-[52px] flex items-center justify-center gap-[43px]">
					<div className="flex flex-col gap-[44px]">
						{features.map((feature, index) => (
							<div key={index} className={index > 0 ? "border-t border-gray-200 pt-[44px]" : ""}>
								<div className="flex gap-[18px]">
									<div className="w-[64px] flex-none h-[64px] self-start bg-[#E9E8FF] rounded-[106.667px] flex items-center justify-center">
										<img src={feature.icon} className="w-[auto]" alt={feature.title} />
									</div>
									<div className="flex flex-col">
										<h3 className="font-semibold text-[26px] leading-[1.07692] text-[#000052]">{feature.title}</h3>
										<p className="font-normal text-[18px] mt-[8px] leading-[1.66667] text-[#1c1c1c]">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="w-[599px] h-[540px] bg-gradient-to-b from-[#B0C0FF] to-[rgba(239,239,249,0)] rounded-[37px] relative flex items-center justify-center overflow-hidden">
						<img src={campus} className="w-full h-[inherit] object-contain absolute bottom-[-30px]" alt="Campus Store" />		
					</div>
				</div>
			</div>
		</div>
	);
};

export default CampusStore;
