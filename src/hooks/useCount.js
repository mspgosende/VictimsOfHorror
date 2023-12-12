
export const useCount = () => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount (count+1);
    };

    const decrement = () => {
    if (count === 0){  
        return setCount (0);
    }
    setCount (count+1)
    };

    const reset = () => {
        setCount (initial);
    }

    return (
        count, 
        increment,
        decrement,
        reset
    )
};