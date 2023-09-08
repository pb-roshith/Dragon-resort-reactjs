import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {SlSizeFullscreen} from 'react-icons/sl'
import {BsPeopleFill} from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const rooms = [
  {
    name: "Over Water Villa",
    size: "45 sqm / 603 sqft",
    people: "Maximum 2 adults",
    l1: "Direct lagoon access",
    l2: "Sundeck with daybed and coffee table",
    cost: "56,547",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000080/dragonresort/evening-in-luxury-water-villa-wallpaper-preview_pydvek.jpg",
  },
  {
    name: "Superior Over Water Villa",
    size: "45 sqm / 603 sqft",
    people: "Maximum 3 adults",
    l1: "Direct lagoon access with more privacy ",
    l2: "Sundeck with daybed and coffee table",
    cost: "58,958",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000081/dragonresort/peakpx_4_wpijht.jpg",
  },
  {
    name: "Deluxe Over Water Villa",
    size: "83 sqm / 893 sqft",
    people: "Maximum 2 adults",
    l1: "Direct lagoon access",
    l2: "Terrazzo tub for with Indian Ocean Views",
    cost: "68,355",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000082/dragonresort/peakpx_6_ols3sb.jpg",
  },
  {
    name: "Ocean Pool Villa",
    size: "133 sqm / 1,431 sqft",
    people: "Maximum 3 adults",
    l1: "Located cliff-edge with added privacy",
    l2: "Plunge pool with Indian Ocean Views",
    cost: "85,985",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000082/dragonresort/peakpx_5_udk7vw.jpg",
  },
  {
    name: "Wellness Villa",
    size: "56 sqm / 603 sqft",
    people: "Maximum 2 adults",
    l1: "Peaceful over water villa to enhance wellbeing",
    l2: "Wellness Host",
    cost: "90,725",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000083/dragonresort/luxury-president-suite-ocean-view-bungalow_uxj22u.jpg",
  },
  {
    name: "Over Water Pool Villa",
    size: "97 sqm / 1,044 sqft",
    people: "Maximum 2 adults",
    l1: "Direct lagoon access",
    l2: "Plunge pool over the lagoon",
    cost: "107,190",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694000083/dragonresort/frames-for-your-heart-FqqiAvJejto-unsplash_vjlglz.jpg",
  },
  {
    name: "Deluxe Over Water Pool Villa",
    size: "131 sqm / 1,410 sqft",
    people: "Maximum 4 adults",
    l1: "Direct lagoon access",
    l2: "6m infinity pool",
    cost: "56,547",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694095380/dragonresort/272-2725906_nuova-cityhotel-bangkok_vlluhd.jpg",
  },
  {
    name: "Beach Pool Villa",
    size: "139 sqm / 1,496 sqft",
    people: "Maximum 4 adults",
    l1: "Direct lagoon access",
    l2: "Beachfront plunge pool",
    cost: "107,190",
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694095365/dragonresort/desktop-wallpaper-luxury-resort-room-ultra-backgrounds-for-u-tv-multi-display-dual-monitor-tablet-smartphone-luxury-hotel-thumbnail_yxfdq2.jpg",
  },
];

const About = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          backgroundImage:
            'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832463/dragonresort/peakpx_3_kaq26a.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h1 style={{ color: "#D4AF37" }}>VILLAS</h1>
              <hr
                style={{
                  color: "#D4AF37",
                  border: "3px solid",
                  opacity: "0.7",
                }}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h1
                style={{
                  color: "#D4AF37",
                  textShadow:
                    "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                }}
              >
                Luxurious Maldives Resort & Private Villas
              </h1>
              <p
                style={{
                  color: "#fff",
                  textShadow:
                    "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                }}
              >
                Our villas are designed to provide you with the ultimate
                tropical retreat, where every detail has been carefully crafted
                to ensure your comfort and relaxation. Each villa is a private
                oasis, thoughtfully positioned to offer breathtaking views of
                the Indian Ocean and the lush, tropical gardens.
              </p>
              <p
                style={{
                  color: "#fff",
                  textShadow:
                    "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                }}
              >
                Inside, you'll find a spacious and beautifully appointed living
                space, decorated in a contemporary yet harmonious style that
                blends seamlessly with the natural surroundings. The high
                ceilings and large windows allow the gentle sea breeze to flow
                through, creating a refreshing and tranquil ambiance.
              </p>
            </Col>
          </Row>
        </Container>
        <div style={{backgroundColor:'#088F8F'}}>
        <Container className="pt-3">
          <p className="text-center" style={{color: "#fff"}}>DRAGON RESORT BEST VILLAS</p>
          <h1 className="text-center" style={{color: "#D4AF37"}}>OUR VILLAS</h1>
          <Row>
            {rooms.map((i) => {
              return (
                <Col xs={12} sm={12} md={6} lg={4}>
                  <Card style={{marginTop:'15px', marginBottom:'15px', width: '18rem', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                    <Card.Img style={{height:'180px'}}
                      variant="top"
                      src={i.im}
                    />
                    <Card.Body>
                      <Card.Title>{i.name}</Card.Title>
                      <ul style={{listStyle:'none'}}>
                        <li>
                          <SlSizeFullscreen /> {i.size}
                        </li>
                        <li>
                          <BsPeopleFill /> {i.people}
                        </li>

                      </ul>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{i.l1}</ListGroup.Item>
                      <ListGroup.Item>{i.l2}</ListGroup.Item>
                      
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Book Now</Card.Link>
                      <h1>$ {i.cost}</h1>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        </div>
      </div>
    </>
  );
};

export default About;
