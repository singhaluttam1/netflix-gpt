import React, { useState } from "react";
import { FaSearch, FaChevronRight, FaChevronDown } from "react-icons/fa";

const HelpCenter = () => {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to reset your password",
      answer:
        "Go to the Sign In page and click on 'Forgot Password?'. Enter your registered email, and we’ll send you a password reset link. Follow the instructions in the email to create a new password.",
    },
    {
      question: "How to update payment method",
      answer:
        "Navigate to your Account settings → Billing Details → Update Payment. You can add a new debit/credit card or switch to UPI/Netbanking. All changes are applied to the next billing cycle.",
    },
    {
      question: "How to cancel your subscription",
      answer:
        "Go to Account → Manage Subscription → Cancel. Your account will remain active until the end of your current billing period. You can restart your membership anytime.",
    },
    {
      question: "How to fix streaming issues",
      answer:
        "If you’re experiencing buffering or errors, check your internet connection (minimum 5 Mbps recommended). Restart your router, clear your browser cache, or reinstall the app. For persistent issues, contact our support team.",
    },
    {
      question: "Parental controls",
      answer:
        "Enable parental controls from Account → Profile & Parental Controls. You can set maturity ratings, restrict certain content, and add a PIN for specific profiles.",
    },
    {
      question: "Update email or phone number",
      answer:
        "Go to Account → Personal Information. Here, you can update your registered email or mobile number. Make sure to verify the new email/phone to secure your account.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How can we help?
        </h2>

        {/* Search bar */}
        <div className="max-w-xl mx-auto flex items-center bg-white rounded overflow-hidden shadow-lg">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a question or issue..."
            className="w-full px-3 py-3 text-black outline-none"
          />
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h3 className="text-xl mb-6">Popular Topics</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left hover:bg-neutral-800 transition"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronDown className="text-gray-400" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;