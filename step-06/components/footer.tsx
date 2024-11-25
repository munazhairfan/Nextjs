import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const footer = () => {
  return (
    <>
    {/* footer */}
    <div className='w-full h-[1411px] flex flex-col px-6 py-12 items-center xl:h-[684px] xl:gap-20'>
      <div className='w-full h-[1315px] flex flex-col gap-12 items-center xl:h-[524px] xl:gap-20'>
        {/* footer 1 */}
        <div className="w-full h-[261px] flex flex-col gap-6 place-items-center xl:w-[1120px] xl:h-[82px] xl:justify-between xl:flex-row lg:w-full lg:justify-around">
          <div className='w-[287px] h-[91px] flex flex-col gap-4 xl:w-[500px] xl:h-[51px] xl:gap-0'>
            <p className='font-semibold text-[16px] leading-[27px] text-center xl:text-left'>Subscribe to our newsletter</p>
            <p className='text-[16px] leading-6 text-center xl:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='w-[380px] h-[146px] flex flex-col gap-4 xl:w-[400px] xl:h-[82px]'>
            <div className='flex flex-col gap-4 xl:flex-row'>
            <input type='email' placeholder='Enter your email'
            className='w-[380px] h-12 border-[1px] border-black rounded-[5px] p-4'>
            </input>
            {/* className='w-[380px] h-12 rounded-[5px] border-[1px] border-black text-[14px] px-6 py-4' */}
            <Button className='bg-default h-12'>Subscribe</Button>
            </div>
            <p className='text-[12px] leading-[18px] text-center xl:text-left'>By subscribing you agree to with our Privacy Policy</p>
          </div>
        </div>
        {/* footer 2 */}
        <div className="w-[172px] h-[811px] flex flex-col gap-8 items-center xl:w-[1120px] xl:h-[225px] xl:gap-32 xl:flex-row xl:items-start lg:w-full lg:justify-around">
          <div><Image src={'/images/logo.png'} alt='logo' width={130.6} height={40}></Image></div>
          <div>
            <ul className='w-[172px] h-[225px] flex flex-col gap-4 text-[14px] text-center leading-[18px] xl:text-left'>
              <li className='leading-6 font-semibold text-[16px] mb-2'>Courses</li>
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>
          <div>
            <ul className='w-[172px] h-[225px] flex flex-col gap-4 text-[14px] text-center leading-[18px] xl:text-left'>
              <li className='leading-6 font-semibold text-[16px] mb-2'>Resources</li>
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <ul className='w-[172px] h-[225px] flex flex-col gap-4 text-[14px] text-center leading-[18px] xl:text-left'>
              <li className='leading-6 font-semibold text-[16px] mb-2'>About Us</li>
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        {/* footer 3 */}
        <div className="w-[380px] h-[130px] flex flex-col gap-6 border-t-[1px] border-black place-items-center
        xl:w-[1120px] xl:h-[57px] xl:flex-row lg:w-full">
            <div className='w-[345px] h-[66px] flex flex-col gap-6 place-items-center mt-6 xl:w-[600px] xl:h-[21px] xl:flex-row'>
                <p className='text-[14px] leading-[21px]'>2023 Ddsgnr. All right reserved.</p>
                <ul className='w-[345px] h-[21px] flex gap-6 text-[14px] leading-[21px] underline'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies Settings</li>
                </ul>
            </div>
            <div className='w-[132px] h-6 flex gap-3 xl:h-4 xl:place-self-center xl:ml-auto'>
                <Image src={'/images/Vector.png'} alt='facebook' height={18} width={90}></Image>
                <Image src={'/images/Vector2.png'} alt='instagram' height={18} width={90}></Image>
                <Image src={'/images/Vector3.png'} alt='twitter' height={18} width={90}></Image>
                <Image src={'/images/Vector4.png'} alt='facebook' height={18} width={90}></Image>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default footer