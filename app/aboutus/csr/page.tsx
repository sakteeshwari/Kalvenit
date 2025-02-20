import React from 'react'
import Servicespageimg from "../../components/Servicespageimg/Servicespageimg";

const page = () => {
  return (
    <div className='tracking-wide leading-relaxed'>
     <Servicespageimg imgSrc={"/assets/csrimg1.png"}  text="Contributing towards a digital and sustainable future"></Servicespageimg>

      <p className='m-4 lg:mx-32'>
      Being a global leader in Information technology for more than two decades, we feel obligated to contribute towards a digital future using our technology capabilities. We leverage the expertise of our nonprofit partners to implement long-term projects with continuous employee engagement at various stages while there are many exciting CSR activities and short-term programs for our volunteers and employees to take part in.
      </p>
      <div className=' m-4 p-4 lg:flex lg:px-32 lg:gap-20 bg-gray-200 lg:items-center'>
        <img src="/assets/csr.png" className='w-' alt="" />
        <p className='mt-6 lg:mt-0'>Our carefully crafted CSR goals have acted as a rallying point for our leaders and associates who have both individually and collectively been engaged in efforts to bridge new possibilities across the world. From teaching at our adopted school, to opening their hearts for supporting relief work during natural disasters, to spreading the joy of celebration and love through our flagship programs like RAHAT and BASTA, our employees are proof that everyone has the potential to be a bridge and problem solver.</p>
      </div>
      <p className='m-4 lg:mx-32'>Through KALVEN Social Welfare Foundation, we channelize our employees to embrace social responsibilities to create a positive impact and make the world a better place to live. Since the KALVEN Foundation’s beginning in 2015, we have always looked for ways to improve the well-being of the communities around us and our Pan India presence helps in engaging with diverse social groups and maximizing our social welfare footprint. We are constantly on the lookout for opportunities to amplify the goodness wherever we operate, functioning in tandem with community organizations and government bodies that are working to creating a meaningful impact in the focus areas of Education, Health, Skill Development, Environment and Relief.</p>
      <p className='m-4 lg:mx-32 italic'>Social responsibility is deeply engraved in our cultural fabric and we encourage and celebrate employee volunteerism to realize our dream towards a digital and sustainable future.</p>
    </div>
  )
}

export default page
