import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ser = [
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832463/dragonresort/okbeemurarbwgk8wx5nq_pqmqsa.webp",
    serv: "Gyms",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099531/dragonresort/c6cc818a43d2cf3854b12276023f7358_mf3m4v.jpg",
    serv: "Spas and wellness centers",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099520/dragonresort/73d559_6d7ce49cddd6440a8a6361b3709ee758_mv2_sgviwy.webp",
    serv: "Daily housekeeping",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099523/dragonresort/102272-14-Kids-Club-Grand-Velas-Los-Cabos-1_ul0elc.jpg",
    serv: "Kids' clubs",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099496/dragonresort/why-should-we-have-free-public-wi-fi_uzempf.webp",
    serv: "Free Wi-Fi",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099520/dragonresort/20-be-boi-sang-chanh-nhat-the-gioi-ma-ai-cung-ao-uoc-mot-lan-ghe-tham-ivivu-1_yn6ok5.jpg",
    serv: "Swimming pools",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099532/dragonresort/eazytrendz_2936_trend20200911120002_ysq5b2.jpg",
    serv: "Restaurants and bars",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099524/dragonresort/106732335-1602003898207-IMG_8881_hutkbf.jpg",
    serv: "Private chefs",
  },
  {
    im: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694099524/dragonresort/AdobeStock_246636078_o1l3zg.jpg",
    serv: "VIP and security services",
  },
];

const Services = () => {
  return (
    <>
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          style={{ opacity:'0.4', width: "100%", height: "400px" }}
          src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832462/dragonresort/wallpaperflare.com_wallpaper_4_rgxksx.jpg"
          alt=""
        />
        <p
          style={{
            color: "#D4AF37",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'
          }}
          className="h1 display-1"
        >
          ... SERVICES
        </p>
        </div>
      <div
        className="py-3"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694098561/dragonresort/maldives-5120x2880-5k-4k-wallpaper-8k-indian-ocean-best-beaches-in-5312_s3ggsp.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Row>
            {ser.map((i) => {
              return (
                <Col xs={12} sm={12} md={6} lg={4}>
                  <Card className="my-3" style={{ width: "18rem" }}>
                    <Card.Img
                      style={{ height: "180px" }}
                      variant="top"
                      src={i.im}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">{i.serv}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
