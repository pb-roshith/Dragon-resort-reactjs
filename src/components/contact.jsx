import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div
        style={{
          paddingTop: "60px",
          position: "relative",
          textAlign: "center",
        }}
      >
        <img
          style={{ width: "100%", height: "400px", opacity: "0.4" }}
          src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694098561/dragonresort/maldives-5120x2880-5k-4k-wallpaper-8k-indian-ocean-best-beaches-in-5312_s3ggsp.jpg"
          alt=""
        />
        <h1
          className="text-center"
          style={{
            color: "#D4AF37",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textShadow:
              "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
          }}
        >
          CONTACT US
        </h1>
      </div>
      <div
        className="py-5"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694177361/dragonresort/wallpaperflare.com_wallpaper_1_ozmos7.jpg")',
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      First name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      Last name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      E-Mail
                    </Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="E-Mail"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a E-Mail.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      Country
                    </Form.Label>
                    <Form.Control type="text" placeholder="Country" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      City
                    </Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      Contact Number
                    </Form.Label>
                    <Form.Control type="text" placeholder="Contact" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label
                      style={{
                        color: "#fff",
                        textShadow:
                          "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                      }}
                    >
                      Message
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    style={{
                      color: "#fff",
                      textShadow:
                        "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                    }}
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
