//? Importing Icon images for the Popular posts navbar from REACT ICONS

import { IoFlameSharp } from 'react-icons/all';
import { TiStarburst } from 'react-icons/all';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdViewAgenda } from 'react-icons/all';
import { IoMdArrowDropdown } from 'react-icons/all';

import './Popular-posts-navbar.css'
import ButtonOne from './Button'
import ButtonTwo from './ButtonTwo'

const PopularNavbar = (props) => {

    return (
        <div className='PopPostsTitle'>
            Popular Posts
            <nav className='PopNavbar'>

                <div className='PopNavButtons'>
                    <div className='FilterButtons'>
                        <ButtonOne
                            className='Button HotBtn' text='Hot'
                            onClick={() => props.sortBy(props.sortHot)}
                            img={<IoFlameSharp />}
                        />

                        <select>
                            <option>United Kingdom</option>
                            <option>Neils Lisp YouTube Channel</option>
                            <option>Codenation Canteen</option>
                            <option>Tam's Quizzical</option>
                        </select>

                        {/* <DropdownLocation /> */}
                        {/* <Dropdown>
                            <Dropdown.Toggle vaient='seccess' id='dropdownLocation'>
                                United Kingdom
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="https://wearecodenation.com/event/master-coding/">Codenation</Dropdown.Item>
                                <Dropdown.Item href="https://youtu.be/3GEAINRCbJ4/">Neils YouTube</Dropdown.Item>
                                <Dropdown.Item href="https://letsget-quizzical.herokuapp.com/about">Let's Get Quizzicle</Dropdown.Item>
                            </Dropdown.Menu> */}
                        {/* </Dropdown> */}
                        {/* <ButtonTwo
                            className='Button Location'
                            text='United Kingdom'
                            img={<IoMdArrowDropdown />}>
                        </ButtonTwo> */}

                        <ButtonOne
                            className='Button NewBtn'
                            text='New'
                            onClick={() => props.sortBy(props.sortNew)}
                            img={<TiStarburst />}
                        />

                        <ButtonOne
                            className='Button TopBtn'
                            text='Top'
                            onClick={() => props.sortBy(props.sortTop)}
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
                        img={<MdViewAgenda />}
                        img2={<IoMdArrowDropdown />}
                    />
                </div>
            </nav>
        </div>
    )
}

export default PopularNavbar