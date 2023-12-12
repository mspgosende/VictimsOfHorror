import { Film } from "../Character/Character"

export const FilmList = ({ film }) => {
    return (
        <div className="d-flex flex-sm-wrap"> 
             { film.map(Film => < Film key={Film.id} {...Film}/>)}
        </div>
    )
}