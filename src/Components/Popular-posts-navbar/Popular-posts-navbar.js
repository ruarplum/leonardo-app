//? Importing Icon images for the Popular posts navbar from REACT ICONS

// import { IoRocketSharp } from 'react-icons/all';
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

            {/* //? Split the 6 Items up into Left and Right - 5 left/ 1 right to help split in CSS */}
            <div className='LeftButtons'>

{/* //? Realised the BEST button is only when logged into the updated Reddit */}
                {/* <Button className="Button BestBtn"
                    text='Best'
                    onClick={() => console.log("Best")}
                    img={<IoRocketSharp />} /> */}

                <Button className='Button HotBtn' text='Hot'
                    onClick={() => console.log("HotStuff")}
                    img={<IoFlameSharp />}
                />

                <select className='Location' placeholder='United Kingdom'>
                    <option>United Kingdom</option>
                    <option>South with the Faries</option>
                    <option>Tup North</option>/
                </select>

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
                <Button className='Button ViewBtn'
                text=''
                onClick={() => console.log('View options')}
                img={<BsViewStacked />}
                />
                 
            </div>

        </nav>
    )
}

export default PopularNavbar