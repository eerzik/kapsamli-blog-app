import './Search.css'
import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import BlogList from '../../components/BlogList'

export default function Search() {
    const queryString = useLocation().search;
    //console.log(queryString)
    const queryParams = new URLSearchParams(queryString);
    //console.log(queryParams);
    const query = queryParams.get('q')
    // console.log(query)
    const url = 'http://localhost:8000/bloglar?q=' + query;

    const { hata, yukleniyor, data } = useFetch(url);
    // console.log(data)
    return (
        <div>
            <h2 className='page-title'>Aranan Kelime "{query}"</h2>
            {hata&&<p className='error' >{hata}</p>}
           {yukleniyor&&<p className="loading">Yükleniyor...</p>}
           {data && <BlogList bloglar={data} /> }
        </div>
    )
}