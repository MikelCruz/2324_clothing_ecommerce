import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  // console.log(data);
  return (
    <section className="flex" style={{
      backgroundImage: `url(${data.src})`,
      width: '100%',
      height: '90vh',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      marginTop: '-2vh'
    }}>
    
    <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div  className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div style={{ width: '100%'}} className="mb-12 flex w-full flex-col justify-center sm:mb-12 lg:mb-12 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 style={{ textShadow: '5px 4px 5px rgba(232, 195, 158, 1'}} className="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-6xl">
            ¡La moda es de ser Natural!
          </h1>
          <p style= {{ color: 'rgba(0,0, 0,1)', textShadow: '5px 4px 5px rgba(232, 195, 158, 1'}}className="max-w-3xl leading-relaxed text-gray-500 xl:text-lg">
            Estamos seguros de que buscas algo que pegue contigo. 
            ¿Por qué no echas un vistazo?
          </p>
        </div>

          {/* <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.Image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.Image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div> 
        </div>
      */}
      </div>

      {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div> */}
      
    </div>
  </section>
  );
}

