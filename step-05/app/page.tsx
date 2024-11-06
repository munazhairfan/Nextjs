export default function Home() {
  return (
    <>
    <header className="w-full h-[134px] bg-[#A29875] flex items-center">
    <h1 className="w-[439px] ml-9 font-[Rye] text-[75px] font-normal text-[#FFFFFF]">
      MANZZARI</h1>
    </header>
    <main className="flex w-full justify-evenly">
      <div className="mt-[190px] ml-12">
        <p className="h-[189px] font-[Libre-Bodoni] font-bold text-[50px] leading-[65.8px]"
        >IMPECCABLE <br></br>CRAFTSMANSHIP AND <br></br>FINESSE</p>
          <div>
        <div className="h-[147px] mt-10">
        <p className="font-[Libre-Bodoni] text-[40px] font-medium leading-[49.35px] text-[#787054]">
          An example of intricate workmanship and detail, elegant <br></br>
           necklaces and long and short chains form a part of our <br></br> desirable collection
        </p>
        </div>
          <button className="w-[288px] h-[58px] p-2.5 text-[#FFFFFF] bg-[#A29875] rounded-[10px] gap-2.5 text-[30px] font-[Libre-Bodoni]
          flex items-center justify-center mt-10">Explore Now</button>
          </div>
      </div>
      <div className="w-[490px] h-[667px] rounded-tl-[150px] rounded-br-[150px] bg-[url('/main-image.svg')] m-24">
      </div>
    </main>
    </>
  )
}