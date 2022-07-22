import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

type Image = {
  img: {
    src: string
    text: string
  }
}

type SlideProps = {
  images: Image[]
}

export function Slider({ images }: SlideProps) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-[520px] xl:max-h-[800px]"
    >
      {images.map(({ img }, index) => (
        <SwiperSlide
          className="flex flex-col items-center justify-center relative group transition-transform duration-500 ease-out"
          key={index}
        >
          <img src={img.src} className="w-full h-full object-cover" alt="" />
          <div className=" bg-black absolute w-full h-full opacity-[0.4]"></div>
          <div className="absolute md:left-10 md:bottom-10 z-999 w-full animate-bounce">
            <div className="w-full md:block justify-center flex ">
              <p className="text-3xl md:text-5xl text-[#d7d7d7]">{img.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
