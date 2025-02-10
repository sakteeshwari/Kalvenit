import React from 'react'
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg"
import Digitalizationservices from "../Digitalizationservices/Digitalizationservices"
import Servicesperspective from '../../Servicesperspective/Servicesperspective'
import Biznextpagespotlight from '../../Biznextpagespotlight/Biznextpagespotlight'
import Kalvendifferent from  "../../../components/Kalvendifferent/Kalvendifferent"

const Digitalization = () => {
  return (
    <div>
      <Servicespageimg></Servicespageimg>
      <div className='bg-gray-200 p-4  leading-relaxed tracking-wider'>
        <p className='mt-6'>Digitalization fosters business simplification and helps build a self-sufficient business model enabling cost-effectiveness and consistent value. By synthesizing online and offline modes of operation and disruptive technologies, digitalization helps build a bridge between legacy and new-age technologies.</p>
        <p className='mt-6'>With extensive experience helping organizations across industry verticals to digitalize their business operations, YASH helps companies innovate their digital strategies and amplify the link between clients and business outcomes.</p>
        <p className='mt-6'>YASH deploys its proven methodologies to help organizations reimagine future-ready business models. We put together digital strategy-roadmaps, create digital organizations, draft appropriate digital business models, launch agile product development methodologies, and build agile IT infrastructure.</p>
        <p className='mt-6'>Get a jump-start on new trends to make your digital transformation journey more comfortable.</p>
      </div>
      <Digitalizationservices></Digitalizationservices>
      <Biznextpagespotlight></Biznextpagespotlight>
      <Kalvendifferent></Kalvendifferent>
      <Servicesperspective></Servicesperspective>
    </div>
  )
}

export default Digitalization
