import React from "react";
//import FooterBottom from "@/app/components/Footer/FooterBottom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="relative bg-[#F8FAFB] py-[0px] bg-gradient-3">
          <div className="container max-w-[1390px]">
            
          </div>
        </div>
        <div className="relative z-10 bg-[#F8FAFB] py-[60px] bg-gradient-3">
        <div className="container max-w-[1390px]">
          <div className="-mx-3 flex flex-wrap">
            <div className="order-last w-full px-3 lg:order-first">
              <p className="text-center text-base text-white lg:mt-0 lg:text-center">
                &copy; 2025 the e-team. All rights reserved
              </p>
            </div>


          </div>
        </div>
      </div>
        {/* <FooterBottom /> */}
      </footer>
    </>
  );
};

export default Footer;