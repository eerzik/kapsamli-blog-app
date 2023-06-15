import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET") => {

    const [data, setData] = useState(null);
    const [hata, setHata] = useState(null);
    const [yukleniyor, setYukleniyor] = useState(false);

    const [options, setOptions] = useState(null)
    const postData = (data) => {
        setOptions(
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify
            }
        )
    }

    useEffect(() => {

        //Veri çekmenin iptal edildiğini söylemek için
        const controller = new AbortController();
        const fetchData = async (fetchOptions) => {
            setYukleniyor(true);

            try {
                const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const data = await res.json();
                setYukleniyor(false);
                setData(data);
                setHata(null);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('Veri Çekme İptal Edildi')
                } else {
                    setYukleniyor(false)
                    setHata('Veriler Yüklenemedi!')
                }
            }

        }

        if (method === "GET") {
            fetchData();
        }

        if (method === "POST" && options) {
            fetchData(options)
        }


        return () => {
            controller.abort();
        }

    }, [url,method,options]);

    return { data, yukleniyor, hata, postData }
}