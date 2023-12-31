import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {

    const { bgColor, changeColor } = useTheme();
    // console.log(bgColor);
    return (
        //Navbar ın rengini themecontext den getirdik.
        <div className='navbar' style={{ backgroundColor: bgColor }} >
            <nav onClick={() =>  changeColor('#c44569') } >
                <Link to='/' className="brand" > <h1>AOS Blog</h1> </Link>
                <Searchbar />
                <Link to='/create' > <h1>Yeni Yazı</h1> </Link>
            </nav>
        </div>
    )
}

