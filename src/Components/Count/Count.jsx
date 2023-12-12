
import { useCount } from "../../hooks/useCount";

export const Count = () => {

    const {count, increment, decrement} = useCount ();

    return (
    <>
    < Button text="+" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={increment} />
    <strong> {count} </strong>
    < Button text="+" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={decrement} />
    </>
)
};
