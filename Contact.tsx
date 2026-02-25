import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-700 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-center text-gray-600 text-lg mb-10">
              I'm always open to discussing new opportunities, projects, or collaborations.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:Prabhakarnarramula2000@gmail.com"
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="bg-blue-700 p-4 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">Prabhakarnarramula2000@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917680938307"
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="bg-blue-700 p-4 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+91 7680938307</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100">
                <div className="bg-blue-700 p-4 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 text-sm">Hyderabad, India</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="bg-blue-700 p-4 rounded-lg">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <p className="text-gray-600 text-sm">Connect on LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
