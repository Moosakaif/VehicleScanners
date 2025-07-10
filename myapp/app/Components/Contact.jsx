"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [loading, setLoading] = useState(false); // 🔄 loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: fullName,
      from_email: email,
      phone: phone,
      message: registrationNumber,
    };

    try {
      await emailjs.send(
        'service_xd6n37r',
        'template_cu7vlfe',
        templateParams,
        'k3B55Mf9wXRT4wOU2'
      );
      alert('Message sent successfully!');
      setFullName('');
      setEmail('');
      setPhone('');
      setRegistrationNumber('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className="bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Need Assistance?</h1>
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row">
        <div className="bg-red-600 text-white p-6 rounded-lg md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Us!</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>
            
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>
            
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
            
            <div>
              <textarea 
                placeholder="Message / Registration Number" 
                rows="5"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="w-full p-3 rounded bg-white text-black resize-none"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`w-full p-3 rounded font-medium ${
                loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
              } text-white`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <img 
            src="/car.webp" 
            alt="Vehicle scanning illustration with car" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
