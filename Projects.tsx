import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Key Project</h2>
        <div className="w-20 h-1 bg-blue-700 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-700 p-4 rounded-lg">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                End-to-End SAP Security & GRC Access Control 12.0 Implementation
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  SAP ECC Security
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Created single, derived, and composite roles using PFCG</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Configured and managed authorization objects for security compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Performed user provisioning and de-provisioning activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Executed mass user creation and maintenance using SU10</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Managed role transport across development, quality, and production systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Generated and analyzed SUIM audit reports for compliance monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  SAP GRC Access Control
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Configured SAP GRC connectors for seamless integration with backend systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Performed Access Risk Analysis (ARA) to identify SoD violations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Managed Access Request Management (ARM) workflow and approvals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Configured and maintained Emergency Access Management (Firefighter ID)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Generated comprehensive SoD analysis reports for management review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Applied mitigation controls to address identified security risks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-700">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-700">Project Impact:</span> Successfully implemented comprehensive security
                framework ensuring regulatory compliance, reduced security risks through SoD analysis, and streamlined user access
                management processes across the enterprise SAP landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
