import { useEffect, useState } from "react"

const localCache = {};


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });


    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });


        if(localCache[url]) {
            console.log("usando caché");
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
            });
            return;
        }

        const resp = await fetch(url);

        //sleep
        await new Promise(resolve => setTimeout(resolve, 1000));

        if(!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        }

        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: null,
        })

        //cache
        localCache[url] = data;
    }

    useEffect(() => {
        getFetch();
    }, [url])
    

  return {
    ...state,
    }
}

