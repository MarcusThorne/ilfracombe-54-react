import React from 'react'
import Slider from "react-slick";
import Images from './ApartmentImages'
import { Image, Title, Icon, CarouselWrap } from '../styles/Carousel.style'

function Carousel() {
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

  return (
    <CarouselWrap>
      <Title>
        <h1>Apartments</h1>
        <div>
          <Icon rotate="0" />
          <Icon />
        </div>
      </Title>

      <Slider {...settings}>
        {Images.map(img =>
          <Image src={img.image} alt="image" />
        )}
      </Slider>
    </CarouselWrap>
  )
}

export default Carousel
