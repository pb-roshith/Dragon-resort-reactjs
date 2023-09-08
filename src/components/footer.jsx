import React from 'react'
import { Row, Col, Container } from 'react-bootstrap' 
import {AiOutlinePhone, AiOutlineMail, AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare, FaServicestack, FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='p-5' style={{backgroundColor:'#00bfff', color:'#fff'}}>
            <Container>
                <Row>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <h1 className='text-center'>ABOUT US</h1>
                        <div className='pb-3'>
                            Discover paradise in the Maldives. Our secluded resort offers overwater bungalows, stunning coral reefs, and pure relaxation.
                        </div>
                        <div className='d-flex justify-content-evenly' style={{fontSize:'2rem'}}>
                            <AiOutlineInstagram/>
                            <AiOutlineFacebook/>
                            <AiFillTwitterSquare/>
                            <AiOutlineYoutube/>
                            <FaPinterestSquare/>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <h1 className='text-center'>CONTACT US</h1>
                        <div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <FaSearchLocation/>
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>
                                        Huruelhi Island, South Ari Atoll,20026,Maldives
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <AiOutlineMail/>
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>dragonResort@gmail.com</li>
                                        <li>dragon@gmail.com</li>
                                    </ul>   
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <AiOutlinePhone />
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>+91 98407 28278</li>
                                        <li>+91 88373 16165</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <div>
                            <h1 className='text-center'>Our services</h1>
                                <ul style={{listStyle:'none'}}>
                                    <li><FaServicestack/> Spa</li>
                                    <li><FaServicestack/> Fitness Center</li>
                                    <li><FaServicestack/> HouseKeeping</li>
                                    <li><FaServicestack/> Dining</li>
                                    <li><FaServicestack/> Car Rentals</li>
                                    <li><FaServicestack/> Free Wifi</li>
                                    <li><FaServicestack/> Excursion Options</li>
                                    <li><FaServicestack/> Night Shows</li>
                                </ul>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <Row>
                            <h1 className='text-center'>INSIDE</h1>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid #0073cf'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832463/dragonresort/peakpx_5_gjmkp4.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid #0073cf'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832462/dragonresort/wallpaperflare.com_wallpaper_4_rgxksx.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid #0073cf'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832463/dragonresort/okbeemurarbwgk8wx5nq_pqmqsa.webp" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid #0073cf'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832464/dragonresort/peakpx_4_ose6s8.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid #0073cf'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832462/dragonresort/peakpx_6_rdiobr.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid #0073cf'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693653872/7cc1e3d2c4d85454b3bb419f89dee043_aioydk.jpg" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='p-3 text-center' style={{backgroundColor:'#4682b4', color:'#fff'}}>
            <p>Copyright @ 2023 <b>My Company</b> All Right Reserved.</p>
        </div>
    </>
  )
}

export default Footer