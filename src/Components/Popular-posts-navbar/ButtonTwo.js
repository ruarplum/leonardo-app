const ButtonTwo = (props) => {
    return (
        <div className={props.className}>
            
            <button
                className="buttonTwo"
                onClick={props.onClick}
            >
                {props.text}
                {props.img}
                {props.img2}
            </button>
        </div>
    )
}

export default ButtonTwo