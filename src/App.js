import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
const Step1 = ({ nextStep }) => {
  const handleNext = () => {
    nextStep('/step2');
  };
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
const Step2 = ({ prevStep, nextStep }) => {
  const handlePrev = () => {
    prevStep('/step1');
  };

  const handleNext = () => {
    nextStep('/step3');
  };
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
const Step3 = ({ prevStep }) => {
  const handlePrev = () => {
    prevStep('/step2');
  };
  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };
  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const App = () => {
  const nextStep = (path) => {
    window.location.href = path;
  };

  const prevStep = (path) => {
    window.location.href = path;
  };

  return (
    <MemoryRouter initialEntries={['/step1']} initialIndex={0}>
      <div>
        <Routes>
          <Route path="/step1" element={<Step1 nextStep={nextStep} />} />
          <Route path="/step2" element={<Step2 prevStep={prevStep} nextStep={nextStep} />} />
          <Route path="/step3" element={<Step3 prevStep={prevStep} />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
};

export default App;