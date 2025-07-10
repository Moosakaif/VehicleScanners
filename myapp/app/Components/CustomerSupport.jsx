import React from 'react';

const CustomerSupport = () => {
  return (
    <div className="bg-white  rounded-2xl p-6 md:p-20 text-center max-w-5xl mx-auto mt-10">
      {/* Faces */}
      <div className="flex justify-center -space-x-4 mb-6">
        <img src="/face1.jpg" alt="face1" className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover" />
        <img src="/face2.jpg" alt="face2" className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover" />
        <img src="/face3.jpg" alt="face3" className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">Customer Support Service</h2>
      <p className="text-gray-600 mb-8">
        We're here to help! Reach out to us with any questions or concerns, and we'll respond as soon as possible.
      </p>

      {/* Support Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <div className="text-3xl mb-2">📣</div>
          <p className="text-xl font-semibold">97%</p>
          <p className="text-gray-600 text-sm mt-1">satisfaction rate</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <div className="text-3xl mb-2">💬</div>
          <p className="text-xl font-semibold">12–24h</p>
          <p className="text-gray-600 text-sm mt-1">avg. response time</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <div className="text-3xl mb-2">⏱️</div>
          <p className="text-xl font-semibold">24/7</p>
          <p className="text-gray-600 text-sm mt-1">always available</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
