import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-2/6 h-screen bg-white content-center">
          <h1 className="font-medium text-4xl text-center">HI! I AM</h1>
          <h1 className="font-bold text-4xl italic text-center">
            MUNAZHA IRFAN
          </h1>
          <h1 className="text-2xl text-center">Aspiring Web Developer</h1>
        </div>
        <div className="w-4/6 content-center justify-items-center">
          <h1 className="font-bold text-4xl text-center">About Me</h1>
          <p className="text-center">
            Hi! I'm a CS student at Virtual University, currently pursuing ADP.
            <br></br>I have a strong passion for coding and I'm honing my skills
            at Governor House IT Program.<br></br> When I'm not immersed in the
            world of programming,<br></br> you'll find me expressing my
            creativity through painting.
          </p>
          <Link href="/info">
          <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded-md shadow
           hover:bg-teal-600 transition duration-300 focus:outline-none 
           focus:ring-2 focus:ring-teal-400 mt-8">
            Get to know more about me
          </button>
          </Link>
          <Link href="/portfolio">
          <button className="ml-8 bg-teal-500 text-white font-bold py-2 px-4 rounded-md shadow
           hover:bg-teal-600 transition duration-300 focus:outline-none 
           focus:ring-2 focus:ring-teal-400 mt-8">Portfolio</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
