import React from "react";
import Servicespageimg from "../../components/Servicespageimg/Servicespageimg";

const Page = () => {
  return (
    <div className="tracking-wide leading-relaxed text-gray-800">
      {/* Banner Image */}
      <Servicespageimg imgSrc={"/assets/privacypolicy.png"} text="" />

      {/* Main Content */}
      <div className="lg:px-32 py-10">

        {/* Privacy Statement */}
        <h1 className="m-4 font-bold">KALVEN Software Solutions, Inc. PRIVACY STATEMENT</h1>
        <p className="m-4">
          KALVEN Software Solutions, Inc. is committed to safeguarding your privacy. This policy covers how KALVEN collects and uses personal information such as name, email, and phone number. 
          For inquiries, contact <a href="mailto:dpo@KALVEN.com" className="text-blue-500 hover:underline">dpo@KALVEN.com</a>.
        </p>

        {/* Information Collection and Use */}
        <h1 className="m-4 font-bold">Information Collection and Use</h1>
        <p className="m-4">
          <b>General:</b> KALVEN collects personal information when you use its services, enter promotions, or register for newsletters. Information such as name, email, birth date, and occupation may be requested. 
          Providing such information is optional, but required for certain services.
        </p>
        <p className="m-4">
          <b>Information Sharing and Disclosure:</b> KALVEN collects user information to improve services and may share data when legally required. External sites linked to KALVEN are not covered by this privacy policy.
        </p>
        <p className="m-4">
          <b>E-Mail:</b> KALVEN does not share subscriber email lists with third parties but may rent registrants' lists with user consent.
        </p>

        {/* Cookie Policy */}
        <h1 className="m-4 font-bold">Cookie Policy</h1>
        <p className="m-4">
          KALVEN uses cookies to analyze user behavior and enhance site experience. Marketing and statistics cookies track visitor interactions and sessions.
        </p>
        <ul className="list-disc pl-10 m-4">
          <li>Visitors’ interaction with the website</li>
          <li>Tracking visitor sessions</li>
        </ul>
        <p className="m-4">
          Users can disable cookies through browser settings. Removing stored cookies does not prevent future placements unless settings are adjusted.
        </p>
        <p className="m-4">
          KALVEN also integrates third-party tools for analytics and user experience enhancement.
        </p>

        {/* Copyright and Liability */}
        <h1 className="m-4 font-bold">Copyright and Liability</h1>
        <p className="m-4">
          <b>Copyrights and Other Intellectual Property:</b> Images on KALVEN websites are copyrighted by Jupiterimages Corporation. 
          All website content, including white papers and case studies, belongs to KALVEN Software Solutions.
        </p>
        <p className="m-4">
          <b>Limitation of Liability:</b> KALVEN Software Solutions is not liable for any damages arising from website use, including lost profits or data loss, even if advised of potential damages.
        </p>

        {/* Social Media Section */}
        
       <div className="px-4">
       <h2 className="mt-6 text-lg font-semibold">Social Media</h2>
        <p className="mt-2">
          If you use social media or other third-party credentials to log in to our sites, then that other organization may set a cookie that allows that company to recognize you.
        </p>
        <p className="mt-2">
          We allow users to share our Website on social media such as Facebook and Twitter through the use of their cookies. These cookies are not within our control. 
          Please refer to the respective privacy policies of the social media provider for how their cookies work and also how to control such cookies and buttons.
        </p>
       </div>
        
        {/* Reference Links */}
        <div className="lg:px-32  px-4">
        <h3 className="mt-4 font-semibold">Reference Links:</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <span className="font-medium">LinkedIn – </span>
            <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </li>
          <li>
            <span className="font-medium">Twitter – </span>
            <a href="https://gdpr.twitter.com/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://gdpr.twitter.com/en.html
            </a>{" "}
            &{" "}
            <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://twitter.com/en/privacy
            </a>
          </li>
          <li>
            <span className="font-medium">Facebook – </span>
            <a href="https://www.facebook.com/business/gdpr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://www.facebook.com/business/gdpr
            </a>
          </li>
        </ul>
        <p className="mt-4">
          Also, if you use a social media-sharing button or widget on one of our sites, the social network that created the button will record your action for its own purposes.
        </p>
        </div>
       

        {/* Collection and Processing of Personal Data */}
        <div className="px-4">
        <h2 className="mt-6 text-lg font-semibold">Collection and Processing of Personal Data</h2>
        <p className="mt-2">
          This policy regarding the collection and processing of personal data (the “Privacy Policy”) describes how KALVEN (3 St Helen’s Place, Level 5 London – EC3A 6AB United Kingdom) 
          ("we", "us", "our", or "KALVEN") processes personal data.
        </p>
        <p className="mt-2">
          We process personal data when you visit and use our website, use functions such as newsletters, or request information about our services. The types of personal data we process include name, email, job position, and company name.
        </p>
        </div>
        

        {/* European Data Protection Rights – GDPR */}
       <div>
       <h1 className="m-4 font-bold">European Data Protection Rights – GDPR</h1>
        <p className="m-4">
          When we process personal data about you, we do so with your consent and/or as necessary to provide the website you use, operate our business, meet contractual and legal obligations, 
          protect system security, or fulfill other legitimate interests of KALVEN as described in this privacy statement.
        </p>
        <p className="m-4">
          Below, you will find additional privacy information. KALVEN adheres to applicable data protection laws in the European Economic Area, granting you the following rights:
        </p>
        <ul className="list-disc pl-10 m-4">
          <li>The right to withdraw consent at any time.</li>
          <li>The right to request access to and rectification of your personal data.</li>
          <li>The right to request erasure of your personal data, subject to exceptions.</li>
          <li>The right to object to data processing.</li>
          <li>The right to lodge a complaint with a data protection authority.</li>
        </ul>
        <p className="m-4">
          KALVEN Software Solutions may disclose user data when required by law or to protect legitimate interests such as fraud prevention.
        </p>
       </div>

      </div>
    </div>
  );
};

export default Page;
