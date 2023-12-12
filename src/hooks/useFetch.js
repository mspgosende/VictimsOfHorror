import { useEffect, useState } from "react";
import { CharacterListContainer } from "../components";

export const useFetch = (url) => {
    const [dataFetch, setDataFetch] = useState ({
        data : null,
        isloading : true, 
    })
    const getData = async () => {    
    
    try {
    const resp = await fetch (url);
    const respData = await resp.json();
    setDataFetch ({
        data: respData,
        isloading: false,
    })

    } catch(error) {
        console.log (error)
    }
};

    useEffect ( () => {
     getData ()
    }, [url] )

    return {
        data: dataFetch.data,
        isloading: dataFetch.isloading
    }
};