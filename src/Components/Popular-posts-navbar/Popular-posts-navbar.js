import './Popular-posts-navbar.css'
import Button from './Button'

const PopularNavbar = () => {

    return (
        <nav className="PopNavbar">
            <Button text='Best' />
            <Button text='Hot' />
            <Button text='New' />
            <Button text='Top' />
            <Button text='...' />
            <Button text='View' />  
        </nav>
    )
}

export default PopularNavbar