import React from 'react';
import Servicespageimg from "../../components/Servicespageimg/Servicespageimg";
import Link from 'next/link';

const page = () => {
  return (
    <div className='tracking-wide leading-relaxed text-'>
      <Servicespageimg imgSrc={"/assets/modernslavery.png"} text="" />

      <div className="flex justify-center items-center h-96">
        <Link href="/assets/modern-slavery-act.pdf" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View PDF
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
