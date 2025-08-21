import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const handleGptSearchClick = () => {
    //Toggle GPT Search Button
    dispatch(toggleGptSearchView())
  }
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }))
        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate("/")

      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe()
  }, [])
  return (
    <div className=' fixed top-0 left-0  px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row md:justify-between '>
      <img src={LOGO} className=' w-36 mx-auto md:mx-0 mt-[12px]' alt="logo" />

      {user && (
        <div className='flex p-2 justify-between'>
          {showGptSearch && (
            <select className='p-2 m-2 bg-gray-800 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} > {lang.name}</option>
              )}
            </select>)}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg text-nowrap w-auto' onClick={handleGptSearchClick}>{showGptSearch? "HomePage" :"GTP Search"}</button>
          <img src={USER_AVATAR} alt="usericon" className='hidden md:block cursor-pointer m-4' />
          <button className='font-bold text-white text-nowrap pr-6' onClick={handleSignOut}>(Sign Out)</button>
        </div>)}
    </div>

  )
}

export default Header