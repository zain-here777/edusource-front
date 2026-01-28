import React from 'react';
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white py-[56px] px-[20px]">
      <div className="container mx-auto elative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img className='h-[81px]' src="/footerlogo.png" alt="footerlogo" />
            </div>
            <p className="text-[16px] text-black max-w-[320px] leading-relaxed">
              The technology backbone for modern, self-operated campus stores.
            </p>
            
            <div className="flex gap-4 mt-6">
              {['facebook', 'linkedin', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-11 h-11 rounded-full border border-[#0A0A42] flex items-center justify-center text-[#0A0A42] hover:bg-[#0A0A42] hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FooterColumn title="Products" links={["How It Works", "Pricing", "Install"]} />
            <FooterColumn title="Company" links={["About", "Press", "Contact"]} />
            <FooterColumn title="Legal" links={["Privacy Policy", "Terms of Service"]} />
            <FooterColumn title="Pages" links={["Twitter", "LinkedIn", "Discord"]} />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          <a href="#" className="text-[12px] font-normal text-[--color-light] hover:text-[--color-dark] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[12px] font-normal text-[--color-light] hover:text-[--color-dark] transition-colors">Terms of Service</a>
          <a href="#" className="text-[12px] font-normal text-[--color-light] hover:text-[--color-dark] transition-colors">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-[14px] font-semibold leading-[1.57143] text-[#36383a] mb-5">{title}</h4>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-[14px] font-normal leading-[1.57143] text-[#585c5f] transition-all">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;