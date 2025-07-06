import React from 'react';
import { Calculator, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ToolHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all essential calculators and converters.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 ToolHub. All rights reserved.
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold mb-4">Calculators</h3>
            <ul className="space-y-2">
              <li><a href="/calculators/bmi" className="text-gray-400 hover:text-white transition-colors">BMI Calculator</a></li>
              <li><a href="/calculators/age" className="text-gray-400 hover:text-white transition-colors">Age Calculator</a></li>
              <li><a href="/calculators/loan-emi" className="text-gray-400 hover:text-white transition-colors">Loan EMI</a></li>
              <li><a href="/calculators/percentage" className="text-gray-400 hover:text-white transition-colors">Percentage</a></li>
              <li><a href="/calculators/calorie" className="text-gray-400 hover:text-white transition-colors">Calorie Calculator</a></li>
            </ul>
          </div>

          {/* Converters */}
          <div>
            <h3 className="font-semibold mb-4">Converters</h3>
            <ul className="space-y-2">
              <li><a href="/converters/pdf-to-word" className="text-gray-400 hover:text-white transition-colors">PDF to Word</a></li>
              <li><a href="/converters/word-to-pdf" className="text-gray-400 hover:text-white transition-colors">Word to PDF</a></li>
              <li><a href="/converters/image-to-pdf" className="text-gray-400 hover:text-white transition-colors">Image to PDF</a></li>
              <li><a href="/converters/pdf-compressor" className="text-gray-400 hover:text-white transition-colors">PDF Compressor</a></li>
              <li><a href="/converters/units-converter" className="text-gray-400 hover:text-white transition-colors">Units Converter</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">info@toolhub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;