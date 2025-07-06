import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

// Calculator Pages
import BMICalculator from './pages/calculators/BMICalculator';
import AgeCalculator from './pages/calculators/AgeCalculator';
import LoanEMICalculator from './pages/calculators/LoanEMICallculator';
import PercentageCalculator from './pages/calculators/PercentageCalculator';
import DateDifferenceCalculator from './pages/calculators/DateDifferenceCalculator';
import BodyFatCalculator from './pages/calculators/BodyFatCalculator';
import CalorieCalculator from './pages/calculators/CalorieCalculator';

// Converter Pages
import PDFToWord from './pages/converters/PDFToWord';
import WordToPDF from './pages/converters/WordToPDF';
import ImageToPDF from './pages/converters/ImageToPDF';
import PDFCompressor from './pages/converters/PDFCompressor';
import ImageConverter from './pages/converters/ImageConverter';
import UnitsConverter from './pages/converters/UnitsConverter';

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Calculator Routes */}
              <Route path="/calculators/bmi" element={<BMICalculator />} />
              <Route path="/calculators/age" element={<AgeCalculator />} />
              <Route path="/calculators/loan-emi" element={<LoanEMICalculator />} />
              <Route path="/calculators/percentage" element={<PercentageCalculator />} />
              <Route path="/calculators/date-difference" element={<DateDifferenceCalculator />} />
              <Route path="/calculators/body-fat" element={<BodyFatCalculator />} />
              <Route path="/calculators/calorie" element={<CalorieCalculator />} />
              
              {/* Converter Routes */}
              <Route path="/converters/pdf-to-word" element={<PDFToWord />} />
              <Route path="/converters/word-to-pdf" element={<WordToPDF />} />
              <Route path="/converters/image-to-pdf" element={<ImageToPDF />} />
              <Route path="/converters/pdf-compressor" element={<PDFCompressor />} />
              <Route path="/converters/image-converter" element={<ImageConverter />} />
              <Route path="/converters/units-converter" element={<UnitsConverter />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;