import Image from 'next/image';
import PropTypes from 'prop-types';
import { Card, CardContent } from "@/components/ui/card";

export default function HotelBox({ imageSrc, title, location, rating, score }) {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;

        return (
            <>
                {Array.from({ length: fullStars }).map((_, index) => (
                    <span key={index} className="text-yellow-500">★</span>
                ))}
                {halfStar && <span className="text-yellow-500">☆</span>}
            </>
        );
    };

    return (
        <Card className="border-none shadow-none">
            <CardContent className="p-0 relative">
                <Image className="w-full rounded-xl" src={imageSrc} alt={title} width={500}  height={500}/>
            </CardContent>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                {title}
            </h5>
            <p className="text-sm text-muted-foreground text-gray-500">
                {location}
            </p>
            <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {renderStars(rating)}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {score}
                </span>
            </div>
        </Card>
    );
}

// Define PropTypes for the component
HotelBox.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
