import './Blog.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

export default function Blog() {

    const { id } = useParams();

    const url = 'http://localhost:8000/bloglar/' + id;
    const { hata, yukleniyor, data:blog } = useFetch(url);


    return (
        <div className='blog'>
            {hata&&<p className='error' >{hata}</p>}
           {yukleniyor&&<p>Yükleniyor...</p>}
           {blog && 
            <h1> {blog.baslik} </h1>
            }
        </div>
    )
}
