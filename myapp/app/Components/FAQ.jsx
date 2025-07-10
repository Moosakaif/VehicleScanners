"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Vehicle Scanners?",
      answer: "Vehicle Scanners is a comprehensive diagnostic tool service that helps car owners and mechanics identify issues with vehicles. Our scanners provide detailed information about your vehicle's computer systems, error codes, and potential mechanical problems, helping you make informed decisions about repairs and maintenance."
    },
    {
      question: "How do I get a vehicle history report?",
      answer: "To get a vehicle history report, simply visit our website, enter the Registration Number (REG) of the car you're interested in, and select the type of report you need. After completing the payment process, your report will be available for immediate download or can be sent to your email address."
    },
    {
      question: "How much does a Vehicle Scanners report cost?",
      answer: "Our Vehicle Scanner offers a single premium report priced at just £29.99. This detailed report provides essential insights into a vehicle’s history, condition, and potential issues. Ideal for buyers and sellers alike, it ensures transparency and confidence in every vehicle transaction."
    },
    {
      question: "Can I get a refund if I'm not satisfied with the report?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not completely satisfied with your Vehicle Scanners report, you can request a refund within 24 hours of purchase. Please contact our customer support team with your order details, and they'll process your refund request promptly."
    }
  ];

  return (
    <div id='faq' className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-700">{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;