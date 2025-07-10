import React from 'react';
import Link from 'next/link';
import { font } from './font/font';

const packages = [
  {
    title: 'Basic Vehicle Scanners Report',
    priceEach: '£29.99',
    totalPrice: '£29.99',
    checks: '1 Report',
    popular: false,
    features: [
      'Mileage Check',
      'Road Tax History',
      'Technical Specs',
      'NCT/CRW/MOT History',
      'Stolen Vehicle Check',    
      'Previous Usage Check',
      'Vehicle Valuation',
      'Owner History',
    ],
    moneySaver: true,
    linkTo: "/result",
    timer: "3 hours",
  },
  {
    title: 'Premium Vehicle Scanners Report',
    priceEach: '£44.99',
    totalPrice: '£44.99',
    checks: '1 Report',
    popular: true,
    features: [
    'UK / NI Data Included If applicable',
      'Identity Check',
      'Owner History',
      'Colour Changes',
      'Mileage Check',
      'Road Tax History',
      'Technical Specs',
      'Recall Check',
      'NCT/CRW/MOT History',
      'Previous Usage Check',
      'Insurance Write-Off Check',
      'Stolen Vehicle Check',
      'Finance Check',
      'Vehicle Valuation',
    ],
    moneySaver: false,
    linkTo: "/advanced-result",
    timer: "1 hour",
  },
];

const Packages = () => {
  return (
    <div className={`${font.className} bg-gray-100 mt-12 py-12 flex flex-col items-center`}>
      <h1 className="text-4xl font-bold mb-12">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md relative flex flex-col items-center text-center p-6"
          >
            {pkg.popular && (
              <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-sm font-bold py-1 rounded-t-lg">
                MOST POPULAR !
              </div>
            )}
            {pkg.moneySaver && (
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-sm font-bold py-1 rounded-t-lg">
                MONEY SAVER !
              </div>
            )}


            <div className="mt-6">
              <h2 className="text-xl font-semibold">{pkg.title}</h2>
              <p className="text-lg text-gray-700 mt-2">Only {pkg.priceEach}</p>
              <p className="text-sm text-gray-500 mb-4">{pkg.checks}</p>

              <ul className="text-left text-sm text-gray-600 space-y-1 mb-6">
                <h2 className='text-lg'>This Package Includes:</h2>
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
                
                <p className='text-gray-600 text-sm text-left mb-12'>Note: With {pkg.title} you'll receive your report in {pkg.timer}</p>

            <Link href={pkg.linkTo}>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition">
                    Buy Now {pkg.totalPrice}
                </button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
