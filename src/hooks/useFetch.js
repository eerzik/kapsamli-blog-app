import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [hata, setHata] = useState(null);
    const [yukleniyor, setYukleniyor] = useState(false);

    useEffect(() => {

        //Veri çekmenin iptal edildiğini söylemek için
        const controller = new AbortController();
        const fetchData = async () => {
            setYukleniyor(true);

            try {
                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const data = await res.json();
                setYukleniyor(false);
                setData(data);
                setHata(null);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('Vari Çekme İptal Edildi')
                } else {
                    setYukleniyor(false)
                    setHata('Veriler Yüklenemedi!')
                }
            }

        }
        fetchData();
        return () => {
            controller.abort();
        }

    }, [url]);

    return { data, yukleniyor, hata }
}