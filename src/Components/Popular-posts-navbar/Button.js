const ButtonOne = (props) => {
    return (
        <div className={props.className}>

            <button
                className="button"
                onClick={props.onClick}
            >
                {props.img}
                {props.text}
            </button>
        </div>
    )
}

export default ButtonOne