"use client"
import '@/app/ui/global.css';
import Link from "next/link";
import Image from "next/image";


const Header = () => {
return (

      <header className="left-0 top-0 z-50 pt-8 px-4 w-full border-stroke bg-white dark:border-stroke-dark h:screen/03">
        <div className="container relative max-w-[1330px]">
            <div className="flex flex-row justify-between items-center">
            <div className="lg:py-0 w-3/8">
              <Link href="/" className="block">
                <Image
                  width={300}
                  height={126}
                  src={"/images/logo/TSSHoldingLogo.png"}
                  alt="Logo"
                  priority
                  className="hidden dark:block"
                />
              </Link>               
            </div>
            <div className="w-5/8">
            <h1 className="text-black sm:text-[30px] md:text-[40px] lg:text-[40px] xl:text-[50px] font-bold italic text-center">ALL ELECTRIC <span className="dark:text-green-600">LAWN</span> SERVICE</h1><p className="text-black sm:text-[10px] md:text-[40px] lg:text-[15px] xl:text-[20px] font-bold italic text-center dark:text-green-600">(and more coming soon)</p></div></div></div>
            </header>
        );
};

export default Header;