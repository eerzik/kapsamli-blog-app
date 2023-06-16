import './Blog.css'
import { useParams } from 'react-router-dom'
//import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'


export default function Blog() {

    const { mode } = useTheme();
    const { id } = useParams();

    //const url = 'http://localhost:8000/bloglar/' + id;
    // const { hata, yukleniyor, data:blog } = useFetch(url);

    const [blog, setBlog] = useState(null);
    const [hata, setHata] = useState(false);
    const [yukleniyor, setYukleniyor] = useState(false);

    useEffect(() => {
        setYukleniyor(true);
        const ref = doc(db, 'bloglar', id);
        getDoc(ref).then(doc => {
            setYukleniyor(false)
            if (doc.exists()) {

                setBlog(doc.data())
            }
            else {
                setHata('Veri Bulunamadı !!!')
            }

            //console.log(doc.data());
        }).catch(err => {
            setYukleniyor(false);
            setHata(err.message);
        })
    }, [id])

    return (
        <div className={`blog ${mode}`}>
            {hata && <p className='error' >{hata}</p>}
            {yukleniyor && <p>Yükleniyor...</p>}
            {blog &&
                (
                    <>
                        <h2 className='page-title' >{blog.baslik}</h2>
                        <p className='time' >{blog.okunmaSuresi} okunma süresi</p>
                        <ul>
                            {blog.kategoriler.map(kat => (<li key={kat}>{kat}</li>))}
                        </ul>
                        <p className='info' >{blog.icerik}</p>
                    </>
                )
            }
        </div>
    )
}
