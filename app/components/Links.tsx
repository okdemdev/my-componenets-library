import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import CategoryIcon from '@mui/icons-material/Category'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LogoutIcon from '@mui/icons-material/Logout'

const Links = () => {
  return (
    <div className="mt-44 ml-3 flex flex-col gap-2 text-[15px]">
      <div className="p-[7px] cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-white bg-orange-500">
        <HomeIcon />
        <span className="mt-0.5">Home</span>
      </div>
      <div className="p-[7px] cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-slate-400 hover:text-orange-500">
        <CategoryIcon />
        <span className="mt-0.5">Category</span>
      </div>
      <div className="p-[7px] cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-slate-400 hover:text-orange-500">
        <FavoriteIcon />
        <span className="mt-0.5">Favorites</span>
      </div>
      <div className="p-[7px] cursor-pointer rounded-lg flex items-center gap-2 w-[75%] mt-12 text-slate-400 hover:text-orange-500">
        <LogoutIcon />
        <span className="mt-0.5">Logout</span>
      </div>
    </div>
  )
}

export default Links
