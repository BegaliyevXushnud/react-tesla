import React from 'react';
import "../footer/footer.scss"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 footer-margin-top">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Statistics */}
        <div className="flex flex-wrap justify-center space-x-8 mb-6 lg:mb-0">
          <div className="text-center">
            <h3 className="text-3xl font-bold">396 mi</h3>
            <p className="text-sm">Range (Est.)</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">1.99s</h3>
            <p className="text-sm">0-60 mph*</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">200 mph</h3>
            <p className="text-sm">Top Speed*</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">1,020 hp</h3>
            <p className="text-sm">Peak Power</p>
          </div>
        </div>

        {/* Order Button */}
        <div className="w-full lg:w-auto text-center">
          <button className="bg-blue-600 text-white py-3 px-6 w-full lg:w-auto rounded-full hover:bg-blue-700">
            Order Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
