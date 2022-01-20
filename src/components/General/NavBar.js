import { Link, useLocation } from "react-router-dom"

function NavBar() {
    const all_paths = ['/', '/projects', '/skills']
    const curr_part = useLocation().pathname
    return (
        <div className="content">
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-black fixed-top">
                <Link to='/' className={curr_part === '/' || !all_paths.includes(curr_part) ? 'navbar-brand m-3 active_tab' : 'navbar-brand m-3 '}>About me</Link>
                <Link to='/projects' className={curr_part === '/projects' ? 'navbar-brand m-3 active_tab' : 'navbar-brand m-3 '}>Projects</Link>
                <Link to='/skills' className={curr_part === '/skills' ? 'navbar-brand m-3 active_tab' : 'navbar-brand m-3 '}>Skills</Link>
            </nav>
        </div>
    )
}

export default NavBar