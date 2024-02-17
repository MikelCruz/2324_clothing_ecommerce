import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Carousel from './components/Carousel'
export const dynamic = "force-dynamic";


// Imagenes de prueba
import image1 from '../assets/image_1.jpeg'
import image2 from '../assets/image_2.jpeg'
import image3 from '../assets/image_3.jpeg'

export default function Home() {

  const slides = [
    'https://1.bp.blogspot.com/-pf2cTGJpq10/UuGjRH_DEwI/AAAAAAAAA24/gONq-jx64bQ/s1600/Matterhorn_from_Domh%C3%BCtte_-_2.jpg',
    'https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg',
    'https://www.shutterstock.com/path-to-your-image.jpg', // Reemplaza con la URL directa de tu imagen
  ];

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <div>
        <Carousel slides={slides} />
      </div>
      <Newest />
    </div>
  );
}