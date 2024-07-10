import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#1B73A3] justify-between items-center flex h-[7vh] px-5 '>
        <div className='border-r-2 border-white '>
        </div>
        <div className='flex text-lg font-semibold text-white items-center justify-center gap-5'>
            <button className='flex items-center justify-center scale-105 bg-opacity-20 bg-black rounded-lg p-1 gap-1'><img src='/assets/icons/home-2.png' alt='dashboard'/><div className='  '>  Dashbord
                </div></button>
                <button className='flex items-center hover:scale-105 hover:bg-opacity-20 hover:bg-black hover:rounded-lg p-1 gap-1'> <img src='/assets/icons/graph.png' alt='Analytic'/> <div className='  '> Analytic
                </div></button>
        </div>

<div className=' border-l border-white border-opacity-10 px-2 h-full flex justify-between items-center '>
    <div className='flex gap-3  items-center justify-center'>

    <img src='/assets/icons/Group 860.png' alt='notification'/>
    <img src='/assets/icons/⭐ New - Avatar.png' alt='profile'/>
    </div>
</div>



    </div>
  )
}

export default Header