import Image from 'next/image';
import PropTypes from 'prop-types';
import { Card, CardContent } from "@/components/ui/card";

export default function TourBox({ title, imageSrc, rating, score }) {
    const renderStars = (rating) => {
        // Ensure rating is a valid number and clamp it between 0 and 5
        const validRating = Math.max(0, Math.min(5, parseFloat(rating) || 0));
        const fullStars = Math.floor(validRating); // Number of full stars
        const halfStars = validRating % 1 !== 0 ? 1 : 0; // Number of half stars
        const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

        return (
            <>
                {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                        <svg
                            key={`full-${index}`}
                            className="w-4 h-4 text-yellow-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                        <svg
                            key={`empty-${index}`}
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
            </>
        );
    };

    return (
        <Card className="border-none shadow-none">
            <CardContent className="p-0 relative">
                <Image className="w-full rounded-xl" src={imageSrc} alt={title} />
            </CardContent>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                {title}
            </h5>
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

// Default props
TourBox.defaultProps = {
    title: 'Default Title',
    imageSrc: 'https://via.placeholder.com/150',
    rating: 4.5,
    score: '5.0',
};

// Prop types
TourBox.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    rating: PropTypes.number,
    score: PropTypes.string,
};
