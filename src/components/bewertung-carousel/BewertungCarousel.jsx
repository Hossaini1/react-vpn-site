import './bewertung-carousel.scss';
import { useState, useEffect } from "react";
import useAboBewertungContext from "../../store/AboBewertungContext";

const BewertungCarousel = () => {
    const { reviews } = useAboBewertungContext();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth > 578 ? 2 : 1);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth > 578 ? 2 : 1);
            setItemsPerPage(window.innerWidth > 1024 ? 3 : 1);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(reviews.length / itemsPerPage);

    const nextSlide = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {reviews && (
                <div className="carousel-container">
                    <div className="slider" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
                        {reviews.map((review, index) => (
                            <div key={review.id} className="slide">
                                <div className="card">
                                    <div className="card-header">
                                        <img src={review.avatar} alt={review.name} className="avatar" />
                                        <div>
                                            <h6 className="name">{review.name}</h6>
                                            <p className="location">{review.location}</p>
                                        </div>
                                        <span className="rating">⭐ {review.rating}</span>
                                    </div>
                                    <p className="review">{review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={prevSlide} className="prev" disabled={currentIndex === 0}>&#10094;</button>
                    <button onClick={nextSlide} className="next" disabled={currentIndex === totalSlides - 1}>&#10095;</button>

                    <div className="dots">
                        {reviews.map((_, index) => (
                            <span 
                                key={index} 
                                className={`dot ${index === currentIndex ? 'activeDot' : ''}`} 
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default BewertungCarousel;