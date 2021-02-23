import { IoRocketSharp } from 'react-icons/all';
import { IoFlameSharp } from 'react-icons/all';
import { TiStarburst } from 'react-icons/all';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { BsViewStacked } from 'react-icons/bs';

import './Popular-posts-navbar.css'
import Button from './Button'

const PopularNavbar = () => {

    return (
        <nav className='PopNavbar'>
            <div className='LeftButtons'>

                <Button className="Button BestBtn"
                    text='Best'
                    onClick={() => console.log("Best")}
                    img={<IoRocketSharp />} />

                <Button className='Button HotBtn' text='Hot'
                    onClick={() => console.log("HotStuff")}
                    img={<IoFlameSharp />}
                />

                <Button className='Button NewBtn'
                    text='New'
                    onClick={() => console.log("New Stuff")}
                    img={<TiStarburst />}
                />

                <Button className='Button TopBtn'
                    text='Top'
                    onClick={() => console.log("Top filter")}
                    img={<FaSortAmountUpAlt />}
                />

                <Button className='Button ThreeDotsBtn'
                    text=''
                    onClick={() => console.log("Menu Expand")}
                    img={<BsThreeDots />}
                />

            </div>
            <div className='RightButtons'>
                <div className='Button ViewBtn'>
                    <BsViewStacked />
                    <Button text='View' />
                </div>
            </div>

        </nav>
    )
}

export default PopularNavbar