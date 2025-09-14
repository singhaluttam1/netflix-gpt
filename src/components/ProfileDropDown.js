import React, { useState, useRef, useEffect } from "react";
import { menuItems, profiles } from "../utils/constant";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router";


const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate=useNavigate()
  const handleMenuClick=(text)=>{
    if(text==="Help Centre"){
      navigate('/help')
    }
    else if(text==="Account"){
      navigate('/profiles')
    }
    else {
    console.log("Clicked:", text);
  }
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)

    }
  }, [])

  return (
    <div
      className="relative py-2 px-4 mx-4 my-2 inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={dropdownRef}
    >
      {/* Button */}
      <button
      onClick={() => setIsOpen((prev) => !prev)} 
        className="flex items-center gap-2 focus:outline-none"
      >
        <img
          src="img/smile.jpg"
          className="h-10 w-10 cursor-pointer rounded-md"
          alt="avatar"
        />
        <IoIosArrowDropdown
          className={`h-6 w-6 text-white transform transition-transform  ${isOpen ? "rotate-180" : ""} `}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-black border border-gray-700 rounded-lg shadow-lg py-4 z-50">
          {/* Profiles */}
          <div className="space-y-3 px-4">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg cursor-pointer"
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-8 w-8 rounded-md"
                />
                <span className="text-white text-sm">{profile.name}</span>
                <span className="text-white text-sm">{profile.emoji}</span>
              </div>
            ))}
          </div>

          <hr className="my-3 border-gray-700" />

          {/* Menu Items */}
          <div className="space-y-2 px-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition-colors text-white text-sm"
                onClick={()=>handleMenuClick(item.text)}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;