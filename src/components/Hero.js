import "./HeroStyle.css"
import HeroImage from "../Assets/hero1.png"


function Hero() {

    return(
        <div>
            < img className="hero-image" alt="Image" src={HeroImage}/>
            <div className="hero-text"> 
                <h1> We Have the Biggest Solutions</h1>
                <p> You can Join with us</p>
            </div>
        </div>
    )
}

export default Hero;