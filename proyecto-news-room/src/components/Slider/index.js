import React from "react";
import Slider from "react-slick";
import NewsItem from '../NewsItem'
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </Slider>
    );
  }
}

export default SimpleSlider