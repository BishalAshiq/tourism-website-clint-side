import React from 'react';
import './Home.css'
import { Accordion, Carousel } from 'react-bootstrap';
import image1 from '../../../images/banner/image-1.jpg'
import image2 from '../../../images/banner/image-2.jpg'
import image3 from '../../../images/banner/image-3.jpg'
import image4 from '../../../images/banner/bangladesh_travel_guide_2.jpg'

import des1 from '../../../images/destinations ideas/16-best-places-BD.jpg'
import des2 from '../../../images/destinations ideas/Jahaj.jpg'
import des3 from '../../../images/destinations ideas/suspension-bridge-5297744_1280.jpg'
import des4 from '../../../images/destinations ideas/saint-martins-island-1.jpg'
const Home = () => {
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
      <h1>Sajek Vally</h1>
      <p className='text-dark fw-bolder'>Sajek Valley is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union</p>
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
      <h1>The City Of the Mosque</h1>
      <p className='fw-bolder'>The area of Dhaka has been inhabited since the first millennium. The city rose to prominence in the 17th century as a provincial capital and commercial center of the Mughal Empire. Dhaka was the capital of the proto-industrialised Mughal Bengal for 75 years (1608–39 and 1660–1704). As the center of the muslin trade in Bengal</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
     




      <div>
          <h2 className='mt-5'>What do you wanted to know about Hotels Booking</h2>
            <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>What is the price range of hotels in Dhaka?</Accordion.Header>
            <Accordion.Body>
            Budget category of hotels starts from Rs.262 and luxury hotels booking is starting from tk.2528.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Which location have largest number of hotels in Dhaka?</Accordion.Header>
            <Accordion.Body>
            With 35 properties Uttara have the maximum number of hotels in Dhaka. 25 hotels at Banani, 22 hotels at Gulshan 2 and 19 hotels at Dhaka City Center are some other popular locations in Dhaka.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>What cheap hotels in Dhaka have nice views?</Accordion.Header>
            <Accordion.Body>
            Heritage Kutir, Home Stay at Mohammadpur, and Le GlenEagles Dhaka - Prihan's Suites and Resorts have received great reviews from guests in Dhaka about the views from these cheap hotels.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Which cheap hotels in Dhaka are good for families?</Accordion.Header>
            <Accordion.Body>
            Many families visiting Dhaka enjoyed staying at Hotel Jannat Res, Jatra Flagship Dhaka Lake View, and HANSA- A Premium Residence.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </div>
        
        <div className='destination'>
            <h1 className='mt-5'>Destination Ideas in Bangladesh</h1>
            <div className='img'>
            <img src={des1} alt=""/>
            <img src={des2} alt=""/>
            <img src={des3} alt=""/>
            <img src={des4} alt=""/>
            </div>
        </div>
       

     </div>
    );
};

export default Home;