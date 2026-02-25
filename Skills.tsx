import { Shield, Database, Lock, FileText } from 'lucide-react';

interface SkillBarProps {
  skill: string;
  level: number;
}

function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-blue-700">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-700 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">SAP Skills & Expertise</h2>
        <div className="w-20 h-1 bg-blue-700 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Shield className="text-blue-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">SAP ECC Security</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>SU01, SU10 (User Administration)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>PFCG Role Creation & Management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Master & Derived Roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Authorization Objects Configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Transport Management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>SUIM Reports & Audit Analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Database className="text-blue-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">SAP S/4HANA Security</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Next-generation security architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Fiori application security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Role-based access control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>User provisioning & management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Authorization trace & analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Security compliance monitoring</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Lock className="text-blue-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">GRC Access Control 12.0</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>ARM (Access Request Management)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>ARA (Access Risk Analysis)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>EAM (Firefighter ID Management)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>BRM (Business Role Management)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>SoD Analysis & Mitigation Controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <span>Risk rule configuration</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <FileText className="text-blue-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              <SkillBar skill="SAP GUI" level={95} />
              <SkillBar skill="MS Excel" level={90} />
              <SkillBar skill="MS Word" level={88} />
              <SkillBar skill="MS PowerPoint" level={85} />
              <SkillBar skill="Documentation" level={92} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
