
const Button = (props) => {
    return (
        <div className={props.className}>
            {props.img}
            <button
                className="button"
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button
