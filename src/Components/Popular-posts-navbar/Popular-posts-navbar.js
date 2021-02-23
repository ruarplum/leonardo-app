import './Popular-posts-navbar.css'
import Button from './Button'

const PopularNavbar = () => {

    return (
        <nav className='PopNavbar'>
            <div className="LeftButtons">
            <Button text='Best' />
            <Button text='Hot' />
            <Button text='New' />
            <Button text='Top' />
            <Button text='...' />
            </div>
            <div className='RightButtons'>
            <Button text='View' />
            </div>
            
        </nav>
    )
}

export default PopularNavbar