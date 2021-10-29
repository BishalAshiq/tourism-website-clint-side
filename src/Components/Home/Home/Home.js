import React from 'react';
import { Accordion } from 'react-bootstrap';

const Home = () => {
    return (
     <div>
              
     
      <div>
          <h2>What do you wanted to know about Hotels Booking</h2>
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
        
     </div>
    );
};

export default Home;