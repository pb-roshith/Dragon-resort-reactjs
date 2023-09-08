import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Recommend = () => {
  return (
    <>
        <div style={{
            backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832463/dragonresort/peakpx_2_cgz3lg.jpg")',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'600px',
            backgroundAttachment:'fixed',
            backgroundPosition: 'center'
        }}>
            <Container>
                 <Row className='p-5'>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <h1 style={{color:'#D4AF37'}} className='display-1'>98%</h1>
                        <p style={{color:'#D4AF37'}} className='display-4 lead'>of our visitors liked this resort</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <h3 style={{color:'#D4AF37', textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}}> From luxurious accommodations to top-notch amenities and outstanding service, we strive to create a haven of relaxation and enjoyment for all our guests.</h3>
                    </Col>
                  </Row>
            </Container> 
        </div>
    </>
  )
}

export default Recommend