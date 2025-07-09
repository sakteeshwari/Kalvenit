import React from 'react';

const Careerspagecontent = () => {
    return (
        <div className='text-center'>
            <h1 className='text-black mt-10 text-3xl lg:mt-16 lg:text-5xl'>Meet The KALVEN Constellation</h1>
            <div className='mt-6 p-4 leading-relaxed lg:flex lg:mx-20 lg:gap-10 tracking-wide'>
                <div className='flex-1'>
                    <p>At KALVEN, we understand that not all talent is created equally – and that the best is often a lot better than the rest. We also know that the need for (sustainable) speed has never been greater. At the heart of extraordinary impact lies a culture of career-integrated hyper-learning and extraordinary relationships.</p>
                    <p className='mt-6'>KALVEN is a cluster of the brightest stars working with cutting-edge technologies. Their purpose is anchored in a single truth – bringing real positive changes in an increasingly virtual world.</p>
                </div>

                <div className='text-white mt-7 flex-1 flex items-center justify-center font-semibold p-6 bg-black rounded-lg'>
                  <div>
                  <h1 className='text-2xl md:text-3xl lg:text-4xl w-full text-center leading-relaxed tracking-wide'>
                        Click here to view US job openings
                    </h1>
                    <button className='bg-red-600 mt-4 md:mt-6 rounded-full p-3 px-6 text-white text-lg hover:bg-red-700'>
                        Read more
                    </button>
                  </div>
                    <img
                        src='/assets/careerpagemeet.png'
                        className='w-32 mt-4 md:mt-6 lg:w-40 rounded-full object-cover'
                        alt='Career'
                    />
                </div>

            </div>
        </div>
    );
};

export default Careerspagecontent;
