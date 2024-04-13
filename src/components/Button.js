import "./HeroStyle.css"



function Button(props) {

    return(
        <div>
            <a href={props.url} className="buttonClass"> {props.buttonText}</a>
        </div>
    )
}

export default Button;


