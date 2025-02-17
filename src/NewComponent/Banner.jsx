
import React from 'react'
import slide1 from '../assets/omlete.jpg'
import slide2 from '../assets/vegetable.jpg'
// import slide3 from '../assets/sliderse.jpg'
import slide4 from '../assets/tomato.jpg'
import slide5 from '../assets/tomato2.jpg'
// import img1 from '../assets/'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
export default function Banner() {
  return (
    <AwesomeSlider animation="cubeAnimation">
    {/* <div><img src={slide3} alt="slide1" /></div> */}
    <div><img src={slide5} alt="slide5" /></div>
    <div><img src={slide2} alt="slide2" /></div>
    <div><img src={slide1} alt="slide3" /></div>
    <div><img src={slide4} alt="slide4" /></div>
  </AwesomeSlider>

  )
}

