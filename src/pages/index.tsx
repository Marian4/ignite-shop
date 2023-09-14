import { HomeContainer, Product } from "@/styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import camisa1 from '../assets/camisa1.png'
import camisa2 from '../assets/camisa2.png'
import camisa3 from '../assets/camisa3.png'
import Image from "next/image";

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa 1</strong>
          <span>R$ 20,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa2} width={520} height={480}  alt="" />
        <footer>
          <strong>Camisa 2</strong>
          <span>R$ 35,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480}  alt="" />
        <footer>
          <strong>Camisa 3</strong>
          <span>R$ 42,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
