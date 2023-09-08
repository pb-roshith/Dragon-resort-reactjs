import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {GiBeachBall} from 'react-icons/gi'
import './intro.css'

const Intro = () => {
  return (
    <>
        <div className='p-4'>
            <p className='text-center'>DRAGON RESORT MALDIVES RESORT</p>
            <h1 style={{color:'#D4AF37'}} className='display-1 text-center'>LUXURY SWEET & ROYAL 5 STAR MALDIVES RESORT</h1>
            <Container>
                <Row>
                    <Col className='mb-4' xs={12} sm={12} md={12} lg={6}>
                        <img style={{height:'400px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832460/dragonresort/wallpaperflare.com_wallpaper_3_oebpdt.jpg" alt="" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <p>Escape to an island beach resort in the Maldives fringed by turquoise lagoon. Laze in your luxurious overwater bungalow, pufferfish and baby reef sharks swimming in crystal-clear waters below. At Dragon Resort, one of the top five-star luxury hotels, we invite you to write your own chapter of romance on the vacation of a lifetime.</p>
                        <p>Our resort in the Maldives is ideal for honeymoons, with hideaway accommodations, dining under the stars with the sand between your toes, luxurious sunset cruises and spa treatments for two.</p>
                        <p  style={{color:'#D4AF37'}}>AT A GLIMPSE</p>
                        <ul style={{listStyle:'none'}}>
                            <li><GiBeachBall/> 67 over water, ocean and beach villas</li>
                            <li><GiBeachBall/> Only 30-minutes by speedboat from Malé International Airport</li>
                            <li><GiBeachBall/> Couples’ spa journeys, Cinema under the stars on your own private island, and Dining by Design</li>
                        </ul> 
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Intro