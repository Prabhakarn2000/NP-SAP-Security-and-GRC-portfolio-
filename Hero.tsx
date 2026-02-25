import { Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              NP
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Narramula Prabhakar
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold mb-6">
            SAP Security & GRC Consultant
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Motivated SAP Security Consultant with hands-on experience in SAP ECC Security,
            S/4HANA Security, and SAP GRC Access Control 12.0
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg">
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
