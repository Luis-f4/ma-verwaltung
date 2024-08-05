import { useState, useEffect } from "react";

const Get = (urls) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        const fetchData = async () => {
            try {
                const responses = await Promise.all(urls.map(url =>
                    fetch(url, { signal: abortCont.signal }).then(res => {
                        if (!res.ok) {
                            throw Error('could not fetch the data for that resource');
                        }
                        return res.json();
                    })
                ));
                // Combine data from all responses
                const combinedData = responses.flat();
                setData(combinedData);
                setIsPending(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                }
            }
        };
        
        fetchData();

        return () => abortCont.abort();
    }, [urls]);

    return { data, isPending };
}

export default Get;
