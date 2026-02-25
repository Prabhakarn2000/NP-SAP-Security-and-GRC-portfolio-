import { Clock, BookOpen, TrendingUp, MessageSquare, Users2, Zap } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      icon: Clock,
      title: 'Strong Work Ethic',
      description: 'Dedicated to delivering high-quality results with commitment and professionalism'
    },
    {
      icon: Zap,
      title: 'Learning Agility',
      description: 'Quick to grasp new concepts and technologies in dynamic environments'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Actively pursuing knowledge and staying updated with industry trends'
    },
    {
      icon: MessageSquare,
      title: 'Client Communication',
      description: 'Excellent ability to understand requirements and communicate technical solutions'
    },
    {
      icon: Users2,
      title: 'Cross-team Collaboration',
      description: 'Effective team player with strong interpersonal and coordination skills'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Focused on achieving goals and delivering measurable business value'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Core Strengths</h2>
        <div className="w-20 h-1 bg-blue-700 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                <p className="text-gray-600 leading-relaxed">{strength.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
