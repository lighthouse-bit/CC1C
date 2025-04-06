import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51R944AHBtODD11HAqYb1iHVeCRDk29vZhjxcYLdGcahUyE5RyXesqb2yUaWJDl01kthKud5yXkBtYPySIdoA6lCm00imUUixsv"); // Replace with your Stripe Publishable Key

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    // Send paymentMethod.id and amount to your backend
    const response = await fetch("https://your-backend.com/api/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, paymentMethodId: paymentMethod.id }),
    });

    const data = await response.json();
    if (data.success) {
      setMessage("Payment Successful!");
    } else {
      setMessage("Payment Failed!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-3 border rounded-lg" />
      <button type="submit" disabled={!stripe || loading} className="bg-blue-600 text-white py-2 px-4 rounded">
        {loading ? "Processing..." : `Donate $${amount}`}
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
};

const DonationForm = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-bold text-blue-900 mb-2 text-center">ENTER DONATION AMOUNT</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-3 text-gray-700 text-center">
          Total Amount: <span className="font-bold">{amount || "0.00"} USD</span>
        </p>
        
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default DonationForm;
