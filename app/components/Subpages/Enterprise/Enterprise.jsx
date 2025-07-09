"use client"
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
export default function ServiceOfferings() {
   
  
    return (
      <section className="py-16 bg-gray-50 lg:px-20">
        <div className="container mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
      {/* SAP Testing Services */}
      <div className="border rounded-lg p-6 shadow-md hover:bg-gray-100">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2">SAP Testing Services</h2>
        <ul className="mt-4 space-y-3">
          <li><span className="text-red-500">●</span> <strong>Functional Testing:</strong> Validate SAP module functionality.</li>
          <li><span className="text-red-500">●</span> <strong>Regression Testing:</strong> Ensure SAP applications perform consistently after updates.</li>
          <li><span className="text-red-500">●</span> <strong>Performance Testing:</strong> Optimize SAP using tools like Tricentis NeoLoad.</li>
        </ul>
      </div>
      
      {/* Business Platform Testing Services */}
      <div className="border rounded-lg p-6 shadow-md hover:bg-gray-100">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2">Business Platform Testing Services</h2>
        <ul className="mt-4 space-y-3">
          <li><span className="text-red-500">●</span> <strong>Salesforce Testing:</strong> Ensure smooth CRM workflow integration.</li>
          <li><span className="text-red-500">●</span> <strong>ServiceNow Testing:</strong> Test ITSM workflows for seamless experiences.</li>
          <li><span className="text-red-500">●</span> <strong>Oracle Testing:</strong> Conduct error-free ERP upgrades.</li>
        </ul>
      </div>
      
      {/* Cross-Platform Testing Solutions */}
      <div className="border rounded-lg p-6 shadow-md hover:bg-gray-100">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2">Cross-Platform Testing Solutions</h2>
        <ul className="mt-4 space-y-3">
          <li><span className="text-red-500">●</span> Functional and Regression Testing.</li>
          <li><span className="text-red-500">●</span> API Testing using Rest Assured and Postman.</li>
          <li><span className="text-red-500">●</span> Mobile Testing with Appium and BrowserStack.</li>
        </ul>
      </div>
    </div>
      </section>
    );
  }
  