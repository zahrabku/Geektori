import React, { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "./Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


interface ICarousel {
  items: React.ReactNode;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <Button icon={faArrowRight} className='button__plus'/>,
  prevArrow: <Button icon={faArrowLeft} className='button__plus'/>,
};

const Carousel: FC<ICarousel> = (props) => {
  console.log(props.items);

  return <Slider {...settings}>{props.items}</Slider>;
};

export default Carousel;
