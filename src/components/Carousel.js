import React from 'react'
import Slider from "react-slick";
import ApartmentOneImages from './ApartmentOneImages'
import ApartmentTwoImages from './ApartmentTwoImages'
import ApartmentThreeImages from './ApartmentThreeImages'
import { Image, Title, Icon, CarouselWrap } from '../styles/Carousel.style'

function Carousel({title, floor}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    autoplay: true,
  };

  const findImages = () => {
    if(floor === 1){
      return(ApartmentOneImages)
    } else if (floor === 2){
      return(ApartmentTwoImages)
    } else if(floor === 3) {
      return(ApartmentThreeImages)
    } else {
      return (ApartmentThreeImages)
    }
  }

  return (
    <CarouselWrap>
      <Title>
        <h1>{title}</h1>
        <div>
          <Icon rotate="0" />
          <Icon />
        </div>
      </Title>

      <Slider {...settings}>
        {findImages().map(img =>
          <Image src={img.image} alt="image" />
        )}
      </Slider>
    </CarouselWrap>
  )
}

export default Carousel
