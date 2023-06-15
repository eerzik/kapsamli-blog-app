import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'
import BlogList from '../../components/BlogList';

export default function Home() {
    const {data,yukleniyor,hata}=useFetch('http://localhost:8000/bloglar');
   // console.log(data);
    return (
        <div className='home'>
           {hata&&<p className='error' >{hata}</p>}
           {yukleniyor&&<p>Yükleniyor...</p>}
           {data && <BlogList bloglar={data} /> }
        </div>
    )
}