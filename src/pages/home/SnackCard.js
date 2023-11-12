import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faCandyCane, faBirthdayCake, faMugHot } from '@fortawesome/free-solid-svg-icons';
import CategoryButton from './CategoryButton';



const SnackCard = ({ title, description, icon }) => {





    return (
      <div className="w-64 h-96 flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
        <div className="mb-4 w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
          {
          title === "Cookies" ? 
          (<FontAwesomeIcon icon={faCookie} size="3x" /> ) : 
          title === "Sweets" ? (
            <FontAwesomeIcon icon={faCandyCane} size="3x" /> ):
          title === "Pastries" ? (
              <FontAwesomeIcon icon={faBirthdayCake} size="3x" /> ):
          title === "Drinks" ? (
                  <FontAwesomeIcon icon={faMugHot} size="3x" /> ):
         
            
          <img src={icon} alt={title} className="w-12 h-12" />
          }
          
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-center flex-1">{description}</p>
        <CategoryButton category={title} />
        {/* <button  className="bg-[#888888] hover:bg-red-600 text-white px-6 py-3 rounded mt-4 transition duration-300">Explore Menu</button> */}
      </div>
    );
  };
export default SnackCard;