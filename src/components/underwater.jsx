import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Underwater = () => {
  return (
    <>
        <div style={{
            backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694017125/dragonresort/28097-maldives-tropical-underwater-hotel-4k_moof0c.jpg")',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundAttachment:'fixed'
            }}>
                <p style={{color:'#fff'}} className='pt-5 text-center'>DRAGON RESORT UNDER WATER</p>
                <h1 className='text-center display-1' style={{color:'#D4AF37', textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}}>EXPLORE OUR UNDER WATER PLACE</h1>
                <Container className='py-3'>
                    <Row className='py-5'>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <p style={{color:'#fff', textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}}>Dive into luxury at DRAGON RESORT Underwater Suite. Immerse yourself in an extraordinary world beneath the waves, where floor-to-ceiling windows reveal the mesmerizing beauty of the ocean's depths, offering a truly unique and unforgettable stay.</p>
                        </Col>
                        <Col>
                            <img style={{width:'100%', height:'300px'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694017485/dragonresort/best-underwater-hotels-Poseidon-Underwater-Resort-Fiji-1_yitkgw.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>
        </div>
    </>
  )
}

export default Underwater