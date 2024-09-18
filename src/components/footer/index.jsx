import React from 'react';
import "../footer/footer.scss";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Footer = ({ activeLink }) => {
  const getButtonStyle = () => {
    switch (activeLink) {
      case '/model-s':
        return 'border border-[#0081FF] text-[#0081FF] bg-transparent hover:bg-[#0081FF] hover:text-white';
      case '/model-3':
        return 'border border-white text-white bg-transparent hover:bg-white hover:text-black';
      case '/model-x':
        return 'border border-[#0081FF] text-[#0081FF] bg-transparent hover:bg-[#0081FF] hover:text-white';
      case '/model-y':
        return 'border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white';
      case '/solar-roof':
        return 'border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white';
      case '/solar-panels':
        return 'border border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white';
      default:
        return 'border border-gray-500 text-gray-500 bg-transparent hover:bg-gray-500 hover:text-white';
    }
  };

  return (
    <footer className="bg-black text-white py-8 footer-margin-top backdrop-opacity-100">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-wrap gap-16 justify-center space-x-8 mb-6 lg:mb-0">
          <div className="text-center flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[24px] font-sf-ui">396 mi</h3>
            <p className="text-sm text-[12px] font-sf-ui">Range (Est.)</p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[24px] font-sf-ui">1.99s</h3>
            <p className="text-sm text-[12px] font-sf-ui">0-60 mph*</p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[24px] font-sf-ui">200 mph</h3>
            <p className="text-sm text-[12px] font-sf-ui">Top Speed*</p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[24px] font-sf-ui">1,020 hp</h3>
            <p className="text-sm text-[12px] font-sf-ui">Peak Power</p>
          </div>
        </div>

        <div className="w-full lg:w-auto text-center">
          <button className={`py-3 px-6 w-full lg:w-auto rounded-full text-[18px] font-sf-ui ${getButtonStyle()}`}>
            Order Now <KeyboardDoubleArrowRightIcon sx={{ fontSize: '30px' }} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
