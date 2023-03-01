import React, { useState, useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
import 'swiper/css';
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const SwiperComponent = ({ slides = [], currentSlide, onSlideChange, showButtons = true }) => {
    const [activeIndex, setActiveIndex] = useState(currentSlide || 0);
    const [currentIndex, setCurrentIndex] = useState(activeIndex);
    const ref = useRef(null);
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });

    useEffect(() => {
        setActiveIndex(currentSlide || 0);
    }, [currentSlide]);

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        setCurrentIndex(activeIndex);
        onSlideChange && onSlideChange(activeIndex);
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % slides.length);
    };

    if (intersection && intersection.intersectionRatio === 1 && activeIndex !== currentIndex) {
        setCurrentIndex(activeIndex);
        onSlideChange && onSlideChange(activeIndex);
    }

    return (
        <div className="swiper-container" ref={ref}>
            <Swiper
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <img src={slide} alt={`${i}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {showButtons && (
                <>
                    <button className="swiper-button-prev" onClick={handlePrev}>
                        Prev
                    </button>
                    <button className="swiper-button-next" onClick={handleNext}>
                        Next
                    </button>
                    <div className="swiper-thumbnails">
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`swiper-thumbnail ${activeIndex === i ? 'active' : ''}`}
                                onClick={() => setActiveIndex(i)}
                            >
                                <img src={slide} alt={`${i}`} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SwiperComponent;
