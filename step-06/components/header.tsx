import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const header = () => {
  return (
    <>
    <div className='w-[1280px] h-[54px] bg-[#f7f7f7] px-16 items-center hidden xl:flex border-b-[1px] border-black lg:w-full'>
      <div className='w-[1154px] h-[54px] py-3 flex gap-8 lg:w-full lg:justify-between'>
      <div className='w-[390px] h-[30px] flex gap-4 items-center'>
        <p className='text-[14px] w-[386px] leading-[21px]'>Phone Number: 956 742 455 678</p>
        <div className='flex w-[1px] h-6 bg-black'></div>
        <p className='text-[14px] leading-[21px]'>Email:info@ddsgnr.com</p>
      </div>
      <div className='w-[736px] h-6 flex gap-4'>
        <div className='w-[132px] h-5 flex gap-3 ml-auto'>
          <Image src={'/images/Vector.png'} alt='facebook' width={18} height={18}></Image>
          <Image src={'/images/Vector2.png'} alt='instagram' width={18} height={18}></Image>
          <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18}></Image>
          <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
        </div>
      </div>
      </div>
    </div>
    <div className='w-full h-[72px] border-b-[1px] p-4 border-[#848484] place-items-center justify-around
     xl:bg-[#f7f7f7] xl:mt-3'>
        <div className='gap-6 flex w-full justify-around'>
            <div className='w-[300px] xl:w-[200px]'>
                <Image src={'/images/logo.png'} alt='logo' width={130.6} height={40}></Image>
            </div>
            <div className='hidden xl:w-[910px] xl:h-11 xl:flex xl:gap-8 xl:bg-white items-center lg:flex'>
              <div className='w-[687px] h-11 flex gap-8 items-center justify-center lg:w-[710px]'>
                <ul className='w-[680px] h-11 flex items-center justify-between'>
                  <div className='flex border-b-[1px] border-black h-11 items-center'><li>Home</li></div>
                  <li>Courses</li>
                  <li>Services</li>
                  <li>Achievement</li>
                  <li>About Us</li>
                  <li>Testimonial</li>
                </ul>
              </div>
              <div className='flex w-[175px] h-10 gap-4 items-center justify-between ml-auto'>
                <Button>Login</Button>
                <Button className='bg-black text-white'>Sign Up</Button>
              </div>
            </div>
            <div className='w-12 h-12 xl:hidden lg:hidden'><Image src={'/images/Vector5.png'} alt='bars' width={48} height={48}></Image></div>
        </div>
    </div>
    </>
  )
}

export default header           
