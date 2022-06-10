import Image from "next/image";

function Banner() {
  return (
    <div className='relative h-[300px] m:h-[350px] lg:h-[400px] xl:h-[420px] 2xl:h-[500px] '>
      <Image
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/airbnb-stargazing-desert-dome-1531425591.jpg'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-m text-white font-bold'>
          Not sure where to go? Perfect
        </p>
        <button className="text-purple-300 bg-gray-700 px-4 py-4 shadow-md rounded-3xl font-bold my-3 hover:shadow-2xl
        active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner