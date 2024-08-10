'use client'
import { useState } from 'react'
import Links from '../components/Links'
import Logo from '../components/Logo'
import { SiReact } from 'react-icons/si'
import HomeIcon from '@mui/icons-material/Home'
import CategoryIcon from '@mui/icons-material/Category'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LogoutIcon from '@mui/icons-material/Logout'

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <div>
      <button onClick={toggleVisibility} className="mb-4 p-2 bg-blue-500 text-white rounded">
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible ? (
        <div className="w-[320px] p-6 pt-12">
          <Logo />
          <Links />
        </div>
      ) : (
        <div className="w-[80px] p-2 flex items-center justify-center flex-col">
          <div className="bg-orange-500 flex items-center justify-center p-[6px] rounded-md mb-12">
            {/* Icon */}
            <div className="w-[26px] h-[26px] items-center justify-center flex">
              <SiReact className="text-white text-[22px]" />
            </div>
          </div>
          <div className="p-[7px] cursor-pointer rounded-lg flex text-slate-400 hover:text-orange-500">
            <HomeIcon />
          </div>
          <div className="p-[7px] cursor-pointer rounded-lg flex text-slate-400 hover:text-orange-500">
            <CategoryIcon />
          </div>
          <div className="p-[7px] cursor-pointer rounded-lg flex text-slate-400 hover:text-orange-500">
            <FavoriteIcon />
          </div>
          <div className="p-[7px] cursor-pointer rounded-lg flex text-slate-400 hover:text-orange-500 mt-12">
            <LogoutIcon />
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
