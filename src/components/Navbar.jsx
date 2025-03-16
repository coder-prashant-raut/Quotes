import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="border-gray-200 bg-gray-900 h-15 ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
        <a className="flex items-center space-x-3 rtl:space-x-reverse p-10">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 p-50" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
       
    </div>
</nav>

    </div>
  )
}

export default Navbar