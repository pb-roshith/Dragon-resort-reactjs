import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './experience.css'

const Experience = () => {
  return (
    <>
        <div className='p-1' style={{backgroundColor:'#00bfff'}}>
            <p style={{color:'#fff'}} className='text-center m-2 p-2'>DRAGON RESORT EXPERIANCE</p>
            <p style={{color:'#D4AF37'}} className='display-1 text-center'>YOUR MOST MEMORABLE MOMENTS</p>
            <Container fluid>
            <Row className='g-0'>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <div className='containerr'>
                        <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693897199/dragonresort/peakpx_1_pkeqiu.jpg" alt="" />
                        <div className='centered'><p style={{color:'#D4AF37'}}>FOOD</p><h1 className='display-3'>NIGHT DINNER</h1></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <div className='containerr'>
                        <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693897209/dragonresort/peakpx_2_nvbzrn.jpg" alt="" />
                        <div className='centered'><p style={{color:'#D4AF37'}}>BEACH</p><h1 className='display-3'>EXPLORE UNDER</h1></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <div className='containerr'>
                        <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693897237/dragonresort/peakpx_3_bol64f.jpg" alt="" />
                        <div className='centered'><p style={{color:'#D4AF37'}}>MEETING</p><h1 className='display-3'>PRIVATE DINNER</h1></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <div className='containerr'>
                        <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693897246/dragonresort/peakpx_wifjo3.jpg" alt="" />
                        <div className='centered'><p style={{color:'#D4AF37'}}>RELAX</p><h1 className='display-3'>ENJOY BEACH</h1></div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    </>
  )
}

export default Experience