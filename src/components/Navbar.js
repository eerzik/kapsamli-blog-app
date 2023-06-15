import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className='navbar' >
            <nav>
                <Link to='/' className="brand" > <h1>AOS Blog</h1> </Link>
                <Link to='/create' > <h1>Yeni Yazı</h1> </Link>
            </nav>
        </div>
    )
}

