import { useEffect } from "react";
import { useState } from "react";
import { useCount } from "../../hooks/useCount";

export const CharacterListContainer = () => {

  const { status } = {useParams} ();
  const [page, setPage] = useState (1);

  const {count, increment, decrement} = useCount(1);

  const {data, isloading} =  useFetch (`https://rickandmortyapi.com/api/character/${status ? `?page=${count}&status=${count}`: "?page=${page}" }`);

  return (
    <div> className= "container d-flex flex-column align-items-center" 
        <CharacterList character={character}/>
        <div>
            { count > 1 && <button className="btn btn-dark" onClick={decrement}> Atras </button>}
            <strong> Page { count } </strong>
            <button className="btn btn-dark" onClick={increment}> Siguiente </button>
        </div>
    </div>
  )
};
