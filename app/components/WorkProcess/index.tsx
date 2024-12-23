import React from "react";
import Graphics from "@/app/components/WorkProcess/Graphics";
import Image from "next/image";
import { Feature } from "@/app/types/feature";
import { GiChocolateBar, GiTreasureMap, GiArmorUpgrade } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlinePriceCheck, MdOutlineAddAPhoto  } from "react-icons/md";
import { FaExpandArrowsAlt, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { TbMapPinStar } from "react-icons/tb";

const workProcessData: Feature[] = [
  {
    icon: <GrContact fontSize={44} />,
    src: "",
    title: "You Contact Us",
    description:
      "Use the contact form or call us with your job needs and we'll figure it out for you. We are pretty flexible, but the following steps are optimal.",
  },
  {
    icon: <SiGooglemaps fontSize={44} />,
    src: "",
    title: "We Check Out the Job",
    description:
      "With the address we can get an idea about your job. Most jobs are about $50.",
  },
  {
    icon: <IoMdCheckmark fontSize={44} />,
    src: "",
    title: "Quote Accepted",
    description: "Depending on what you need, we agree on a budget and approx timeline for the job. The payment for the work is taken as a Pre-Auth or advanced payment through bank transfer or PayPal.",
  },
  {
    icon: <IoCheckmarkDoneSharp fontSize={44} />,
    src: "",
    title: "We Get Tech Confirmation",
    description: "The job is scheduled. We send a note to you confirming approximate date/time to complete the job.",
  },
  {
    icon: <MdOutlineAddAPhoto fontSize={44} />,
    src: "",
    title: "Tech Completes Job",
    description: "Out Scooter Squaddie will update us with before and after photos to signify the job is complete."
  },
  {
    icon: <MdOutlinePriceCheck fontSize={44} />,
    src: "",
    title: "Job is Paid For",
    description:
      "We will do a Pre-Auth complete and/or send an updated receipt marked Finalised.",
  },
];

const WorkProcess = () => {
  return (
    <>
      <section id="work-process" className="relative z-10 bg-[#F8FAFB] py-[110px] bg-gradient-3">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              How it works?
            </h2>
            <p className="text-base text-body">
              The e-team is a network of independent mostly non car driving workers who can get your task done quickly and cheaply as they are local.
            </p>
          </div>
        </div>

        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-5 pb-14 pt-14 shadow-card dark:bg-green-600 dark:shadow-card-dark md:pb-1 lg:pb-5 lg:pt-20 xl:px-10">
            <div className="-mx-4 flex flex-wrap justify-center">
              {workProcessData.map((item, index) => (
                <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".2s"
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                      {item.src != "" ? (
                        <Image
                          src={item.src}
                          alt="Logo"
                          width={48}
                          height={48}
                        />
                      ) : (
                        item.icon
                      )}
                      {/* {item.icon} */}
                      {/* <Image src={item.src} alt="Logo" width={48} height={48} /> */}
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="text-base text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*Graphics*/}
        <Graphics />
      </section>
    </>
  );
};

export default WorkProcess;
