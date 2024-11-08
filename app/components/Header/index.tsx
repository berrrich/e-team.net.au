"use client"
import '@/app/ui/global.css';
import Link from "next/link";
import Image from "next/image";


const Header = () => {
return (

      <header className="navbar left-0 top-0 z-50 pt-8 px-4 w-full border-stroke bg-white dark:border-stroke-dark">
        <div className="container relative max-w-[1330px]">
            <div className="flex flex-row justify-between items-center">
            <div className="lg:py-0 w-3/8">
              <Link href="/" className="block">
                <Image
                  width={400}
                  height={115}
                  src={"/images/logo/TSSHoldingLogo.png"}
                  alt="Logo"
                  priority
                  className="hidden dark:block"
                />
              </Link>               
            </div>
            <div className="w-5/8">
            <h1 className="text-black sm:text-[50px] md:text-[50px] lg:text-[42px] xl:text-[50px] font-bold italic text-center">ALL ELECTRIC LAWN SERVICE</h1></div></div></div>
            </header>
        );
};

export default Header;