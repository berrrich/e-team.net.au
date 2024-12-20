"use client"
import '@/app/ui/global.css';
import Link from "next/link";
import Image from "next/image";


const Header = () => {
return (

      <header className="left-0 top-0 z-50 pt-0 px-4 w-full border-stroke bg-white dark:border-stroke-dark h:screen/03 w-4/8">
        <div className="container relative max-w-[1330px]">
            <div className="flex flex-row justify-between items-center">
            <div className="lg:py-2 w-3/8">
              <Link href="/" className="block">
                <Image
                  width={210}
                  height={40}
                  src={"/images/logo/e-team_Logo.png"}
                  alt="Logo"
                  priority
                  className="hidden dark:block"
                />
              </Link>               
            </div>
            <div className="w-4/8">
            <h1 className="text-black sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[40px] font-bold italic text-center">ALL ELECTRIC ODD JOB SQUAD</h1></div></div></div>
            </header>
        );
};

export default Header;