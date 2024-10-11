import Header from "./components/Header/header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

export default function HomePage(){
  return(
    <>
    <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    />
    </head>
    <Header/>
    <HeroSection/>
    <Footer/>
    </>
  )
}
