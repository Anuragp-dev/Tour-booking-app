import React from 'react';
import "../style/home.css";
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import worldImg from '../assets/images/world.png';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList';
import experienceImg from '../assets/images/experience.png';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';



//home component 

const Home = () => {
  return <>
    {/* <!-- ========== Hero section start  ========== --> */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You GO"} />
                <img src={worldImg} alt="world" />
              </div>
              <h1>Travelings Opens The Door To Creating <span className="highlight">Memories</span></h1>
              <p>This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase.
                We strain to renew our capacity to wonder, to shock ourselves into astonishment once again</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="hero" />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="hero" controls />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="hero" />
            </div>
          </Col>

          <SearchBar />

        </Row>
      </Container>
    </section>
    {/* <!-- ========== End Hero section  ========== --> */}

    {/* <!-- ========== Service section start  ========== --> */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* <!-- ========== Service section end  ========== --> */}



    {/* <!-- ========== Featured section start   ========== --> */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>


    {/* <!-- ========== Featured section end   ========== --> */}


    {/* <!-- ==========  Experience section Start   ========== --> */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />

              <h2>With our all experience <br /> we will serve you</h2>
              <p> traveling around from place to place. a long journey including the visiting
                <br />
                of a number of places in sequence,
                especially with an organized group led by a guide.</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>

              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>

              <div className="counter__box">
                <span>15</span>
                <h6>Year Experience</h6>
              </div>

            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="exp" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>


    {/* <!-- ==========  Experience section end   ========== --> */}


    {/* <!-- ==========  Gallery section start   ========== --> */}


    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">Visit our customers tour gallery </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/* <!-- ==========  Gallery section end   ========== --> */}


    {/* <!-- ==========  testimonial section start   ========== --> */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans love'} />
            <h2 className='testimonial__title'>What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>


    {/* <!-- ==========  testimonial section end   ========== --> */}
    <Newsletter />

   
  </>

}

export default Home;
