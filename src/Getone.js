import { useState, useEffect } from "react";

const Getone = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);


    
    useEffect(() => {
        const abortCont = new AbortController();
        const jwtToken = localStorage.getItem('token');
    
        setTimeout(() => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                signal: abortCont.signal
            })
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
            })
            .catch((err) => {  
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                }
            });
        }, 1000);
    
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending }
}

export default Getone;