import React from 'react'
import facebooklogo from '../assets/svg/icon-facebook.svg'
import instagramlogo from '../assets/svg/icon-instagram.svg'
import pinterestlogo from '../assets/svg/icon-pinterest.svg'
import twitterlogo from '../assets/svg/icon-twitter.svg'
const Footer = () => {
  return (
    <>
      <footer className='py-16 bg-slate-800 mt-10 response'>
        <div className='container flex flex-col items-center justify-between mx-auto space-y-6 md:flex-row md:space-y-0 md:items-start'>
          {/* Logo */}
          <h1 className='text-gray-500 text-4xl'>STee</h1>
          {/* Menu Container */}
          <div className='flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0'>
            {/* Menu 1 */}
            <div className='flex flex-col items-center text-gray-500 md:items-start'>
              <div className='text-3xl'>Stay up to date with our story</div>
              <div className='join mt-5'>
                Join and be the first to get the latest news about trend,
                promotions, and much more!
              </div>
              <div className='mt-5 border border-slate-700 rounded-md'>
                <div className='flex flex-row items-center media'>
                  <form action=''>
                    <input
                      type='email'
                      className='p-3 items-center focus:outline-none text-gray-400 bg-slate-800 transition-all'
                      placeholder='Enter your email address'
                    />
                    <button className='ml-3 mr-2 text-gray-500 hover:text-gray-400 media'>
                      Join now
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Menu 2 */}
            <div className='flex flex-col items-center text-gray-500 md:items-start'>
              <div className='flex flex-col items-center space-y-3 md:items-start'>
                <a href='#' className='capitalize hover:text-gray-400'>
                  Blog
                </a>
                <a href='#' className='capitalize hover:text-gray-400'>
                  Developers
                </a>
                <a href='#' className='capitalize hover:text-gray-400'>
                  Support
                </a>
              </div>
            </div>
            {/* Menu 2 */}
            <div className='flex flex-col items-center text-gray-500 md:items-start'>
              <div className='flex flex-col items-center space-y-3 md:items-start'>
                <a href='#' className='capitalize hover:text-gray-400'>
                  About
                </a>
                <a href='#' className='capitalize hover:text-gray-400'>
                  Our Team
                </a>
                <a href='#' className='capitalize hover:text-gray-400'>
                  Careers
                </a>
                <a href='#' className='capitalize hover:text-gray-400'>
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Social Containers */}
          <div className='flex space-x-6'>
            <a href='#'>
              <img src={facebooklogo} alt='' className='ficon' />
            </a>
            <a href='#'>
              <img src={twitterlogo} alt='' className='ficon' />
            </a>
            <a href='#'>
              <img src={instagramlogo} alt='' className='ficon' />
            </a>
            <a href='#'>
              <img src={pinterestlogo} alt='' className='ficon' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
