import React from 'react'
import Image from 'next/image'
import ListCard from '@/components/commons/ListCard'
import SlideBanner from '@/components/commons/SlideBanner'
import ImageBanner from '@/components/commons/ImageBanner'
import SlideProduct from '@/components/commons/SlideProduct'
import PreviewImage from '@/components/commons/PreviewImage'

const Home = () => {
  return (
    <div>
      {/* <PreviewImage /> */}
      <SlideBanner />
      <SlideProduct />
      <ImageBanner />
      <ListCard />
    </div>
  )
}

export default Home