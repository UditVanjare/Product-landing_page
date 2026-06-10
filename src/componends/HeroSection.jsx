import React from 'react'

function HeroSection() {
  return (
    <div>
        <div className='flex mx-30' >
            <div>
                <h1 className='pt-15 pb-5 font-extrabold text-9xl '> YOURE FEET DESERVE THE BEST</h1>
                <p className='font-semibold text-xl'> YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='flex gap-20 mt-5'>
                    <button className='bg-red-400 px-9 py-3 border-2 border-black text-black rounded-md '> Shop Now </button>
                    <button className='bg-red-400 px-9 py-3 border-2 border-black text-black rounded-md '> Category </button>
                </div>
                <p className='pt-5 text-xl'>Also Avalable On</p>
                <div className='flex'>
                    <img className='h-10 w-10 'src='/assets/AmazonLogo.jpeg' alt='amazon'></img>
                    <img className='h-10 w-10'src='/assets/FlipkartLogo.jpeg' alt='fliplart'></img>
                </div>
            </div>
            <div>
                <img className='h-180 w-300'src="/assets/Sneaker.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection