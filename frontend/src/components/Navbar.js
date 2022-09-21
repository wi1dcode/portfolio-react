import { Link } from "react-router-dom"
const Navbar = () => {

    return <nav>
                <ul className="flex items-center justify-evenly uppercase font-medium">
                    <li><a href="#about">about</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a class="logo_a" href="#">wildcode</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
  }

export default Navbar