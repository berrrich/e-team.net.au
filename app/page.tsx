import type { Metadata } from "next";
import Header from "@/app/components/Header";
import HeroArea from "@/app/components/HeroArea";
import Faq from "@/components/Faq";
import Footer from "@/app/components/Footer";
//import Contact from '@/components/contact';
export const metadata: Metadata = {
  title: "The Scooter Squad",
  description:
    "The signup website for retailers to access their dashboards and drop specials interface.",
};
export default function Home() {
  return (
    <>
    <Header />   
    <HeroArea />
    <Faq />
    <Footer />
    </>
  );
}