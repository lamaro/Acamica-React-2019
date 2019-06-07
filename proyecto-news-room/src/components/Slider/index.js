import React from "react";
import Slider from "react-slick";
import SliderItem from '../SliderItem'

class SimpleSlider extends React.Component {
  constructor(props){
    super(props)
    console.log(props.data)
    this.state = {
      news: props.data
    }
    
  }

  render() {
    const destacadas = this.state.news.map(destacada =>{
      console.log(destacada)
      return (<SliderItem data={destacada}/>)
    })
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {destacadas}
      </Slider>
    );
  }
}

export default SimpleSlider