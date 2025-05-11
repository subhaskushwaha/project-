import React from 'react'

const NavBar = () => {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src="https://storage.googleapis.com/a1aa/image/d7c91fb5-cdf6-48a3-286a-e8dcb21f5a84.jpg"
            alt="Medingen logo"
            className="w-10 h-10"
          />
          <span className="text-base font-normal">Medingen</span>
        </div>
        <nav className="flex items-center space-x-8 text-xs font-semibold text-[#B9B9B9] select-none">
          <a
            className="flex items-center space-x-2 bg-[#F0F0FF] text-[#1E1E1E] rounded-full px-4 py-2"
            href="#"
          >
            <i className="fas fa-home text-[10px]"></i>
            <span>Home</span>
          </a>
          <div className="flex items-center space-x-2 opacity-100 cursor-pointer">
            <i className="fas fa-tags text-[10px]"></i>
            <span>Offers</span>
          </div>
          <div className="flex items-center space-x-2 opacity-100 cursor-pointer">
            <i className="far fa-bell text-[10px]"></i>
            <span>Notification</span>
          </div>
          <div className="flex items-center space-x-2 opacity-100 cursor-pointer">
            <i className="far fa-user-circle text-[10px]"></i>
            <span>Profile</span>
          </div>
        </nav>
        <button className="w-10 h-10 rounded-full border border-[#D9D9D9] flex items-center justify-center text-[#1E1E1E]">
          <i className="fas fa-shopping-cart text-lg"></i>
        </button>
      </header>
    </>
  )
}

export default NavBar
