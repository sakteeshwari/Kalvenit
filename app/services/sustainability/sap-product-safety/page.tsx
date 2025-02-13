"use client";
import React from "react";
import Sustainabilitylayout from "../../../components/LayoutSubpages/Sustainabilitylayout/Sustainabilitylayout"

const DigitalizationPage = () => {
  return (
    <Sustainabilitylayout imgSrc="/assets/sustain.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Product regulations are becoming more stringent and complex, mandating organizations to maintain robust management and prompt communication of specific details. Global compliance regulations like REACH (Registration, Evaluation, Authorization, and Restriction of Chemicals – 2007), RoHS (Restriction of Hazardous Substances), TSCA (Toxic Substances Control Act – 1977), Hazchem or Conflict Minerals and the maintenance of Hazmat documents are just a few of the compliance regulations that organizations have to adhere to.</p>

          <p className="tracking-wide leading-loose" >The various components of SAP Product Safety & Stewardship provide frameworks to address all organizations’ compliance needs. For example, the product safety feature creates and communicates the updated SDS, labels, and Hazmat declarations after aligning them with global compliance requirements. Organizations can automate the checks for shipping and transportation compliance, prepare documentation to adhere to global logistical requirements for goods, and also automate label printing.</p>
          <p className="tracking-wide leading-loose">Businesses also get a comprehensive solution framework for managing the European Union legislation and other global product-specific regulations. The SAP EHS regulatory content contains a vast database of substances and phrases in 40 languages with templates, rules, and classification. The product stewardship network provides an online and secure collaboration platform for compliance data exchange and sustainability assessment across supply chains.</p>
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Sustainabilitylayout>
  );
};

export default DigitalizationPage;
