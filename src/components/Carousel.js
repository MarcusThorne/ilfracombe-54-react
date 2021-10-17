import React from 'react'
import Slider from "react-slick";
import ApartmentOneImages from '../img/components/ApartmentOneImages'
import ApartmentTwoImages from '../img/components/ApartmentTwoImages'
import ApartmentThreeImages from '../img/components/ApartmentThreeImages'
import { Image, Title, Icon, CarouselWrap } from '../styles/Carousel.style'

function Carousel({title, floor, width, margin, subTitle, respond=true, slides=4}) {
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
    centerPadding: '30px',
    autoplay: true,
    focusOnSelected: true,
    swipe: true,
    swipeToSlide: true,
    responsive: responsive()
  };

  const findImages = () => {
    if(floor === 1){
      return(ApartmentOneImages)
    } else if (floor === 2){
      return(ApartmentTwoImages)
    } else if(floor === 3) {
      return(ApartmentThreeImages)
    } else {
      var allImages = []
      ApartmentThreeImages.map(img => allImages.push(img))
      ApartmentTwoImages.map(img => allImages.push(img))
      ApartmentOneImages.map(img => allImages.push(img))
      return(allImages)
    }
  }

  return (
    <CarouselWrap width={width} margin={margin} >
      <Title>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h1>{title}</h1>
          <p style={{ marginTop: "-1.5rem", fontSize: "14px", color: "#D9AB57"}}>{subTitle}</p>
        </div>
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
