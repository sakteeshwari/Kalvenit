import React from 'react'

const Biznextpageachieve = () => {
  return (
    <div className='p-10 pt-16 text-white cursor-pointer' style={{ backgroundImage: `url("/assets/biznextpageachievebg.png")`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>
      <h1 className='text-5xl font-semibold lg:text-6xl leading-normal'>Achieve Success With Us</h1>

      <div className='lg:flex gap-10 justify-center items-center lg:mt-20'>
        <div className='mt-10'>
          {/* Business First Approach */}
          <div className="group hover:p-2 hover:bg-slate-600 relative overflow-hidden">
            <h2 className="text-3xl mb-5">Business First Approach</h2>
            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40">
              <p className="opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                With a technology-agnostic view, we identify and solve critical business problems by understanding and contextualizing business requirements appropriately.
              </p>
            </div>
          </div>

          <hr className='my-6' />

          {/* Industry Expertise */}
          <div className='group hover:bg-slate-600 p-2 relative overflow-hidden'>
            <h2 className='text-3xl mb-5'>Industry Expertise</h2>
            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40">
              <p className="opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                Of people, processes, and technology to solve business challenges.
              </p>
            </div>
          </div>

          <hr className='my-6' />

          {/* Value Oriented Focus */}
          <div className='group hover:bg-slate-600 p-2 relative overflow-hidden'>
            <h2 className='text-3xl mb-5'>Value Oriented Focus</h2>
            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40">
              <p className="opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                Helping organizations visualize and realize the benefits of digital business transformation by reimagining their business, driving agility, competitive differentiation, and resilience.
              </p>
            </div>
          </div>

          <hr className='my-6' />
        </div>
        <div className='hidden  lg:block'>
          <img
            src="/assets/biznextimgachieve.png"
            className="rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
            alt=""
          />

        </div>
      </div>
    </div>
  )
}

export default Biznextpageachieve
