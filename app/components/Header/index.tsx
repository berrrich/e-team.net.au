"use client"
import '@/app/ui/global.css';
import Link from "next/link";
import Image from "next/image";


const Header = () => {
return (

      <header className="navbar left-0 top-0 z-50 pt-8 px-4 w-full border-stroke bg-white dark:border-stroke-dark">
        <div className="container relative max-w-[1305px]">
            <div className="flex items-center justify-between">
            <div className="block pl-4 lg:py-0">
              <Link href="/" className="block max-h-[90px] max-w-[229px] sm:max-w-[229px]">
                <Image
                  width={229}
                  height={90}
                  src={"/images/logo/TSSHoldingLogo.png"}
                  alt="Logo"
                  priority
                  className="hidden dark:block"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>               
            </div>
            <div><h1 className="dark:text-green-200 sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px] font-bold italic">ALL ELECTRIC LAWN SERVICE</h1></div></div></div>
            </header>
        );
};

export default Header;