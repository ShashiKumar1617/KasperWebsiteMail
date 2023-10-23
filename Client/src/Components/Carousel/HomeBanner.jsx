import React from 'react'
import {MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Banner1 from '../../Assets/Images/Home/Banner1.webp'
import Banner2 from '../../Assets/Images/Home/Banner2.webp'
import Banner3 from '../../Assets/Images/Home/Banner3.webp'
import Banner4 from '../../Assets/Images/Home/Banner4.webp'

const HomeBanner = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Banner1}
        alt='Banner1'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Banner2}
        alt='Banner2'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={Banner3}
        alt='Banner3'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={Banner4}
        alt='Banner4'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  )
}

export default HomeBanner