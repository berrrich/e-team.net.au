"use client";
import Contact from '@/components/contact';

//import {ContactForm} from '@/components/form';

const HeroArea = () => {

  return (
    <>
      <section id="home" className="relative z-10 bg-[#F8FAFB] py-[55px] bg-gradient-3">
        <div className="container lg:max-w-[1305px] lg:px-10">
          <div className="-mx-4 flex flex-wrap items-top">
            <div className="w-full px-4 lg:w-7/12">
              <div
                className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                data-wow-delay=".3s"              >

                <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]">
                Inexpensive and Emissions Free? </h1>
                <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]">What more do you need?
                </h1>
                <p className="mb-2 max-w-[475px] text-base leading-relaxed text-body dark:text-green-400">
                No need for petrol guzzling utes and noisy smelly mowers, the Scooter Squad uses cordless electric lawn tools to keep the air clean, and the <span className="dark:text-white">costs to a minimum</span>. 
                </p>                
                <p className="mb-2 max-w-[475px] text-base leading-relaxed text-body dark:text-green-400">
                EScooters are more than toys or personal transports, with a trailer, they are <span className="dark:text-white">money making machines. Contact us to find out more</span>. 
                </p>
                <p className="mb-10 max-w-[475px] text-base leading-relaxed text-body dark:text-green-400">
                Send us a message to enquire about a <span className="dark:text-white">free verge cut</span> (conditions apply). Or, give me, Richa, a call on <span className="dark:text-white">04 78787 3239</span>.
                </p>


              </div>
            </div>

            <div className="w-full px-4 pt-4 lg:w-5/12">
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
