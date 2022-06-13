import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image"; 



function InfoCard({img, location, title, description, star, price, total}) {
  return (
    <div className="flex py-6 px-2 pr-4  border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
        <div className="relative h-44 w-36 md:h-64 md:w-72 flex-shrink-0 ">
            <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />

        </div>
        <div className="flex flex-col flex-grow pl-4">
            <div className="flex justify-between">
                <p className="text-lg">{title}</p>
                <HeartIcon className="h-7 cursor-pointer" />
            </div>
            <div className="border-b w-40 pt-2"/>
            <p className="pt-2 text-gray-500 flex-grow">{description}</p>


            <div className="flex justify-between pt-2">
                <p className="flex items-center">
                    <StarIcon className="h-6 text-red-900" />
                    {star}
                </p>

                <div>
                    <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                    <p className="text-right font-extralight">{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard