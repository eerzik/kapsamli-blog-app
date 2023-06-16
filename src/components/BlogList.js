import { useTheme } from '../hooks/useTheme'
import './BlogList.css'
import { Link } from 'react-router-dom'
import DeleteIcon from '../assets/delete.svg'
// import { useEffect, useState } from 'react';
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'



export default function BlogList({ bloglar }) {

    const { mode } = useTheme();

    if (bloglar.length === 0) {
        return <div className='error' >Aranan Yazı Bulunamadı!</div>
    }

    const handleDelelete = async (id) => {
        console.log(id)

        const ref=doc(db,'bloglar',id)
        await deleteDoc(ref);
    }


    return (
        <div className='blog-list'>
            {
                bloglar.map(blog => (
                    <div key={blog.id} className={`card ${mode}`} >
                        <h3  >{blog.baslik}</h3>
                        <p>{blog.okunmaSuresi}</p>
                        <div>
                            {blog.icerik.substring(0, 100)}...
                        </div>
                        <Link to={`/blog/${blog.id}`} > Daha Fazla Oku </Link>
                        <img className='delete' onClick={() => handleDelelete(blog.id)} src={DeleteIcon} alt='Yazı Sil' ></img>
                    </div>

                ))
            }
        </div>
    )
}