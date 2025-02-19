"use client";
import React from "react";
import Industriespageimg from "@/app/components/Industriespageimg/Industriespageimg";
import Industriespagecontent from "@/app/components/Industriespagecontent/Industriespagecontent";
import Industriestrending from "@/app/components/Industriestrending/Industriestrending";
import Industriesperspectives from "@/app/components/Industriesperspectives/Industriesperspectives";

// Industry data mapping
const industriesData: Record<string, { content: string; image: string }> = {
  "manufacturing": {
    content: "A powerful combination of speed, adaptability, and business agility has become crucial for manufacturers to thrive despite business volatilities. Discrete manufacturers are challenged with shrinking windows for developing new products, product inconsistencies, supply chain issues, enabling accurate enterprise-wide visibility,  optimizing business processes, and moving quickly towards digital manufacturing. On the other hand, process manufacturers need to manage the evolving regulatory environment, handle EHS issues, ensure traceability, and manage supply chain inconsistencies.  ",
    image: "/assets/manufacturing1.png",
  },
  "lifesciences": {
    content: "The pace with which the Lifesciences Industry is evolving and transforming is impressive. The industry moves towards personalized medicine, collaborative innovation, technology-centric drug research and device development, and leveraging enterprise-wide business data. It is also being challenged by escalating drug discovery costs, a stricter regulatory environment, and the time-bound imperative of modernizing and integrating siloed legacy systems. ",
    image: "/assets/manufacturing2.png",
  },
  "bfsi": {
    content: "The BFSI Industry faces uncertain macroeconomic conditions. Increasing competition from traditional sources and Fintech disruptors the need to offer personalized products-services, handling regulatory compliance, rapidly evolving business models, cyber-security concerns, and the imperative to create digitally transformed customer experiences. Technology has become pivotal-integral in addressing these sectoral challenges.",
    image: "/assets/manufacturing3.png",
  },
  "mining": {
    content: "Long recognized as an industry dominated by manual labor and capital-intensive assets, today’s mining industry is increasingly turning to intelligence-led predictive technologies for connected supply chains, environmental social and governance (ESG), and long-term profitability. Real-time collaborations are paving the way for successful mining innovations. Simultaneously, the mining sector faces heavy regulatory scrutiny, forcing many to find new ways to engage with communities, and transcend minimum standards of safety. By integrating and harmonizing the end-to-end IT landscape, you can get greater control of the entire mining lifecycle, gain enterprise visibility, and sustain long-term profitability. ",
    image: "/assets/manufacturing4.png",
  },
  "agribusiness": {
    content: "The entire Agri value chain from seeding, growing, reaping, processing, distributing across the supply chain, getting it on the shelves and then to the consumer needs extreme visibility, agility to respond to changing conditions, operational efficiencies, and use of innovative technologies. Increasingly technology is playing a pivotal role in the efficient and effective management of the Agri value chain. Entities in the value chain are evolving rapidly, and there is tremendous potential in managing the agribusiness ecosystem better by increasing farming efficiencies and transparent food supply chains. Agribusinesses are acting on some of these breakthrough technological trends, including IoT, automation, wireless, AI, and ML, to become agile and efficient digital enterprises.",
    image: "/assets/manufacturing5.png",
  },
  "healthcare": {
    content: "The Healthcare industry is characterized by tectonic changes in every aspect of provisioning patient care – rapidly being reshaped by technological services advancements, changing patient care dynamics, remote patient management, and an accelerated drive towards patient affordability. From the beginning of the patient journey with prevention programs, securing the well-being, capturing and usage of health data, and targeted analysis of patient data for future services expansion – healthcare’s experience economy is evolving almost every day. More than ever, healthcare providers are forced to deliver sustainable and profitable yet state-of-the-art, quality, and accessible care services – regardless of geographical restraints.",
    image: "/assets/manufacturing1.png",
  },
  "government": {
    content: "There is constant pressure on governments to modernize operations, enable new digital capabilities,  reduce costs, and drive better citizen experiences. Technology is transforming how governments and organizations/departments within them can engage directly, deliver services, provision benefits, monitor implementation, and track progress. Getting all this done across all the entities-geographies they are responsible for, ensuring seamless and unform delivery while keeping costs on a leash is challenging. ",
    image: "/assets/manufacturing2.png",
  },
  "utilities": {
    content: "The utility sector stands vital to the growth and sustenance of any country. It powers up all establishments and is pivotal to the performance of all other Industries. While coal-based power utilities were the norm earlier, nuclear, hydel, thermal, gas–based became popular later. With the focus on Climate change and the environment, renewable sources of energy like wind, solar, and bio are among others.  Government controlled, Public sector entities, private entities, and Joint-ventures dominate the sector from an ownership perspective. Given that this is one of the oldest types of “Industry,” the last three decades have seen these entities embarking on transformation programs to drive efficiencies and effectiveness, sometimes with mixed success. ",
    image: "/assets/manufacturing3.png",
  },
  "logistics": {
    content: "The logistics business is taking center stage to companies as supply chains increasingly become global. Gone are the days when logistics was confined to just the movement of freight and goods. Managing costs, security issues, tracking fuel, tackling sustainability issues, driving transparency, keeping pace with the impact of technologies like Blockchain are significant challenges that the logistics industry faces. With the emergence of the New Normal, many aspects of the business are likely to change dramatically, including closed international borders, land-air-sea transportation issues, and last-mile problems.",
    image: "/assets/manufacturing4.png",
  },
  "dairy-farming": {
    content: "As one of the truly global industries with 133 million dairy farms globally, it is hugely integral to millions of people’s lives. The dairy sector faces multiple challenges, including extreme cost sensitivities, climate changes, demand variations, packaging issues, ever-evolving regulations, and lower profitability.The sector has shown a significant appetite for leveraging innovative solutions, products, and strategies. This includes automatic milking, cow health, and comfort, moving to sustainable packaging practices, safer supply chains, leveraging agri-data, and adopting new-age technologies like IoT, AI, ML, among others in their value chain. They seek to mitigate business risks while addressing both operational and strategic business challenges.From farm automation, smart factories, supply chain management to operationalizing data analytics led business decision systems, digitalization has opened up new ways for dairy businesses to optimize value chains.",
    image: "/assets/manufacturing5.png",
  },
  "aviation": {
    content: "Market volatilities, fuel pricing, and falling customer demands are putting revenues and profitability under stress. Global trends have thrown the spotlight on enabling a safe flying experience and giving people the confidence to become frequent flyers again. A variety of tools, technologies, and applications, including Automation, AI, Biometrics, data analytics, IoT, digitization, are getting deployed in Airports and within Airlines to enable safety and provide outstanding passenger experiences.  Leading aviation companies embrace distinctive, transformative waves to make their operations future-proof and bottom lines lucrative. Airlines and Airports are having to reimagine their strategies and the ways they operate continuously. Technology will play a pivotal role in enabling this transformation in the sector",
    image: "/assets/manufacturing1.png",
  },
  "education": {
    content: "Globally, institutions of higher learning are encountering challenges that are disrupting and upending traditional teaching models. While addressing these challenges, they are also under pressure to deliver superior student-teacher experiences, provision the infrastructure and solutions needed to drive operational efficiencies, and adopt innovative models to drive a competitive edge.An adaptive, resilient, and robust digital foundation has become pivotal in transforming learning, development, and operations. The digital-first world is changing how knowledge and skills are delivered, students and teachers are more empowered, and new disruptive educational constructs are emerging rapidly",
    image: "/assets/manufacturing2.png",
  },
  "retail": {
    content: "Ubiquitous access to information has led to a steady yet dramatic power shift from retailers to consumers, bringing pressure on retailers to reinvent traditional & online retail business models that are innovative, agile, competitive, and enable new ways of driving revenues. Such a rapidly evolving business environment requires retailers to straddle the traditional and digital paradigms seamlessly to sustain and thrive in the hyper-competitive space. The sector needs agility and flexibility to handle customers 24×7 and ensure that they get personalized shopping experiences. We have leveraged the Cloud, Machine Learning, AI, Microservices, and APIs to help retailers anticipate customer needs through data analytics-led insights and seamless omnichannel interactions.   ",
    image: "/assets/manufacturing3.png",
  },
  "telecom": {
    content: "The Telecom industry is going through tectonic shifts across IT and Network infrastructures with mobile data explosion, Fiber & 4G/LTE, and the imminent roll-out of 5G networks, IT-Network convergence, need for Real-Time control, and the focus on analytics to monetize data effectively. Also, there is a need to create a differentiated customer experience through digital adoption. Telecom is at the heart of inclusive economic development and fulfillment of evolving human needs with agility. Despite sitting on a golden mountain of data, telecom providers continue to face struggles in using it to ensure cost-efficient network management, creating compelling experiences at every user touchpoint, accelerating market roll-outs, driving lean operations, safeguarding privacy, data, and more. Discover how we put your strategic priorities into overdrive by bringing the speed of software, economies of cloud, and a well-orchestrated digital core designed for a rapidly evolving telecommunications ecosystem.",
    image: "/assets/manufacturing4.png",
  },
  "media-entertainment": {
    content: "The media and entertainment industry has been increasingly impacted by evolving market movements, including high OTT and digital content consumptions, along with the omnipresent need to build intimate connections with their audiences. Not only do broadcasters, advertisers, gamers, and entertainers have to push effective content to consistently interest, inform, and delight audiences – they also need to protect their privacy and trust with utmost care.In a world of almost infinite choices and content, media and entertainment enterprises across segments leverage diverse sets of technologies to drive deep, engaging, and personalized relationships at scale.",
    image: "/assets/manufacturing5.png",
  },
};

// Default message for unknown industries
const defaultContent = {
  content: "Industry not found. Please check the URL.",
  image: "/images/default.jpg",
};

// Define TypeScript types for props
interface IndustryPageProps {
  params: { slug: string };
}

const IndustryPage: React.FC<IndustryPageProps> = ({ params }) => {
  const { slug } = params;
  const industry = industriesData[slug] || defaultContent;

  return (
    <div>
      {/* Pass the image dynamically based on the slug */}
      <Industriespageimg imgSrc={industry.image} />
      <div className=" p-4 leading-relaxed tracking-wider">
        <p className="mt-6">{industry.content}</p>
      </div>
      <div className=" mt-6 bg-gray-100 p-6 max-w-2xl mx-auto shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        As a manufacturer, are you facing any of these challenges?
      </h2>
      <ul className="list-disc space-y-3 pl-5 text-gray-700">
        {[
          "Attaining high productivity in off-shoring and reshoring supply chains",
          "Finding resiliency amidst geopolitical, competitive & regulatory uncertainties",
          "Unlocking the full potential of technology innovation",
          "Increasing complexities in products and supply chain",
          "Maximizing capacity and asset utilization",
          "Raising levels of workforce productivity, safety, efficiencies, and satisfaction",
        ].map((challenge, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>{challenge}</span>
          </li>
        ))}
      </ul>
    </div>
      <Industriestrending />
      <Industriesperspectives />
    </div>
  );
};

export default IndustryPage;
