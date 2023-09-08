import Accordion from 'react-bootstrap/Accordion';
import { Row, Col, Container } from 'react-bootstrap'

const ans = [
    {
        key: 1,
        q: 'What time is the transfer arranged from the Airport to Dragon Resort?',
        a: 'If coming from an international flight, every effort will be made to arrange your resort transfer within 2 hours of arriving at the lounge. Transfers timings are confirmed the night prior to your arrival.  '
    },
    {
        key: 2,
        q: 'What are the check-in and check-out times at your resort?',
        a: 'Our standard check-in time is at 3:00 PM, and check-out is at 11:00 AM. We offer early check-in and late check-out options based on availability; please inquire with our front desk for more information.'
    },
    {
        key: 3,
        q: 'Can I make special requests for my room or accommodations?',
        a: ' Of course! We are happy to accommodate special requests such as room preferences, bed types, or any other specific needs you may have. Please contact our reservations team to discuss your requirements.'
    },
    {
        key: 4,
        q: ' What dining options are available at the resort?',
        a: ' We offer a variety of dining options, including our on-site restaurant, room service, and poolside bar. You can savor a diverse range of cuisines and enjoy delicious meals without leaving the resort.'
    },
    {
        key: 5,
        q: 'What recreational activities and amenities does the resort offer?',
        a: 'Our resort provides a wide range of recreational activities and amenities, including a swimming pool, spa, fitness center, water sports, and guided excursions. You will find plenty of opportunities to relax and have fun during your stay with us.'
    },
    {
        key: 6,
        q: 'Do you have special packages for honeymooners?',
        a: 'Absolutely! We offer romantic honeymoon packages that include special room decorations, couples" spa treatments, candlelit dinners, and more to make your honeymoon truly memorable.'
    }
]

function Questions() {
  return (
    <>
    <div>
    <h1 style={{color:'#D4AF37'}} className='m-5 text-center display-2'>FREQUENTLY ASKED QUESTIONS</h1>
    <Container className='d-flex justify-content-center'>
        <Row className='d-flex flex-column text-center'>
            {ans.map((i) => {
                return(
                <Col  className='mb-3'>
                        <Accordion>
                            <Accordion.Item style={{border:'none', borderBottom:'2px solid cyan'}} eventKey={i.key}>
                                <Accordion.Header>{i.q}</Accordion.Header>
                                <Accordion.Body>{i.a}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                </Col>
            )
            })}
        </Row>
    </Container>
    </div>
    </>
  );
}

export default Questions;