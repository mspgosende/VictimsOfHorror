
export const Character = () => {
return (
    <div className="border border -3 p-3 d-flex flex-column m-2">
            <p> Name: </p>
            <img src="" alt="" />
            <Link to={`/character/${id}`}>
                <button className="btn btn-dark mt-2"> </button>
            </Link>
            <button> Details </button>
    </div>
);
};