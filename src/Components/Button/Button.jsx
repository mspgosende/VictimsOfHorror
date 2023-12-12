
export const Button = () => {
    ({text= 'Button', variant= 'btn primary', functionClick, color, bClass}) => {
        const textColor = styles [color];
    return (
        <button className= {`btn ${variant} m-2 ${styles[color]} ${bClass}`} onClick={functionClick} > {text} </button>
    )
};
};