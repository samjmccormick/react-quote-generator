
function Button ({handleClick, color}) {

    return (
        <button onClick={handleClick} style={{backgroundColor: color}}>New Quote</button>
    )
}

export default Button