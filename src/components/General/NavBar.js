import { Link } from "react-scroll"

function NavBar() {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-black fixed-top">
                <Link 
                to='home' 
                className='navbar-brand m-3' 
                spy={true} smooth={true} 
                offset={-255}
                duration={50}>About me</Link>
                <Link to='projects' className='navbar-brand m-3' spy={true} smooth={true} offset={-115} duration={50}>Projects</Link>
                <Link to='skills' className='navbar-brand m-3' spy={true} smooth={true} offset={-105} duration={50}>Skills</Link>
            </nav>
        </>
    )
}

export default NavBar