import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/banner/visualsofdana-T5pL6ciEn-I-unsplash.jpg'
import image2 from '../../../images/banner/upgraded-points-c8UktkMDrbc-unsplash.jpg'
import image3 from '../../../images/banner/image-3.jpg'
import image4 from '../../../images/banner/rhema-kallianpur-uocSnWMhnAs-unsplash.jpg'

const Banner = () => {
    return (
        <div>
            
            <div>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Sain Martin</h1>
      <p className='text-white fw-bolder'>Sain Martin is one of the popular tourist spots in Bangladesh situated among the hills of the Coxs-bazar range of mountains in Saint Martin union</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>SundorBan</h1>
      <p className='fw-bolder'>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Rangamati</h1>
      <p className='fw-bolder'>Rangamati is surrounded by natural features like as mountains, rivers, lakes, and waterfalls. Rangamati is also home to several ethnic groups. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className='text-success'>The City Of the Mosque</h1>
      <p className='fw-bolder text-success'>The area of Dhaka has been inhabited since the first millennium. The city rose to prominence in the 17th century as a provincial capital and commercial center of the Mughal Empire. Dhaka was the capital of the proto-industrialised Mughal Bengal for 75 years (1608–39 and 1660–1704). As the center of the muslin trade in Bengal</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>


        </div>
    );
};

export default Banner;