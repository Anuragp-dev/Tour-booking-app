import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';


import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customImg from '../assets/images/customization.png';


const servicesData = [
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"rainy, wet, humid, dry, arid, frigid, foggy, windy, stormy, breezy, windless, calm, still we confirm you the weather"
    },

    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Tour guides plan and implement scheduled activities for guests at an establishment or on a tour."
    },

    {
        imgUrl:customImg,
        title:"Customization",
        desc:"A custom tour is an independent travel plan designed and arranged just for you. This type of travel includes."
    },

] 



const ServiceList = () => {
  return <>

  {
    servicesData.map((item,index) => {
        return (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item}/>
        </Col>
        )
    })
  }
      
    </>
  
}

export default ServiceList
