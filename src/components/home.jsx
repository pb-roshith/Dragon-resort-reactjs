import React from 'react'
import Intro from './intro'
import Questions from './questions'
import Experience from './experience'
import Recommend from './recommend'
import View from './view'
import List from './list'
import Underwater from './underwater'

const Home = () => {
  return (
    <>
      <div style={{paddingTop:'60px'}}>
        {/* <img style={{width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693832691/dragonresort/peakpx_n4xluw.jpg" alt="" /> */}
        <video style={{width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/video/upload/v1693895365/beach_-_41352_720p_mstazs.mp4" autoPlay loop></video>
      </div>
      <Intro></Intro>
      <Recommend></Recommend>
      <Experience></Experience>
      <List></List>
      <Underwater></Underwater>
      <View></View>
      <Questions></Questions>
    </>
  )
}

export default Home