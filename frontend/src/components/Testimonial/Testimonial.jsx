import React from 'react';
import './testimonial.css';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';






const Testimonial = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p className='test__desc'>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since we got in touch with you, we could see your commitment of making our 
            trip memorable and the best it could be. It was indeed a smooth sailing for us. Everything was available to us at ease. </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img  src={ava01} className='w-25 h-25 rounded-2' alt="image" />
                <div>
                    <h6 className="mb-0 mt-3">Anurag p</h6>
                    <p className='test__role'>Customer</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className='test__desc'>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since we got in touch with you, we could see your commitment of making our 
            trip memorable and the best it could be. It was indeed a smooth sailing for us. Everything was available to us at ease.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img className='w-25 h-25 rounded-2' src={ava02} alt="image" />
                <div>
                    <h6 className="mb-0 mt-3">laya </h6>
                    <p className='test__role'>Customer</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className='test__desc'>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since
             we got in touch with you, we could see your commitment of making our  trip memorable and the best it
              could be. It was indeed a smooth sailing for us. Everything was available to us at ease.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img className='w-25 h-25 rounded-2' src={ava03} alt="image" />
                <div>
                    <h6 className="mb-0 mt-3">Ronaldo</h6>
                    <p className='test__role'>Customer</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className='test__desc'>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since we got in touch with you, we could see your commitment of making our 
            trip memorable and the best it could be. It was indeed a smooth sailing for us. Everything was available to us at ease.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img className='w-25 h-25 rounded-2' src={ava03} alt="image" />
                <div>
                    <h6 className="mb-0 mt-3">Ronaldo</h6>
                    <p className='test__role'>Customer</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className='test__desc'>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since we got in touch with you, we could see your commitment of making our 
            trip memorable and the best it could be. It was indeed a smooth sailing for us. Everything was available to us at ease.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img className='w-25 h-25 rounded-2' src={ava03} alt="image" />
                <div>
                    <h6 className="mb-0 mt-3">Ronaldo</h6>
                    <p className='test__role'>Customer</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className='test__desc'>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since we got in touch with you, we could see your commitment of making our 
            trip memorable and the best it could be. It was indeed a smooth sailing for us. Everything was available to us at ease.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img className='w-25 h-25 rounded-2' src={ava03} alt="image" />
                <div>
                    <h6 className="mb-0 mt-3">Ronaldo</h6>
                    <p className='test__role'>Customer</p>
                </div>
            </div>
    </div>


  </Slider>
    
  
}

export default Testimonial
