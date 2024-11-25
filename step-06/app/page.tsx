import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
    {/* hero div */}
    <div className='flex flex-col w-full xl:flex-row xl:h-[800px] items-center justify-around'>
        <div className='w-[428px] h-[390px] xl:w-[852px] flex flex-col gap-8 items-center justify-center'>
          <div className='flex flex-col gap-6'>
            <div className='w-[380px] h-[96px]'>
            <h1 className='font-bold text-[40px] leading-[48px]'>Learn new skills online with ease</h1>
            </div>
            <div className='w-[380px] h-[54px]'>
            <p className='text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
          </div>
            <div className='w-[358px] h-16 flex flex-row gap-4 items-end'>
              {/* <button className='w-[178px] h-12 bg-black text-white rounded-[5px]'>Start learning now</button>
              <button className='w-[164px] h-12 bg-white text-black border-[1px] border-black rounded-[5px]'>Explore Courses</button> */}
              <Button className='bg-black text-white w-[178px] h-12'>Start learning now</Button>
              <Button className='w-[164px] h-12'>Explore Courses</Button>
            </div>
        </div>
        <div className='w-[428px] h-[390px] xl:w-[640px] xl:h-[800px] object-contain bg-hero-image bg-cover bg-top xl:bg-center'>
          </div>
    </div>
    {/* companies */}
    <div className='flex flex-col w-full h-[239.34px] gap-6 px-6 py-12
    xl:flex-row xl:bg-[#f7f7f7] place-items-center justify-around'>
      <div className='w-[335px] h-[54px]'>
        <p className='font-bold leading-[27px] text-[18px] xl:text-[30px] xl:hidden'>Trusted by the world&apos;s best companies [social proof to build credibility]</p>
        <p className='font-bold leading-[27px] text-[24px] xl:text-[30px] hidden xl:flex'>Trusted by 2000+ companies world wide.</p>
      </div>
      <div className='flex xl:gap-[19] w-[480px] justify-around xl:w-[990px]'>
        <div ><Image src={'/images/c1.png'} width={120} height={35} alt='companyname1'></Image></div>
        <div ><Image src={'/images/c2.png'} width={120} height={35} alt='companyname2'></Image></div>
        <div ><Image src={'/images/c3.png'} width={120} height={35} alt='companyname3'></Image></div>
        <div className='hidden lg:flex'><Image src={'/images/c4.png'} width={120} height={35} alt='companyname4'></Image></div>
        <div className='hidden lg:flex'><Image src={'/images/c5.png'} width={120} height={35} alt='companyname5'></Image></div>
        <div className='hidden lg:flex'><Image src={'/images/c6.png'} width={120} height={35} alt='companyname6'></Image></div>
      </div>
    </div>
    {/* categories */}
    <div className='flex flex-col w-full h-[862px] gap-12 px-6 py-12'>
      {/* div 1 */}
      <div className='flex flex-col gap-6 w-full h-[162px] xl:h-[109px]'>
        <div className='h-21 font-bold text-[32px] xl:text-[40px] leading-[41.6px] text-center'>Explore Courses By Category</div>
        <div className='h-[54px] text-[18px] text-center'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</div>
      </div>
      {/* div 2 */}
      <div className='flex flex-col w-full h-[556px] gap-24 xl:gap-12 xl:h-[700px] items-center'>
        {/* category one */}
        <div className='flex flex-col gap-6 w-[380px] h-[444px] xl:flex-row xl:h-[132px] xl:w-full xl:justify-center'>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/pen-tool-2.png'} alt='courselogo1' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Design & Development</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/volume-high.png'} alt='courselogo2' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Marketing</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/group.png'} alt='courselogo3' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Development</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        </div>
        {/* category two */}
        <div className='flex-col hidden gap-6 w-[380px] h-[444px]
        xl:flex-row xl:h-[132px] xl:w-[1280px] xl:justify-center xl:flex lg:w-full'>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/microphone.png'} alt='courselogo1' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Communication</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/link.png'} alt='courselogo2' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Digital Marketing</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/arrow-2.png'} alt='courselogo3' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Self Development</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        </div>
        {/* category three */}
        <div className=' hidden flex-col gap-6 w-[380px] h-[444px] xl:flex-row xl:h-[132px] xl:w-[1280px] xl:justify-center xl:flex lg:w-full'>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/briefcase.png'} alt='courselogo1' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Business</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/book.png'} alt='courselogo2' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Finance</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        <div className='flex w-[380px] gap-8 items-center h-[132px] rounded-[5px] p-4 bg-[#f7f7f7]'>
          <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] bg-white'>
            <Image src={'/images/book2.png'} alt='courselogo3' width={32} height={32}></Image>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Consulting</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
          </div>
        </div>
        </div>
        {/* button */}
          <div className='flex justify-center'>
            {/* <button className='w-[155px] h-[48px] border-[1px] border-black rounded-[5px]'>
            View All Courses
            </button> */}
            <Button className='w-[155px] h-[48px] text-[16px]'>View All Courses</Button>
            </div>
      </div>
    </div>
    {/* achievements */}
    <div className='flex flex-col w-full h-[451px] gap-12 px-6 py-12 place-items-center
    xl:h-[488px]'>
      <div className='flex flex-col gap-6 w-full items-center h-[355px] xl:w-[1152px] xl:h-[264px] lg:w-full'>
        <div className='flex flex-col gap-4 justify-center'>
          <p className='w-full h-[42px] leading-[41.6px] text-[32px] font-bold text-center 
          xl:text-[40px] justify-center xl:w-[1152px] lg:w-full'>Our Achivements</p>
          <div className='w-full h-[81px] text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
              <p className='hidden text-[18px] xl:inline'>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>
        </div>
        <div className='w-full h-[176px] flex flex-col gap-6 xl:h-[96px] xl:flex-row justify-evenly place-items-center lg:flex-row'>
          <div className='w-full h-[76px] flex gap-4 py-2 justify-around'>
            <div className='w-[182px] h-[60px] flex flex-col place-items-center gap-2'>
              <p className='w-[46px] h-[28px] font-bold text-[20px] leading-[28px] xl:text-[30px] xl:w-[91px] xl:h-[48px] text-center'>+200</p>
              <p className='text-[16px] leading-[24px]'>Courses</p>
            </div>
            <div className='w-[182px] h-[60px] flex flex-col place-items-center gap-2'>
              <p className='w-[46px] h-[28px] font-bold text-[20px] leading-[28px] xl:text-[30px] xl:w-[91px] xl:h-[48px] text-center'>50K</p>
              <p className='text-[16px] leading-[24px]'>Mentors</p>
            </div>
          </div>
          <div className='w-full h-[76px] flex gap-4 py-2 justify-around'>
            <div className='w-[182px] h-[60px] flex flex-col place-items-center gap-2'>
              <p className='w-[46px] h-[28px] font-bold text-[20px] leading-[28px] xl:text-[30px] xl:w-[91px] xl:h-[48px] text-center'>370K</p>
              <p className='text-[16px] leading-[24px]'>Students</p>
            </div>
            <div className='w-[182px] h-[60px] flex flex-col place-items-center gap-2'>
              <p className='w-[46px] h-[28px] font-bold text-[20px] leading-[28px] xl:text-[30px] xl:w-[91px] xl:h-[48px] text-center'>100+</p>
              <p className='text-[16px] leading-[24px]'>Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* courses */}
    <div className='w-full h-[2100px] flex flex-col gap-10 px-6 py-8 justify-between 
    xl:h-[1600px] lg:h-[1000px]'>
      {/* div 1 */}
      <div className=' h-[93px] flex flex-col gap-4 place-items-center justify-between'>
        <p className='font-bold text-[32px] leading-[41.6px] text-center xl:text-[56px]'>Courses</p>
        <p className='text-center leading-[27px] text-[18px]'>Your Ultimate Guide to learning</p>
      </div>
      {/* div 2 */}
      <div className='w-full h-[1898px] flex flex-col gap-16 xl:h-[1340px] lg:h-[800px]'>
        <div className='place-items-center'>
          <ul className='flex gap-2'>
          <li className='px-4 py-2 border-b-[1px] border-black'>Popular</li>
          <li className='px-4 py-2'>Recommended</li>
          <li className='px-4 py-2 w-[109px]'> Best Price</li>
        </ul>
        </div>
        <div className='flex flex-col w-full h-[1690px] gap-20 xl:h-[1132px] lg:h-[650px]'>
          <div className='flex flex-col gap-14 w-full h-[1690px] xl:h-[534px] lg:h-[650px] items-center
          xl:flex-row xl:gap-16 lg:justify-around lg:flex-row lg:w-full'>
          {/* course 1 */}
          <div className='bg-[#f7f7f7] rounded-[5px] w-[380px] h-[558px]'>
            <div><Image src={'/images/course1.png'} alt='course1' width={380} height={300}></Image></div>
            <div className='w-[380px] h-[234px] flex flex-col gap-2 place-items-center justify-center'>
              <div className='w-[348px] h-[146px] flex flex-col gap-2'>
                <div className='flex'>
                <p className='text-[14px] leading-[21px] font-semibold'>Design</p>
                <div className='flex ml-auto items-center'>
                  <Image src={'/images/Star 1.png'} alt='star' width={18} height={18}></Image>
                  <p className='text-[14px] leading-[21px] font-semibold ml-1'>5.0 </p>
                  </div>
                  </div>
                <p className='font-bold text-[24px] leading-[33.6px]'>UX/UI Design 201</p>
                <p className='leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-12 items-center w-[348px] h-10'>
              {/* <button className='w-[117px] h-10 rounded-[5px] px-5 py-2 border-[1px] border-black text-[14px]'>
                Enroll Now</button> */}
                <Button className='h-10'>Enroll Now</Button>
              <p className='font-medium text-[16px] leading-[24px]'>$400</p>
              </div>
            </div>
          </div>
          {/* course 2 */}
          <div className='bg-[#f7f7f7] rounded-[5px] w-[380px] h-[558px]'>
            <div><Image src={'/images/course2.png'} alt='course2' width={380} height={300}></Image></div>
            <div className='w-[380px] h-[234px] flex flex-col gap-2 place-items-center justify-center'>
              <div className='w-[348px] h-[146px] flex flex-col gap-2'>
                <div className='flex'>
                <p className='text-[14px] leading-[21px] font-semibold'>Programming</p>
                <div className='flex ml-auto items-center'>
                  <Image src={'/images/Star 1.png'} alt='star' width={18} height={18}></Image>
                  <p className='text-[14px] leading-[21px] font-semibold ml-1'>5.0 </p>
                  </div>
                  </div>
                <p className='font-bold text-[24px] leading-[33.6px]'>Introduction to Python</p>
                <p className='leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-12 items-center w-[348px] h-10'>
              {/* <button className='w-[117px] h-10 rounded-[5px] px-5 py-2 border-[1px] border-black text-[14px]'>
                Enroll Now</button> */}
                <Button className='h-10'>Enroll Now</Button>
              <p className='font-medium text-[16px] leading-[24px]'>$400</p>
              </div>
            </div>
          </div>
          {/* course 3 */}
          <div className='bg-[#f7f7f7] rounded-[5px] w-[380px] h-[558px] lg:hidden xl:block '>
            <div><Image src={'/images/course3.png'} alt='course3' width={380} height={300}></Image></div>
            <div className='w-[380px] h-[234px] flex flex-col gap-2 place-items-center justify-center'>
              <div className='w-[348px] h-[146px] flex flex-col gap-2'>
                <div className='flex'>
                <p className='text-[14px] leading-[21px] font-semibold'>Business</p>
                <div className='flex ml-auto items-center'>
                  <Image src={'/images/Star 1.png'} alt='star' width={18} height={18}></Image>
                  <p className='text-[14px] leading-[21px] font-semibold ml-1'>5.0 </p>
                  </div>
                  </div>
                <p className='font-bold text-[24px] leading-[33.6px]'>Data Analysis for Beginners</p>
                <p className='leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-12 items-center w-[348px] h-10'>
              {/* <button className='w-[117px] h-10 rounded-[5px] px-5 py-2 border-[1px] border-black text-[14px]'>
                Enroll Now
                </button> */}
                <Button className='h-10'>Enroll Now</Button>
              <p className='font-medium text-[16px] leading-[24px]'>$400</p>
              </div>
            </div>
          </div>
          </div>
          <div className='xl:w-full xl:h-[534px] xl:flex xl:flex-row xl:gap-16 lg:w-full lg:justify-evenly'>
          {/* course 4 */}
          <div className='bg-[#f7f7f7] rounded-[5px] w-[380px] h-[558px] hidden xl:block'>
            <div><Image src={'/images/course4.png'} alt='course4' width={380} height={300}></Image></div>
            <div className='w-[380px] h-[234px] flex flex-col gap-2 place-items-center justify-center'>
              <div className='w-[348px] h-[146px] flex flex-col gap-2'>
                <div className='flex'>
                <p className='text-[14px] leading-[21px] font-semibold'>Design</p>
                <div className='flex ml-auto items-center'>
                  <Image src={'/images/Star 1.png'} alt='star' width={18} height={18}></Image>
                  <p className='text-[14px] leading-[21px] font-semibold ml-1'>5.0 </p>
                  </div>
                  </div>
                <p className='font-bold text-[24px] leading-[33.6px]'>UX/UI Design 201</p>
                <p className='leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-12 items-center w-[348px] h-10'>
              {/* <button className='w-[117px] h-10 rounded-[5px] px-5 py-2 border-[1px] border-black text-[14px]'>
                Enroll Now</button> */}
                <Button className='h-10'>Enroll Now</Button>
              <p className='font-medium text-[16px] leading-[24px]'>$400</p>
              </div>
            </div>
          </div>
          {/* course 5 */}
          <div className='bg-[#f7f7f7] rounded-[5px] w-[380px] h-[558px] hidden xl:block'>
            <div><Image src={'/images/course5.png'} alt='course5' width={380} height={300}></Image></div>
            <div className='w-[380px] h-[234px] flex flex-col gap-2 place-items-center justify-center'>
              <div className='w-[348px] h-[146px] flex flex-col gap-2'>
                <div className='flex'>
                <p className='text-[14px] leading-[21px] font-semibold'>Design</p>
                <div className='flex ml-auto items-center'>
                  <Image src={'/images/Star 1.png'} alt='star' width={18} height={18}></Image>
                  <p className='text-[14px] leading-[21px] font-semibold ml-1'>5.0 </p>
                  </div>
                  </div>
                <p className='font-bold text-[24px] leading-[33.6px]'>UX/UI Design 201</p>
                <p className='leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-12 items-center w-[348px] h-10'>
              {/* <button className='w-[117px] h-10 rounded-[5px] px-5 py-2 border-[1px] border-black text-[14px]'>
                Enroll Now</button> */}
                <Button className='h-10'>Enroll Now</Button>
              <p className='font-medium text-[16px] leading-[24px]'>$400</p>
              </div>
            </div>
          </div>
          {/* course 6 */}
          <div className='bg-[#f7f7f7] rounded-[5px] w-[380px] h-[558px] hidden xl:block'>
            <div><Image src={'/images/course6.png'} alt='course6' width={380} height={300}></Image></div>
            <div className='w-[380px] h-[234px] flex flex-col gap-2 place-items-center justify-center'>
              <div className='w-[348px] h-[146px] flex flex-col gap-2'>
                <div className='flex'>
                <p className='text-[14px] leading-[21px] font-semibold'>Design</p>
                <div className='flex ml-auto items-center'>
                  <Image src={'/images/Star 1.png'} alt='star' width={18} height={18}></Image>
                  <p className='text-[14px] leading-[21px] font-semibold ml-1'>5.0 </p>
                  </div>
                  </div>
                <p className='font-bold text-[24px] leading-[33.6px]'>UX/UI Design 201</p>
                <p className='leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='flex gap-12 items-center w-[348px] h-10'>
              {/* <button className='w-[117px] h-10 rounded-[5px] px-5 py-2 border-[1px] border-black text-[14px]'>
                Enroll Now</button> */}
                <Button className='h-10'>Enroll Now</Button>
              <p className='font-medium text-[16px] leading-[24px]'>$400</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
        <div className='flex justify-center'>
          {/* <button className='w-[152px] h-[40px] border-[1px] border-black rounded-[5px]'>
            View All Courses
            </button> */}
            <Button className='w-[152px]'>View All Courses</Button>
            </div>
    </div>
    {/* team */}
    <div className='w-full h-[1150px] flex flex-col gap-12 px-4 py-12 bg-[#f7f7f7] place-items-center mt-11 justify-between
    xl:h-[895px] lg:h-[600px]'>
      <div className='w-[363px] h-[120px] flex flex-col gap-4'>
        <p className='font-bold text-[32px] leading-[41.6px] text-center'>Our team</p>
        <p className='text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='w-[380px] h-[723px] flex flex-col gap-16 xl:flex-row xl:w-[1280px] xl:h-[209px]
       justify-center lg:flex-row lg:w-full lg:justify-around'>
        {/* team 1 */}
        <div className='w-[380px] h-[209px] flex flex-col gap-6 items-center'>
          <div><Image src={'/images/team1.png'} alt='team1' width={80} height={80}></Image></div>
          <div>
            <p className='font-semibold text-[20px] leading-[30px] text-center'>James Nduku</p>
            <p className='text-[18px] leading-[27px] text-center'>Marketing Coordinator</p>
          </div>
          <div className='w-[100px] h-6 flex gap-[14px]'>
            <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
            <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18} className='ml-1'></Image>
            <Image src={'/images/Vector6.png'} alt='golgol' width={30} height={30}></Image>
          </div>
        </div>
        {/* team 2 */}
        <div className='w-[380px] h-[209px] flex flex-col gap-6 items-center'>
          <div><Image src={'/images/team2.png'} alt='team2' width={80} height={80}></Image></div>
          <div>
            <p className='font-semibold text-[20px] leading-[30px] text-center'>Joseph Munyambu</p>
            <p className='text-[18px] leading-[27px] text-center'>Nursing Assistant</p>
          </div>
          <div className='w-[100px] h-6 flex gap-[14px]'>
            <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
            <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18} className='ml-1'></Image>
            <Image src={'/images/Vector6.png'} alt='golgol' width={30} height={30}></Image>
          </div>
        </div>
        {/* team 3 */}
        <div className='w-[380px] h-[209px] flex flex-col gap-6 items-center'>
          <div><Image src={'/images/team3.png'} alt='team3' width={80} height={80}></Image></div>
          <div>
            <p className='font-semibold text-[20px] leading-[30px] text-center'>Joseph Ngumbau</p>
            <p className='text-[18px] leading-[27px] text-center'>Medical Assistant</p>
          </div>
          <div className='w-[100px] h-6 flex gap-[14px]'>
            <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
            <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18} className='ml-1'></Image>
            <Image src={'/images/Vector6.png'} alt='golgol' width={30} height={30}></Image>
          </div>
        </div>
      </div>
      <div className='hidden w-[380px] h-[723px] xl:flex flex-col gap-16 xl:flex-row xl:w-[1280px] xl:h-[209px]'>
        {/* team 4 */}
        <div className='w-[380px] h-[209px] flex flex-col gap-6 items-center'>
          <div><Image src={'/images/team4.png'} alt='team4' width={80} height={80}></Image></div>
          <div>
            <p className='font-semibold text-[20px] leading-[30px] text-center'>Erick Kipkemboi</p>
            <p className='text-[18px] leading-[27px] text-center'>Web Designer</p>
          </div>
          <div className='w-[100px] h-6 flex gap-[14px]'>
            <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
            <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18} className='ml-1'></Image>
            <Image src={'/images/Vector6.png'} alt='golgol' width={30} height={30}></Image>
          </div>
        </div>
        {/* team 5 */}
        <div className='w-[380px] h-[209px] flex flex-col gap-6 items-center'>
          <div><Image src={'/images/team5.png'} alt='team5' width={80} height={80}></Image></div>
          <div>
            <p className='font-semibold text-[20px] leading-[30px] text-center'>Stephen Kerubo</p>
            <p className='text-[18px] leading-[27px] text-center'>President of Sales</p>
          </div>
          <div className='w-[100px] h-6 flex gap-[14px]'>
            <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
            <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18} className='ml-1'></Image>
            <Image src={'/images/Vector6.png'} alt='golgol' width={30} height={30}></Image>
          </div>
        </div>
        {/* team 6 */}
        <div className='w-[380px] h-[209px] flex flex-col gap-6 items-center'>
          <div><Image src={'/images/team6.png'} alt='team6' width={80} height={80}></Image></div>
          <div>
            <p className='font-semibold text-[20px] leading-[30px] text-center'>John Leboo</p>
            <p className='text-[18px] leading-[27px] text-center'>Dog Trainer</p>
          </div>
          <div className='w-[100px] h-6 flex gap-[14px]'>
            <Image src={'/images/Vector4.png'} alt='linkedIn' width={18} height={18}></Image>
            <Image src={'/images/Vector3.png'} alt='twitter' width={18} height={18} className='ml-1'></Image>
            <Image src={'/images/Vector6.png'} alt='golgol' width={30} height={30}></Image>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        {/* <button className='w-[89px] h-10 rounded-[5px] border-[1px] border-black text-[14px]'>
          View All
          </button> */}
          <Button className='xl:hidden'>View All</Button>
          </div>
    </div>
    {/* Review */}
    <div className='w-full h-[681.89px] flex flex-col gap-12 px-6 py-12 items-center
    xl:h-[830px] xl:bg-[#f7f7f7] xl:px-16 xl:py-28'>
      <div className='w-[361px] h-[120px] flex flex-col gap-6 xl:w-[560px] xl:h-[109px] lg:w-full'>
        <p className='font-bold text-[32px] leading-[41.6px] text-center inline xl:hidden'>What Our Student Say</p>
        <p className='font-bold text-[48px] leading-[41.6px] hidden xl:inline'>Customer Testimonials</p>
        <p className='text-[18px] leading-[27px] text-center xl:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[380px] h-[417.89px] flex flex-col gap-12 xl:w-[1152px] xl:h-[417.89px] lg:w-full lg:place-items-center'>
        <div className='flex xl:w-[1152px] xl:h-[321.89px] xl:gap-8 lg:justify-center'>
        {/* customer 1 */}
        <div className='w-[380px] h-[321.89px] flex flex-col gap-8 border-[2px] border-black p-5'>
          {/* stars */}
          <div><Image src={'/images/stars.png'} alt='stars' width={116} height={18.89}></Image></div>
          <div className='w-[316px] h-[215px] flex flex-col gap-6'>
            <div>
              <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
            </div>
            <div className='flex gap-4'>
              <Image src={'/images/team3.png'} alt='student1pfp' width={54} height={54} className='rounded-full bg-center'></Image>
            <div className='flex flex-col'>
              <p className='font-semibold text-[16px] leading-6 xl:hidden'>Wade Warren</p>
            <p className='xl:hidden'>Position, Company name</p>
              <p className='font-semibold text-[16px] leading-6 hidden xl:inline'>James Nduku</p>
            <p className='hidden xl:inline'>Software Developer</p>
            </div>
            </div>
          </div>
        </div>
        {/* customer 2 */}
        <div className='w-[380px] h-[321.89px] hidden xl:flex flex-col gap-8 border-[2px] border-black p-5'>
          {/* stars */}
          <div><Image src={'/images/stars.png'} alt='stars' width={116} height={18.89}></Image></div>
          <div className='w-[316px] h-[215px] flex flex-col gap-6'>
            <div>
              <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
            </div>
            <div className='flex gap-4'>
              <Image src={'/images/team1.png'} alt='student2pfp' width={54} height={54} className='rounded-full bg-center'></Image>
            <div><p className='font-semibold text-[16px] leading-6'>Erick Kipkemboi</p>
            <p>Scrum Master</p></div>
            </div>
          </div>
        </div>
        {/* customer 3 */}
        <div className='w-[380px] h-[321.89px] hidden xl:flex flex-col gap-8 border-[2px] border-black p-5'>
          {/* stars */}
          <div><Image src={'/images/Stars.png'} alt='stars' width={116} height={18.89}></Image></div>
          <div className='w-[316px] h-[215px] flex flex-col gap-6'>
            <div>
              <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
            </div>
            <div className='flex gap-4'>
              <Image src={'/images/team6.png'} alt='student3pfp' width={54} height={54} className='rounded-full bg-center'></Image>
            <div><p className='font-semibold text-[16px] leading-6'>Stephen Kerubo</p>
            <p>UI/UX Designer</p></div>
            </div>
          </div>
        </div>
        </div>
        {/* arrows */}
        <div className='flex w-[380px] h-12 justify-between items-center xl:w-[1152px]'>
          <div><Image src={'/images/Slider Dots.png'} alt='slider' width={72} height={8}></Image></div>
          <div className='flex gap-2'>
            <div className='w-12 h-12 rounded-full border-[1px] border-black p-3'>
              <Image src={'/images/arrowleft.png'} alt='left arrow' width={24} height={24}></Image>
            </div>
            <div className='w-12 h-12 rounded-full border-[1px] border-black p-3'>
              <Image src={'/images/arrowright.png'} alt='right arrow' width={24} height={24}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page;  
