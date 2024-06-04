import React, { useState } from "react";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Rifat Ahmed",
        title: "Textile Engineer",
        image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        rating: 5
    },
    {
        name: "Abu Yusuf",
        title: "Professor",
        image: "https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        rating: 5
    },
    {
        name: "Arif Mollah",
        title: "Textile Engineer",
        image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        rating: 5
    },
    {
        name: "Abu Bakar Bilal",
        title: "Professor",
        image: "https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        rating: 5
    },
    // Add more testimonials as needed
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
        );
    };

    return (
        <div className="px-4">
            <div className="text-center space-y-2 md:space-y-4">
                <h2 className="text-error text-xl tracking-wider ">Testimonials</h2>
                <h4 className="text-xl md:text-3xl font-bold">What Customers Say</h4>
                <p className="lg:max-w-lg mx-auto px-4 capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-4">
                <button onClick={handlePrev} className="text-2xl">
                    <FaArrowLeft />
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
                    {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                        <div key={index} className="w-96 lg:w-full p-8 border border-gray-500 space-y-4 rounded-md">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <div className="w-12">
                                        <img className="rounded-full" src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold">{testimonial.name}</p>
                                        <p>{testimonial.title}</p>
                                    </div>
                                </div>
                                <div className="text-4xl text-orange-400"><FaQuoteRight /></div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm">{testimonial.text}</p>
                                <div>
                                    <div className="rating">
                                        {[...Array(5)].map((star, i) => (
                                            <input
                                                key={i}
                                                type="radio"
                                                name={`rating-${index}`}
                                                className="mask mask-star bg-orange-400"
                                                checked={i < testimonial.rating}
                                                readOnly
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="text-2xl">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
