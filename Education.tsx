import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Education</h2>
        <div className="w-20 h-1 bg-blue-700 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                <GraduationCap className="text-blue-700" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Science in Computer Science</h3>
                <p className="text-blue-700 font-semibold mb-3">2020 - 2022</p>
                <p className="text-gray-600 leading-relaxed">
                  Advanced studies in computer science with focus on software engineering, security systems,
                  and enterprise application development. Built strong foundation in analytical thinking and problem-solving.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                <Award className="text-blue-700" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-blue-700 font-semibold">CGPA: 8.45/10</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    First Class with Distinction
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive undergraduate program covering core computer science fundamentals including programming,
                  data structures, algorithms, database management, and software development methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
