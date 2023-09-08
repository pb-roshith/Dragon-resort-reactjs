import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from 'react-bootstrap';

function List() {
  return (
    <div className='py-5' style={{
        backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832463/dragonresort/peakpx_3_kaq26a.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
    }}>
        <p style={{color:'#fff', textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}} className='text-center'>DRAGON RESORT SUITES</p>
        <h1 style={{color:'#D4AF37'}} className='text-center'>FAMOUS SUITES AT OUR RESORT</h1>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                <Carousel>
      <Carousel.Item interval={500}>
        <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000083/dragonresort/hotel-1979406_640_szbozh.jpg" alt='' />
        <Carousel.Caption>
          <h3>Family Paradise suite</h3>
          <p>It is designed to accommodate families of all sizes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000082/dragonresort/peakpx_5_udk7vw.jpg" alt='' />
        <Carousel.Caption>
          <h3>Luxury Beachfront suite</h3>
          <p>Experience the pinnacle of luxury in our exclusive Luxury Beachfront Villa. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{height:'500px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000082/dragonresort/peakpx_6_ols3sb.jpg" alt='' />
        <Carousel.Caption>
          <h3>Deluxe Ocean View Suite</h3>
          <p>
          Enjoy breathtaking views of the sparkling ocean from the comfort of your Suite.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <h1 className='py-5' style={{color:'#D4AF37'}}>DRAGON RESORT : Where Paradise Awaits</h1>
                    <p style={{color:'#fff', textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}}>Our resort offers a range of accommodations, from cozy Standard Rooms to opulent Presidential Penthouses, all surrounded by natural beauty and tranquility. Indulge in gourmet dining, spa treatments, and more, as our dedicated staff ensures an unforgettable stay. Whether for romance, family fun, or a getaway, DRAGON RESORT is your destination for unforgettable memories.</p>
                </Col>
            </Row>
        </Container>
    
    </div>
  );
}

export default List;