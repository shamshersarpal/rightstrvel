import PropTypes from "prop-types";
import Image from "next/image";

export default function HolidaysSpecial({ imageSrc, title, description, tag, buttonText, link }) {
    return (
        <section>
            <div className="container">
                <a
                    href={link}
                    className="flex mt-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <Image
                            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                            src={imageSrc}
                            alt="image"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal md:w-1/2">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                {description}
                            </p>
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                                {tag}
                            </span>
                            <div className="mt-auto">
                                <button
                                    type="button"
                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

// Prop Types
HolidaysSpecial.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
