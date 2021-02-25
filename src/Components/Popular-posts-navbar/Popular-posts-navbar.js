//? Importing Icon images for the Popular posts navbar from REACT ICONS

// import { IoRocketSharp } from 'react-icons/all';
import { IoFlameSharp } from 'react-icons/all';
import { TiStarburst } from 'react-icons/all';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { BsViewStacked } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/all';

import './Popular-posts-navbar.css'
import ButtonOne from './Button'
import ButtonTwo from './ButtonTwo'

const PopularNavbar = (props) => {

    return (
        <div className='PopPostsTitle'>
            Popular Posts
            <nav className='PopNavbar'>

            {/* //? Split the 6 Items up into Left and Right - 5 left/ 1 right to help split in CSS */}
                <div className='PopNavButtons'>
                    <div className='FilterButtons'>
                        <ButtonOne
                            className='Button HotBtn' text='Hot'
                            onClick={() => console.log("HotStuff")}
                            img={<IoFlameSharp />}
                        />

                        <ButtonTwo
                            className='Button Location'
                            text='United Kingdom'
                            img={<IoMdArrowDropdown />}>
                            <option>United Kingdom</option>
                            <option>South with the Faries</option>
                            <option>Tup North</option>/
                        </ButtonTwo>

                        <ButtonOne
                            className='Button NewBtn'
                            text='New'
                            onClick={() => props.sortByNew ()}
                            img={<TiStarburst />}
                        />

                        <ButtonOne
                            className='Button TopBtn'
                            text='Top'
                            onClick={() => console.log("Top filter")}
                            img={<FaSortAmountUpAlt />}
                        />

                        <ButtonOne
                            className='Button ThreeDotsBtn'
                            text=''
                            onClick={() => console.log("Menu Expand")}
                            img={<BsThreeDots />}
                        />

                    </div>

                    <ButtonTwo
                        className='Button ViewBtn'
                        text=''
                        onClick={() => console.log('View options')}
                        img={<BsViewStacked />}
                        img2={<IoMdArrowDropdown />}
                    />
                </div>
            </nav>
        </div>
    )
}

export default PopularNavbar