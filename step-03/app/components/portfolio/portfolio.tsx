import Header from "../header/header";
import Footer from "../footer/footer";
export default function Portfolio(){
    return(
        <div>
            <Header/>
            <h1 className="text-center text-5xl underline font-bold">MY WORK</h1>
            <ul className="underline decoration-dotted text-3xl mt-6 text-center">
                <li className="" >DYNAMIC RESUME BUILDER</li>
                <div className="flex justify-center">
                    <iframe src="https://dynamic-resume-builder-kappa.vercel.app/" width="800" height="700" className="my-10"></iframe>
                </div>
                <li>CATS FACTS</li>
                <div className="flex justify-center">
                <iframe src="https://cats-facts-alpha.vercel.app/"  width="800" height="400" className="my-10"></iframe>
                </div>
                <li>NUMBER GUESSING GAME</li>
                <div className="flex justify-center">
                <iframe src="https://number-guessing-game-five-theta.vercel.app/"  width="800" height="400" className="my-10"></iframe>
                </div>
                <li>DIGITAL CLOCK</li>
                <div className="flex justify-center">
                <iframe src="https://digital-clock-gilt-omega.vercel.app/"  width="800" height="400" className="my-10"></iframe>
                </div>
            </ul>
            <Footer/>
        </div>
    )
}