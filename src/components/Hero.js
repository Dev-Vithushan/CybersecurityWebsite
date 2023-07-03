import "./HeroStyle.css"
import HeroImage from "../Assets/heroImage.jpg"


function Hero(props) {

    return(
        <div>
            < img className={props.cName} alt="Image" src={props.heroImg}/>
            <div className="hero-text"> 
                <h1> {props.title}</h1>
                <p>  {props.text}</p>
                <a href={props.url} className={props.buttonText}> {props.buttonText}</a>
            </div>
        </div>
    )
}

export default Hero;