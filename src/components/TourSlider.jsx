import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TourOne from "@/images/c1.jpg";
import TourTwo from "@/images/c2.jpg";
import TourThree from "@/images/c3.jpg";
import TourFour from "@/images/c4.jpg";
import TourFive from "@/images/c5.jpg";

import TourBox from "./TourBox";

export default function TourSlider() {
  const slides = [
    {
      title: "Africa tours",
      imageSrc: TourOne,
      rating: 4.8,
      score: "4.8",
    },
    {
      title: "Asia tours",
      imageSrc: TourTwo,
      rating: 4.7,
      score: "4.7",
    },
    {
      title: "Europe tours",
      imageSrc: TourThree,
      rating: 4.9,
      score: "4.9",
    },
    {
      title: "Middle East tours",
      imageSrc: TourFour,
      rating: 4.6,
      score: "4.6",
    },
    {
      title: "America tours",
      imageSrc: TourFive,
      rating: 4.5,
      score: "4.5",
    },
  ];

  return (
    <>
      <div className="container py-20 px-4">
        <div className="max-w-screen-xl   mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            
          </div>
          <Carousel
            className="max-w-screen-xl mx-auto "
            opts={{
              align: "start",
            }}
          ><div className="pb-10">
              <h2 className="text-4xl font-bold">Popular Destinations</h2>
            </div>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <TourBox
                      title={slide.title}
                      imageSrc={slide.imageSrc}
                      rating={slide.rating}
                      score={slide.score}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:block md:block">
            <CarouselPrevious  />
            <CarouselNext />
            </div>
            
          </Carousel>
        </div>
      </div>
    </>
  );
}
