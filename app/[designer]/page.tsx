import Link from "next/link";
import { fullUser, simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData(designer: string) {
  const query = `*[_type == "product" && designer->name == "${designer}"] {
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "designer": designer->name
  }`;

  const data = await client.fetch(query);
  return data;
}


async function getUserData() {
  const query = `*[_type == "designer" ] {
        _id,
        name,
        "imageUrl": image.asset->url,
        about,
        email
        
      }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { designer: string };
}) {
  const data: simplifiedProduct[] = await getData(params.designer);
  const userData: fullUser[] = await getUserData();
  console.log(userData)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex items-left" style={{ marginBottom: "5%", marginLeft: "5%", marginTop: "5%" }}>
            <Image
              src={userData[0] ? userData[0].imageUrl : ""}
              alt="Product image"
              className="object-cover object-center rounded-full"
              width={200}
              height={200}
              style={{ marginRight: "5%" }} 
            />
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4" >
                Productos de {params.designer}
              </h2>
              <p className="text-lg text-gray-700 mb-2" style={{ marginLeft: "2.5%"}}>{userData[0].about}</p>
              <p className="text-lg text-gray-700 items-right" style={{ marginLeft: "2.5%"}} >{userData[0].email}</p>

            </div>

          </div>









        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for 
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    product.categoryName
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}