import React, { useState } from 'react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    // Submit formData to an API or mock endpoint
    console.log('Form Data:', formData);
    alert('Form submitted!');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl text-center mb-8">Tournament Registration</h1>
      {step === 1 && (
        <div>
          <h2 className="text-xl mb-4">Step 1: Personal Info</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="block mb-4 p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="block mb-4 p-2 border rounded w-full"
          />
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl mb-4">Step 2: Team Info</h2>
          <input
            type="text"
            name="teamName"
            placeholder="Team Name"
            value={formData.teamName}
            onChange={handleChange}
            className="block mb-4 p-2 border rounded w-full"
          />
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-4">Back</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      )}
    </div>
  );
};

export default Registration;
