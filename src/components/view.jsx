import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const alll = [
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003476/dragonresort/peakpx_7_bm6wwm.jpg',
        tex:'ENJOY BREAKFAST'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003476/dragonresort/peakpx_6_xgmmk1.jpg',
        tex:'EVENING DREAMS'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003474/dragonresort/peakpx_5_cobcnp.jpg',
        tex:'NIGHT WALK'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003473/dragonresort/peakpx_10_kssgoa.jpg',
        tex:'MORNING PLAY'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003472/dragonresort/peakpx_8_uqhjcg.jpg',
        tex:'THE BEACH'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003472/dragonresort/peakpx_4_sd7b9w.jpg',
        tex:'ENJOY BEACH VIEW'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003472/dragonresort/peakpx_9_nzc0la.jpg',
        tex:'UNDER WATER RESTAURANT'
    },
    {
        im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003466/dragonresort/peakpx_11_ykj7zm.jpg',
        tex:'RESTING VIEW'
    }
]

const View = () => {
  return (
    <>
        <div style={{backgroundColor:'#0096FF'}}>
            <p style={{color:'#fff'}} className='pt-5 text-center'>PLACES YOU LIKE IN DRAGON RESORT</p>
            <h1 className='text-center display-1' style={{color:'#D4AF37', textShadow:'-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}}>THE BEST PLACE'S OF OUR RESORT TO SPEND YOUR TIME</h1>
            <Container fluid>
                <Row className='g-0'>
                    {alll.map((i) => {
                        return (
                            <Col xs={6} sm={6} md={6} lg={3}>
                                <div  style={{position:'relative', maxWidth:'400px'}}>
                                    <img style={{width:'100%'}} src={i.im} alt="" />
                                    <div className='text-center' style={{color:'#fff', position:'absolute', bottom:'0', left:'0', padding:'10px', backgroundColor:'rgba(0,0,0,0.5', width:'100%'}}>{i.tex}</div>
                                </div>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>

            




        </div>
    </>
  )
}

export default View