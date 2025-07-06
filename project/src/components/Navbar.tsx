import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, RefreshCw, Home } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ToolHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}>
              <Home className="h-4 w-4 inline mr-2" />
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <Calculator className="h-4 w-4 mr-2" />
                Calculators
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/calculators/bmi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">BMI Calculator</Link>
                <Link to="/calculators/age" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Age Calculator</Link>
                <Link to="/calculators/loan-emi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Loan EMI</Link>
                <Link to="/calculators/percentage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Percentage</Link>
                <Link to="/calculators/date-difference" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Date Difference</Link>
                <Link to="/calculators/body-fat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Body Fat</Link>
                <Link to="/calculators/calorie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Calorie Calculator</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <RefreshCw className="h-4 w-4 mr-2" />
                Converters
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/converters/pdf-to-word" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PDF to Word</Link>
                <Link to="/converters/word-to-pdf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Word to PDF</Link>
                <Link to="/converters/image-to-pdf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Image to PDF</Link>
                <Link to="/converters/pdf-compressor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PDF Compressor</Link>
                <Link to="/converters/image-converter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Image Converter</Link>
                <Link to="/converters/units-converter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Units Converter</Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>

              <div className="px-3 py-2 text-base font-medium text-gray-900">Calculators</div>
              <Link to="/calculators/bmi" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">BMI Calculator</Link>
              <Link to="/calculators/age" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Age Calculator</Link>
              <Link to="/calculators/loan-emi" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Loan EMI</Link>
              <Link to="/calculators/percentage" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Percentage</Link>
              <Link to="/calculators/date-difference" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Date Difference</Link>
              <Link to="/calculators/body-fat" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Body Fat</Link>
              <Link to="/calculators/calorie" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Calorie Calculator</Link>

              <div className="px-3 py-2 text-base font-medium text-gray-900">Converters</div>
              <Link to="/converters/pdf-to-word" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">PDF to Word</Link>
              <Link to="/converters/word-to-pdf" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Word to PDF</Link>
              <Link to="/converters/image-to-pdf" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Image to PDF</Link>
              <Link to="/converters/pdf-compressor" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">PDF Compressor</Link>
              <Link to="/converters/image-converter" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Image Converter</Link>
              <Link to="/converters/units-converter" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Units Converter</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
