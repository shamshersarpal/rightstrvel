import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TourSlider from "@/components/TourSlider"; 
import HotelHolidays from "@/components/ui/HotelsandHolidays";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <TourSlider/>
   <HotelHolidays/>
    </>
  );
}
