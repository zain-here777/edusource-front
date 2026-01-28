import { Link } from "react-router-dom";
import tag from "../../assets/images/banner/tag.png";
import check from "../../assets/images/campus-store/check.svg";
import campus from "../../assets/images/campus-store/expertise.png";
const Demo = () => {
	return (
		<div className="radientblue  py-[90px] px-[20px] relative overflow-hidden">
			<div className="max-w-[1200px] mx-auto w-full relative z-[1]">
				<div className='flex flex-col items-center text-center w-full'>
					<div className="flex items-center justify-center gap-4 w-full">
						<h1 className="font-primary font-semibold text-[44px] leading-[66px] inline-block tracking-[1px] text-white px-4">
							Take Control of Your Campus  <span className='font-secondary block w-full italic font-normal text-white text-[48px]'>Commerce Future</span>
						</h1>
					</div>
					<p className='text-[26px] mt-[14px] leading-[38px] font-medium text-white max-w-[800px]'>
						Self-operation is powerful. With the right platform, it’s transformational.
					</p>
					<Link to="/pricing" className="mt-[24px] btn-secondary">
						Schedule Your Custom Demo 
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Demo;
