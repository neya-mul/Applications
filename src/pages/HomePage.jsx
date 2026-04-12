import React, { Suspense, useEffect } from 'react'
import Banner from '../layouts/Banner'
import Rating from '../layouts/Rating'
import Apps from '../layouts/Apps'
import { BounceLoader, PacmanLoader } from 'react-spinners'
// import ScrollToTop from '../contexts/ScrollToTop'  
// import { useLocation } from 'react-router'

export default function HomePage() {
  
  return (
    <div>

      <Banner></Banner>
      <Rating></Rating>
      <Suspense fallback={<div className='flex justify-center items-center x'><BounceLoader color='white' /></div>}>
        <Apps></Apps>
      </Suspense>

    </div>
  )
}
