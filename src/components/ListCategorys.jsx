import { useFetchGif } from "../hooks/useFetchGif"
import { Gif } from "./Gif";

export const ListCategorys = ({ category }) => {

    //useFetchGif
    const gif = useFetchGif(category);

    return (
        <>
        <h2 className="mt-3"> {category}</h2>
        
        <div className="row ">
            {gif.map(({ id, title, url }) => (

                <Gif
                    key={id}
                    title={title}
                    url={url} 
                />

            ))}
        </div>
        </>
    )
}
