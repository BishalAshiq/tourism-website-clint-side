import React from 'react';
import image1 from '../../../images/hotels rooms/hotel-room1.jpg'
import image2 from '../../../images/hotels rooms/hotel-room2.jpg'
import image3 from '../../../images/hotels rooms/room-cleaner.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className='d-flex my-5 mx-4'>
            <img className='w-50 rounded-3' src={image1} alt=""/>
            <p className='mx-5 fw-bold'>Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and social function services. Hotel rooms are usually numbered to allow guests to identify their room. Some boutique, high-end hotels have custom decorated rooms. Some hotels offer meals as part of a room and board arrangement.</p>
            </div>
            <hr/>

            <div className='d-flex my-5 mx-4'>
            <p className='mx-5 fw-bold'>Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury amenities, full-service accommodations, an on-site restaurant, and the highest level of personalized service, such as a concierge, room service, and clothes pressing staff. Full-service hotels often contain upscale full-service facilities with many full-service accommodations</p>
            <img className='w-50 rounded-3' src={image3} alt=""/>
            
            </div>
             <h3 className='mt-5 fw-bolder'>Extended stay</h3>
                <p className='fs-5'>Extended stay
Extended stay hotels are small to medium-sized hotels that offer longer-term full-service accommodations compared to a traditional hotel. Extended stay hotels may offer non-traditional pricing methods such as a weekly rate that caters towards travelers in need of short-term accommodations for an extended period of time. Similar to limited and select service hotels, on-site amenities are normally limited and most extended stay hotels lack an on-site restaurant.</p>
            <div> <hr/>
             
             <div className='d-flex my-5 mx-5'>
                 <img className='w-50 rounded-3' src={image2} alt=""/>
                 <p className='fs-5'>New motel construction is rare in the 2000s as hotel chains have been building economy-priced, limited-service franchised properties at freeway exits which compete for largely the same clientele, largely saturating the market by the 1990s. Motels are still useful in less populated areas for driving travelers, but the more populated an area becomes, the more hotels move in to meet the demand for accommodation.</p>
             </div>

            </div>

        </div>
    );
};

export default AboutUs;