import PartnershipEnquiryForm from "@/app/partners/PartnershipEnquiryForm";
import OurMediaPartners from "./mediaPartners";
import GovSupportingPartner from "./supportingPartner";
import AssociationPartner from "./associationPartner";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Partner Section Inside a Card */}
        <section className="mb-16">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              
              {/* Gov Supporting Partner */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
                <GovSupportingPartner />
              </div>

              {/* Association Partner */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
                <AssociationPartner />
              </div>

            </div>
          </div>
        </section>

        {/* Media Partners */}
        <section className="mb-16">
          <OurMediaPartners />
        </section>

        {/* Why Partner With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Partner With Us?</h2>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <ul className="list-disc list-inside text-gray-600 space-y-4 text-lg">
              <li>Showcase your brand to a global audience of tech leaders and innovators.</li>
              <li>Connect with potential clients and partners in the digital technology sector.</li>
              <li>Gain valuable insights into emerging trends and market demands.</li>
              <li>Demonstrate thought leadership through speaking opportunities.</li>
              <li>Access exclusive networking events with industry decision-makers.</li>
              <li>Benefit from extensive media coverage and promotional opportunities.</li>
              <li>Contribute to shaping the future of digital technology.</li>
              <li>Engage with a diverse audience of professionals, from startups to enterprises.</li>
              <li>Leverage our platform to launch new products or services.</li>
              <li>Align your brand with cutting-edge innovation and digital transformation.</li>
            </ul>
          </div>
        </section>

        {/* Key Technologies Showcased */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Technologies Showcased</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Solutions",
                items: ["Cloud Computing", "Digital Transformation", "ERP Systems", "Business Intelligence"],
              },
              {
                title: "Data Management",
                items: ["Big Data Analytics", "Data Governance", "Data Visualization", "Data Integration"],
              },
              {
                title: "Cybersecurity",
                items: ["Network Security", "Cloud Security", "Identity and Access Management", "Threat Intelligence"],
              },
              {
                title: "AI & Big Data",
                items: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
              },
              {
                title: "Hardware, Satellite & Robotics",
                items: ["IoT Devices", "Satellite Communications", "Autonomous Systems", "Robotics and Automation"],
              },
            ].map((tech, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tech.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Enquiry */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Partnership Enquiry</h2>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <PartnershipEnquiryForm />
          </div>
        </section>
      </div>
    </div>
  );
}
