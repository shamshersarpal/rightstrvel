import PropTypes from "prop-types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = ({ heading, reviews, carouselOptions }) => {
    return (
        <section className="pt-20 pb-0 px-4 ">
            <div className="container   px-4">
                <div className="pb-10 text-center">
                    <h2 className="text-4xl font-bold">{heading}</h2>
                </div>
                <Carousel
                    className="max-w-screen-xl mx-auto"
                    opts={{ align: carouselOptions?.align || "start", loop: true, autoplay: true }}
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg:basis-1/3"
                            >
                                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {review.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {review.title}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        {review.text}
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                className={`w-5 h-5 ${starIndex < review.rating
                                                        ? "text-yellow-500"
                                                        : "text-gray-300"
                                                    }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden xl:block md:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

Testimonials.propTypes = {
    heading: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    carouselOptions: PropTypes.shape({
        align: PropTypes.string,
    }),
};

Testimonials.defaultProps = {
    heading: "Client Reviews",
    reviews: [],
    carouselOptions: {
        align: "start",
    },
};

const reviews = [
    {
        name: "Kathy",
        title: "Review Australia New Zealand",
        text: "Medhat, Local office answers did a superlative job with the actual workings of the itinerary for my trip to Australia/New Zealand. Royale Limousines' drivers were always on time and courteous. Guides, especially, John, in Sydney, were excellent.",
        rating: 4,
    },
    {
        name: "Jerry & Adele, Bob & Carol",
        title: "Client Reviews China",
        text: "We all had an excellent time!!!! 'Rose', our guide (full name Yue Xia), took great care of us. In addition to speaking excellent English, she was knowledgeable, experienced, friendly and extremely efficient.",
        rating: 5,
    },

    {
        name: "Kathy",
        title: "Client Reviews Iceland",
        text: "The Hotel Borg was wonderful - my room (walk-in shower, of course!), the front desk personnel, the hotel location.  I was very pleased.  The tours of out town were really interesting.  As you will read below, my favorite and the highlight was the tour of the glacier ice tunnel.  The bus transportation was always on time.",
        rating: 5,
    },

    {
        name: "Jerry & Adele, Bob & Carol",
        title: "Client Reviews China",
        text: "We all had an excellent time!!!! 'Rose', our guide (full name Yue Xia), took great care of us. In addition to speaking excellent English, she was knowledgeable, experienced, friendly and extremely efficient.",
        rating: 5,
    },
];

export default function App() {
    return (
        <div>
            <Testimonials
                heading="What Our Clients Say"
                reviews={reviews}
                carouselOptions={{ align: "center" }}
            />
        </div>
    );
}
