import { GraduationCap, Shield, Users, Zap, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-700 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I am a dedicated SAP Security and GRC Consultant with a strong academic foundation and specialized training
              in SAP security domains. My expertise spans across SAP ECC Security, S/4HANA Security, and SAP GRC Access Control 12.0,
              with a particular focus on Role Management, User Administration, and Segregation of Duties (SoD) Analysis.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Academic Excellence</h3>
                  <p className="text-gray-600">M.Sc Computer Science graduate with strong technical foundation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">SAP Security Expert</h3>
                  <p className="text-gray-600">Specialized training in SAP ECC, S/4HANA & GRC Access Control 12.0</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Analytical Approach</h3>
                  <p className="text-gray-600">Strong analytical thinking and problem-solving capabilities</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Zap className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quick Learner</h3>
                  <p className="text-gray-600">Rapidly adapts to new technologies and methodologies</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Team Player</h3>
                  <p className="text-gray-600">Excellent collaboration and communication skills</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Continuous Improvement</h3>
                  <p className="text-gray-600">Committed to ongoing learning and professional development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
