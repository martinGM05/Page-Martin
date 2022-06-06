import React from 'react'
import Hero from '../../components/Home/Hero/Hero'
import * as Scroll from 'react-scroll';
import { Link as LinkScroll, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Work from '../../components/Home/Work/Work';
import Tech from '../../components/Home/Tecnologies/Tech';


const HomeScreen = () => {
  return (
    <>
      <Hero />
      {/* <Element name="work" className="py-12">
        <Work />
      </Element> */}
      <Tech />
    </>
  )
}

export default HomeScreen