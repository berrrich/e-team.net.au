import type { Metadata } from "next";
import Header from "@/app/components/Header";
import HeroArea from "@/app/components/HeroArea";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import WorkProcess from "@/app/components/WorkProcess";
//import Contact from '@/components/contact';
export const metadata: Metadata = {
  title: "e-team.net.au",
  description:
    "Get your tasks completed today without all the hoopla.",
};
export default function Home() {
  return (
    <>
    <Header />   
    <HeroArea />
    <WorkProcess />
    <Faq />
    <Footer />
    </>
  );
}