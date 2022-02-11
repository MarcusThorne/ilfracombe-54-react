import React from 'react'
import Slider from "react-slick";
import ApartmentOneImages from '../img/components/ApartmentOneImages'
import ApartmentTwoImages from '../img/components/ApartmentTwoImages'
import ApartmentThreeImages from '../img/components/ApartmentThreeImages'
import { Title, Image, IconLeft, IconRight, CarouselWrap, Rev, QuoteLeft, QuoteRight } from '../styles/Carousel.style'
import Reviews from '../components/TestimonialsData'

function Carousel({title, floor, width, margin, padding="30px", subTitle, respond=true, slides=4, fontSize, marginTop, apartmentsPage=false, autoplay=true, arrows=false, review=false}) {
    const responsive = () => {
      // repsonsive carousel with slick
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

    // slick carousel settings
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
        responsive: responsive(),
        arrows: arrows
    };

<<<<<<< HEAD
    // only select the images for the carousel based on what floor you're on or not on
=======
    // function to return the correct image folder based on passed values
>>>>>>> 952db948e382607a44fd22d77710f8e11be83e6f
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
            {/* if not on apartment page return a title and sub-title */}
            { !apartmentsPage &&
              // has a title and subtitle if the page is something other than apartments page
                <Title fontSize={fontSize}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                    </div>
                </Title>
            }

            <Slider {...settings}>
                {findImages().map((event, index) =>
                    // id review is true return the revies
                    review ?
                      // for reviews only shows name and review
                        <Rev key={index}>
                            <h1>{event.name}</h1>
                            <p><QuoteLeft />{event.said}<QuoteRight /></p>
                        </Rev>
                    :
<<<<<<< HEAD
                      // else it shows the an image per slide
=======
                    // else return images
>>>>>>> 952db948e382607a44fd22d77710f8e11be83e6f
                        <Image key={index} src={event.image} alt="image" />
                )}
            </Slider>
        </CarouselWrap>
    )
}

export default Carousel
