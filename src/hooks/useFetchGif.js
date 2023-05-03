import { useEffect, useState } from "react"
import { gifFetch } from "../helpers/gifFetch";

export const useFetchGif = ( category ) => {
    
    const [fetchCategories, setfetchCategories] = useState([]);

    const gifResponse = async () => {
        const resp = await gifFetch( category );
        setfetchCategories( resp );
    }

    useEffect(() => {
        gifResponse()
    }, []);
    
    return fetchCategories;
}
