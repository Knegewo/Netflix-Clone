import React, {useState} from 'react';
import NavBar from '../Nav/NavBar';
import backgroundImage from '../../assets/home.jpg;'
import MovieLogo from "../../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle} from 'react-icons/ai'

export default function NetflexHome() {
    const [isScrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onScroll = null);
            }
  return (
    <div>
        <NavBar isScrolled={isScrolled}/>
        <div>
            <img src={backgroundImage} alt="background" className='background-image'
            />
        
        <div className='container'>
            <div className='logo'>
                <img src={MovieLogo} alt="Movie Logo" 
                />
            <div className='button flex'>
                <button className='flex j-center a-center'>
                <FaPlay /> Play
                </button>

                <button className='flex j-center a-center'>
                <AiOutlineInfoCircle /> More Info
                </button>
            </div>
         </div>
        </div>     
    </div>
    </div>
  )
}
