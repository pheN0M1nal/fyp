import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// const btn = document.getElementById('menu-btn')
// const menu = document.getElementById('menu')

const Navbar = () => {
  //Toggle Mobile Menu
  const onClick = () => {
    var btn = document.getElementById("menu-btn")
    var menu = document.getElementById("menu")
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
  }

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  return (
    <>
      <nav className='container mx-auto p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-80'>
            {/* Logo */}
            <h1 className='font-bold'>STee</h1>
            {/* left Menu */}
            <div className='hidden lg:flex font-bold space-x-14'>
              <Link to='/' className='text-zinc-700 hover:text-veryDarkViolet'>
                Home
              </Link>
              <Link to='/' className='text-zinc-700 hover:text-veryDarkViolet'>
                Category
              </Link>
              <Link to='/' className='text-zinc-700 hover:text-veryDarkViolet'>
                StartCreating
              </Link>
              <Link to='/' className='text-zinc-700 hover:text-veryDarkViolet'>
                About
              </Link>
            </div>
          </div>
          {/* Right Menu */}

          <div className='items-center hidden lg:flex font-bold'>
            <div className='px-7 py-3'>
              {user?.myNname ? (
                user?.myNname
              ) : (
                <Link
                  to='/sign-in'
                  className='text-zinc-700 hover:text-veryDarkViolet'
                >
                  SignIn/SignUp
                </Link>
              )}
            </div>
          </div>
          {/* HamBurger */}
          <button
            id='menu-btn'
            className='block hamburger mr-0 lg:hidden focus:outline-none'
            onClick={onClick}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>
        {/* Mobile View */}
        <div
          id='menu'
          className='absolute hidden p-6 left-6 right-6 top-20 z-40 bg-white'
        >
          <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white '>
            <Link to='/' className='nav-links'>
              Home
            </Link>
            <Link to='/' className='nav-links'>
              Category
            </Link>
            <Link to='/' className='nav-links'>
              StartCreating
            </Link>
            <Link to='/' className='nav-links'>
              About
            </Link>
            <Link to='/sign-in' className='nav-links'>
              SignIn/SignUp
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
