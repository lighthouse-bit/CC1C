import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-lg w-full flex flex-col md:flex-row">
        {/* Left Section - Input Field */}
        <div className="md:w-2/3 w-full md:pr-6">
          <h2 className="text-lg font-bold text-blue-900 mb-2 text-center md:text-left">
            ENTER DONATION AMOUNT
          </h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-3 text-gray-700 text-center md:text-left">
            Total Amount: <span className="font-bold">{amount || "0.00"} USD</span>
          </p>
        </div>

        {/* Right Section - Payment Options */}
        <div className="md:w-1/3 w-full mt-6 md:mt-0">
          <h3 className="text-gray-600 font-medium text-center">Payment Options</h3>
          <div className="mt-3 space-y-3">
            <button className="w-full flex items-center justify-center bg-yellow-400 text-black py-3 rounded-lg font-semibold shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 mr-2" />
              PayPal
            </button>
            <button className="w-full flex items-center justify-center bg-black text-white py-3 rounded-lg font-semibold shadow-md">
              Credit or Debit cards
            </button>
            <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Crypto" className="h-5 mr-2" />
              Cryptocurrency
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
