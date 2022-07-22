import type { NextPage } from 'next'

import { About } from '../components/About'

import { Info } from '../components/Info'
import { Slider } from '../components/Slider'

const images = [
  {
    img: {
      src: '/assets/limpeza-pele.jpeg',
      text: 'Limpeza de pele'
    }
  },
  {
    img: {
      src: '/assets/massagem.jpeg',
      text: 'Massagem'
    }
  },
  {
    img: {
      src: '/assets/laser.jpeg',
      text: 'Laser'
    }
  }
]

const Home: NextPage = () => {
  return (
    <main className="scroll-smooth">
      <Slider images={images} />

      <About />

      <Info />
    </main>
  )
}

export default Home
