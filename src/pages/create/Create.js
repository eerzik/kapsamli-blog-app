import './Create.css'
import { useState } from 'react'

export default function Create() {

    const [baslik, setBaslik] = useState('')
    const [icerik, setIcerik] = useState('')
    const [okunmaSuresi, setOkunmaSuresi] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(baslik, icerik, okunmaSuresi);
    }

    return (
        <div className='create'>
            <h2 className='page-title' >Yeni Yazı Oluştur.</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Yazı Başlık</span>
                    <input type="text" onChange={(e)=>setBaslik(e.target.value)} value={baslik} required />
                </label>
                {/* kategoriler gelecek */}
                <label>
                    <span>Yazı İçerik</span>
                    <textarea onChange={(e)=>setIcerik(e.target.value)} value={icerik} required></textarea>
                </label>
                <label>
                    <span>Okunma Süresi</span>
                    <input type="number" onChange={(e)=>setOkunmaSuresi(e.target.value)} value={okunmaSuresi} required />
                </label>
                <button className='btn' >Oluştur</button>
            </form>
        </div>
    )
}