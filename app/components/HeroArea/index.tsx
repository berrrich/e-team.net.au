"use client";
import Contact from '@/components/contact';
import Image from "next/image";

//import {ContactForm} from '@/components/form';

const HeroArea = () => {

  return (
    <>
      <section id="home" className="relative z-10 bg-[#F8FAFB] pt-[55px] bg-gradient-3">
        <div className="container lg:max-w-[1305px] lg:px-10">
          <div className="-mx-4 flex flex-wrap items-top">
            <div className="w-full px-4 lg:w-6/12">
              <div
                className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                data-wow-delay=".3s"              >

                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[20px] md:text-[30px] lg:text-[22px] xl:text-[40px]">Need it done cheap?
                </h2>                
                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[20px] md:text-[30px] lg:text-[22px] xl:text-[40px]">Call 04 7878 3239 to book in now.
                </h2>
                <p className="mb-2 max-w-[475px] text-base leading-relaxed text-body dark:text-green-400">
                The e-team is an agile here4, professional, and an inexpensive option for household tasks because the e-team is:                
                </p>     
                <ul className="list-disc pl-6">
                  <li>Inexpensive because it doesn&apos;t use utes or petrol equipment.</li>
                  <li>Agile because a member is close by.</li>
                  <li>Professional because e-team members are independent owners rather than hourly rate employees.</li></ul>                   
                <p className="mb-2 max-w-[475px] text-base leading-relaxed text-body dark:text-green-400">
                Currently the e-team can do the following (but growing) list of common home services:                
                </p>          
                <ul className="list-disc pl-6"><li>Lawn cutting.</li><li>Yard and verge clean up.</li><li>House checking/plant watering.</li><li>Pick up dog eggs.</li></ul>  
                <p className="mb-10 max-w-[475px] text-base leading-relaxed text-body dark:text-green-400">
                Send us a message to enquire about a <span className="dark:text-white">free verge cut</span> (conditions apply), or perhaps you have another task not on the list, or, give us a call on <span className="dark:text-white">04 78787 3239</span>.

                </p>


              </div>
            </div>

            <div className="pt-4 w-6/12 pr-[20px]">
              <div
                className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-0 lg:mr-0"
                data-wow-delay=".3s"
              >

                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
