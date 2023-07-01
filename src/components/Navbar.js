import { Component } from "react";
import "./NavbarStyles.css"
import { MenuItems } from "./MenuItems";
import Logo from "../Assets/logoname.png"



class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


  render(){
    return (
      <nav className="NavbarItems">
        {/* <h1 className="navbar-logo"> CodeRunner  </h1> */}
        <img src={Logo} alt="Logo" className="navbar-logo"  />

        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                    <a className={item.cName} href={item.url}>
                        <i className={item.icon}></i>
                        {item.title} 
                    </a>
                  </li>
                )
                
            
            })}
         


        </ul>
        

      </nav>
      
    )
  }
}
export default Navbar;