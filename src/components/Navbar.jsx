import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink
                className='link parent-item capitalize nav-link'
                to="home">Home</NavLink >

        </nav>
    )
}

export default Navbar