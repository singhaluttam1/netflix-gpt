import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import ProfileDropDown from './ProfileDropDown';
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const [menuOpen, setMenuOpen] = useState(false)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch(() => {
      navigate("/error")
    });
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const handleLogoClick = () => {
    navigate("/browse")
  }

  const handleGptSearchClick = () => {
        if (location.pathname !== "/browse") {
      navigate("/browse");
    }
    dispatch(toggleGptSearchView());
    setMenuOpen(false); 
    
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }))
      if (location.pathname === "/") {
        navigate("/browse");
      }
    } else {
      dispatch(removeUser());
      navigate("/");
    }
    });

    return () => unsubscribe()
  }, [])

  return (
   <div className="bg-black fixed top-0 left-0 w-screen h-20 flex flex-row justify-between items-center px-6 bg-gradient-to-b from-black z-10">
      
      {/* Logo */}
      <img 
        src={LOGO} 
        className='w-32 md:w-36 cursor-pointer' 
        alt="logo" 
        onClick={handleLogoClick}
      />

      {user && (
        <>
          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            {showGptSearch && (
              <select 
                className='p-2 bg-gray-800 text-white rounded' 
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map(lang => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}
            <button 
              className='px-4 py-2 bg-purple-800 text-white rounded-lg text-nowrap hover:bg-purple-700 transition'
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "HomePage" : "GPT Search"}
            </button>
            <ProfileDropDown />
            <button 
              className='font-bold flex gap-2 items-center text-white text-nowrap'
              onClick={handleSignOut}
            >
              Logout <FaSignOutAlt size={18}/>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-white focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
            </button>
          </div>

          {/* Mobile Dropdown with Smooth Transition */}
          <div
            className={`absolute top-16 right-4 bg-black border border-gray-700 rounded-lg shadow-lg flex flex-col items-start p-4 space-y-3 md:hidden z-20 transform transition-all duration-300 ease-in-out
              ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            {showGptSearch && (
              <select 
                className='p-2 bg-gray-800 text-white rounded w-full' 
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map(lang => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}

            <button 
              className='px-4 py-2 w-full bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition'
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "HomePage" : "GPT Search"}
            </button>

            <ProfileDropDown />

            <button 
              className='flex gap-2 items-center text-white font-bold w-full'
              onClick={handleSignOut}
            >
              Logout <FaSignOutAlt size={18}/>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Header