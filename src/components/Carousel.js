import React from 'react'
import Slider from "react-slick";
import ApartmentOneImages from '../img/components/ApartmentOneImages'
import ApartmentTwoImages from '../img/components/ApartmentTwoImages'
import ApartmentThreeImages from '../img/components/ApartmentThreeImages'
import { Title, Image, IconLeft, IconRight, CarouselWrap, Rev, QuoteLeft, QuoteRight } from '../styles/Carousel.style'
import Reviews from '../components/TestimonialsData'

function Carousel({title, floor, width, margin, padding="30px", subTitle, respond=true, slides=4, fontSize, marginTop, apartmentsPage=false, autoplay=true, arrows=false, review=false}) {
    const responsive = () => {
        var settings = [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

        return (respond ? settings : false)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: padding,
        autoplay: autoplay,
        focusOnSelected: true,
        swipe: true,
        swipeToSlide: true,
        nextArrow: arrows && <IconRight />,
        prevArrow: arrows && <IconLeft />,
        responsive: responsive()
    };

    const findImages = () => {
        if(floor === 1){
            return(ApartmentOneImages)
        } else if (floor === 2){
            return(ApartmentTwoImages)
        } else if(floor === 3) {
            return(ApartmentThreeImages)
        } else if (review) {
            return(Reviews)
        } else {
            var allImages = []
            ApartmentThreeImages.map(img => allImages.push(img))
            ApartmentTwoImages.map(img => allImages.push(img))
            ApartmentOneImages.map(img => allImages.push(img))
            return(allImages)
        }
    }

    return (
        <CarouselWrap width={width} margin={margin} marginTop={marginTop} >
            { !apartmentsPage &&
                <Title fontSize={fontSize}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                    </div>
                </Title>
            }

            <Slider {...settings}>
                {findImages().map((event, index) =>
                    review ?
                        <Rev key={index}>
                            <h1>{event.name}</h1>
                            <p><QuoteLeft />{event.said}<QuoteRight /></p>
                        </Rev>
                    :
                        <Image key={index} src={event.image} alt="image" />
                )}
            </Slider>
        </CarouselWrap>
    )
}

export default Carousel
