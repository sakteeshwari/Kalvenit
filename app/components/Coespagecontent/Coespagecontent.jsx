"use client"
import React from 'react';
import "./Coespagecontent.css"
import { motion } from 'framer-motion';

const Coespagecontent = () => {
  const content = [
    {
      label: 'SAP',
      desc: 'KALVEN Software Solutions, one of the largest SAP service providers globally, brimgs the right set of people, technologies and domain expertise to drive your SAP landscape transformation',
    },
    {
      label: 'AWS',
      desc: 'As an advanced consulting and authorized reseller partner of Amazon Web Services, KALVEN understands the complexities of migrating workloads in large-scale environments, and the skills needed for success.',
    },
    {
      label: 'Microsoft',
      desc: 'KALVEN offers a full range of IoT advisory services and has helped organizations in end-to-end IoT Development, supplementing it with power-packed IoT Analytics and Application Development consulting.',
    },
    {
      label: 'IoT',
      desc: 'Simplify and strengthen your IT foundation to accelerate the Digital evolution',
    },
    {
      label: 'ServiceNow',
      desc: 'KALVEN is a Premier ServiceNow partner. This is instrumental in helping us bring superior technologies, industry proficiency, and smarter design to help make your organization digitally savy, co-rodinated and effortless to navigate.',
    },
    {
      label: 'RPA',
      desc: 'KALVEN end-to-end RPA services range from assessment, design, RPA CoE, strategy to RPA implementation, and support in improving productivity and achieving functional outcomes by reducing mundane and repetitive manual tasks.',
    },
    {
      label: 'Oracle',
      desc: 'As an Oracle Gold Reseller and Consulting Partner, KALVEN along with Oracle, has co-created innovative solutions for enterprise customers worldwide.',
    },
    {
      label: 'Blockchain',
      desc: "KALVEN Software Solutions offers comprehensive blockchain solutions for innovation, prototyping, re-engineering the processes, and addressing issues in real-time.",
    },
    {
      label: 'SalesForce',
      desc: 'As an innovation partner, KALVEN provides a plethora of services to streamline your business process, create a great customer experience, and increase your revenue.',
    },
    {
      label: 'Artificial Intelligence',
      desc: 'KALVEN provides customized AI solutions and enables AI implementation using chatbots and visual recognition tools.',
    },
    {
      label: 'QAD',
      desc: 'KALVEN helps enterprises leverage the power of QAD ERP to achieve effective alignment of people, process, data and technology to keep pace with the existing demands while preparing for the future.',
    },
    {
      label: 'Mobility',
      desc: 'KALVEN mobility practice mines out the best mobility solutions for your business to amplify workforce productivity and drive greater customer engagement by reaching out to customer anytime and anywhere in a better manner.',
    },
    {
      label: 'Pega',
      desc: 'KALVEN Software Solutions PEGA Practice treats processes as assets, combines deep domain knowledge with process improvemnet expertise, change management skils and specialized IT capabilities to provide a comprehensive set of services and solutions.',
    },
    {
      label: 'Integration Services',
      desc: 'KALVEN offers end-to-end integration services that seamlessly consolidate disparate technology products and applications by streamlining connectivity between your enterprise imperatives with improved agality and resiliency.',
    },
  ];

  return (
    <div>
      <div className="p-4 mt-10 leading-loose tracking-wider lg:px-32">
        <p className="text-black">
        Utilizing our extensive domain and technology experience, we provide a comprehensive range of tailored capabilities to our customers globally.
        </p>
        <p className="mt-6 text-gray-800">
        To nurture the technical prowess of these solution providers and strengthen our offerings further – KALVEN has institutionalized more than 50 Centres of Excellence (CoEs) across the globe. These Centres of Excellence drive the experience and excellence which we want to deliver to our customers. Our subject matter experts in these CoEs collaborate with our customers to co-create and co-innovate thereby empowering them with ‘real’ solutions which their business needs.
        </p>
      </div>

      {/* Adding the contents below using map */}
      <div className="services-list mt-20 px-4 lg:px-32 ">
  {content.map((item, index) => (
    <div key={index}>
      {/* Wrapper div for hover effect */}
      <div className="service-item mt-10 flex-grow flex items-center justify-start my-4 group hover:bg-gray-200 p-4 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="service-content md:flex lg:flex  justify-between  w-full items-center"
        >
          <h2 className="text-2xl text-purple-800">{item.label}</h2>
          <div className="flex  lg:gap-44 items-center">
            <p className="text-gray-600 mt-4 w-96">{item.desc}</p>
            {/* Arrow moves forward on hover */}
           
          
          <span className="text-red-700 text-3xl group-hover:translate-x-3 transition-transform duration-600">
              &rarr;
            </span>
            </div>
        </motion.div>
      </div>
      {index < content.length - 1 && <hr className="border-t border-gray-300 my-4" />}
    </div>
           
            
            
                        
          
        ))}
      </div>
    </div>
  );
};

export default Coespagecontent;
