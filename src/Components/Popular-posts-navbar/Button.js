import { FaGithub } from 'react-icons/fa';

const Button = ({ color, text, onClick }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            className="button"
            onClick={onClick}

        >
            {text}
        </button>
    )
}

export default Button
