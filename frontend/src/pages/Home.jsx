import React from 'react'
import { FaHiArrowSmRight } from 'react-icons/fa'
import mainheadingpic from '../assets/images/wp3130193-clothing-wallpapers.jpg'
import img1 from '../assets/images/snowman-cute-doll-plush-toys-winter-5k-6000x4001-8676.jpg'
import img2 from '../assets/images/snowman-snow-covered-winter-snow-4608x3456-9163.jpg'
import img3 from '../assets/images/sydney-sweeney-7680x4320-9661.jpg'
import img4 from '../assets/images/winter-forest-trees-landscape-frost-snow-covered-sunrise-3840x2160-8001.jpg'

function Home() {
  return (
    <>
      <div className='container flex flex-col max-w-full'>
        {/* First Section: Main heading with search bar and Picture */}
        <section className='search'>
          <div className='container flex flex-col mx-0 sm:mx-auto sm:items-start'>
            {/* Main Heading with search bar */}
            <div className='flex flex-col w-80 h-80 search'>
              <span className='capitalize text-4xl font-bold text-zinc-700 mt-5'>
                Create & Wear on demand
              </span>
              <p className='mt-5 text-zinc-700'>
                Create & sell custom products with your designs, we'll print and
                ship them to your customers
              </p>
              <div className='flex flex-row mt-5 rounded-lg shadow-2xl bg-white'>
                <form action=''>
                  <input
                    type='email'
                    className='h-14 ml-4 items-center focus:outline-none placeholder:text-zinc-700 transition-all'
                    placeholder='Search product here'
                  />
                  <div className='inline ml-3 py-2 px-3 rounded-md search searchbtn'>
                    <button className='text-zinc-700'>Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Best Product Category */}
        <section className='mt-20'>
          <div className='container flex flex-col mx-auto max-w-full sm:flex-row'>
            <div className='flex flex-col w-80 h-40 mx-0 sm:mx- sm:items-start'>
              <span className='capitalize text-4xl font-bold text-zinc-700 ml-7'>
                Best Product Category
              </span>
              <div className='allproduct'>
                <button className='text-zinc-700'>
                  See all product{' '}
                  <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
                </button>
              </div>
            </div>
            <div className='container flex flex-col items-end overflow-hidden productadjust sm:w-180 sm:mx-auto '>
              <div className='flex flex-row space-x-2'>
                <img src={img1} className='w-40 h-30' alt='' />
                <img src={img2} className='w-40 h-30' alt='' />
                <img src={img3} className='w-40 h-30' alt='' />
                <img src={img4} className='w-40 h-30' alt='' />
              </div>
              <div className='arrows space-y-3 space-x-4'>
                <button>
                  <i class='fa fa-long-arrow-left' aria-hidden='true'></i>
                </button>
                <button>
                  <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className='h-20'></div>

        {/* Trendy Categories */}
        <section>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center w-80'>
              <div>
                <span className='text-3xl text-zinc-700 font-bold'>
                  Trendy Categories
                </span>
              </div>
              <div className='text-center'>
                <span>
                  Create & sell custom products with your designs, we'll print
                  and ship them to your customers
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
