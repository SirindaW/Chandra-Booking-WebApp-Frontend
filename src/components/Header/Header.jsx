import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.js';
import text from './text.js';
import {bookingUrl} from '../../constants/pathUrl.js';

const Header = ({ imgSrc, imgAlt, displayText=true, headText=text.head, detailText=text.detail, buttonText=text.button }) => {
  return (
    <div className="bg-primary h-[800px] relative">
      <img src={imgSrc} alt={imgAlt} className="w-full h-[800px] object-cover" />
      { displayText && (
        <div className="absolute ss:bottom-24 bottom-48 sm:left-24 left-10">
            <div className={`${styles.headText} font-bold md:text-8xl sm:text-7xl ss:text-6xl text-4xl`}>{headText}</div>
            <div className={`${styles.headText} ss:text-4xl text-xl mb-5 ml-2`}>{detailText}</div>
            <Link to={bookingUrl}><div className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:bg-white hover:text-secondary`}>{buttonText}</div></Link>
        </div>
      )}
    </div>
  )
}

export default Header