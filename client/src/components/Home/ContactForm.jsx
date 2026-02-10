import React, { useState } from "react";
import contact from "../../assets/contact.png";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
  
    try {
      console.log("Sending request to:", `${API_BASE_URL}/api/contact`);
      console.log("Request body:", JSON.stringify(formData));

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const textResponse = await response.text(); 
      console.log("Raw response:", textResponse); 


  
      let result;
      try {
        result = JSON.parse(textResponse); 
      } catch (err) {
        console.error("Error parsing JSON:", err);
        setResponseMessage("Invalid server response.");
        return;
      }
  
      if (response.ok) {
        setResponseMessage(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
    setLoading(false);
  };
  

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold text-blue-900 text-center">
        LEAVE US A MESSAGE
      </h2>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <div className="flex justify-center">
          <img
            src={contact}
            alt="Contact Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side - Form */}
        <form className="bg-white shadow-md p-6 rounded-lg w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
          
          {responseMessage && (
            <p className="text-center mt-4 text-sm text-gray-700">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
