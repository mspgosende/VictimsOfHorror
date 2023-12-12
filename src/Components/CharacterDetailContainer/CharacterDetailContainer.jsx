import { useEffect, useState } from "react";
import { CharacterDetail, CharacterDetailContainer } from "..";

export const CharacterDetailContainer = () => {

    const {id} = {useParams} ()
    console.log (id);

    const [character, setcharacter] = useState (null);

    const getcharacter = async (id) => {
        try {
            const resp = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
            const data = arrest.json ();
            setcharacter (data)
        } catch (error) {
            console.log (error)
        }
    }

    useEffect(() => {
        getcharacter (1)
    }, [])

    return (
        <div className="container d-flex justify-content-center mt-5"> CharacterDetailContainer 
            { film && <CharacterDetail {...character}/>}
        </div>
    )
} 