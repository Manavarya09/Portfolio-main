import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const email = "smanavarya@gmail.com";

const AboutMeBot = () => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim().length < 10) {
      alert("Please write a message with at least 10 characters!");
      return;
    }
    setLoading(true);
    setError(false);

    emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: "Anonymous User",
          to_name: "Manavarya Singh",
          from_email: "portfolio-bot@example.com",
          to_email: email,
          message: question,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setQuestion("");
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
          setOpen(false);
        }, 3000);
      }, (err) => {
        setLoading(false);
        setError(true);
        console.error("EmailJS Error:", err);
        setTimeout(() => setError(false), 4000);
      });
  };

  const toggleBot = () => {
    setOpen(!open);
    setShowConfirmation(false);
    setError(false);
  };

  return (
    <>
      {/* Floating Bot Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-[#915EFF] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#7a4fdc] transition text-3xl group"
        onClick={toggleBot}
        aria-label="Toggle Question Bot"
        style={{ boxShadow: "0 4px 24px rgba(145,94,255,0.3)" }}
      >
        💬
        <span className="absolute bottom-full mb-2 px-3 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Ask me anything!
        </span>
      </button>

      {/* Popup Card */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 bg-white dark:bg-black-200 text-black dark:text-white w-80 max-w-xs rounded-2xl shadow-2xl p-6 flex flex-col items-start animate-fade-in">
          <div className="flex justify-between items-center w-full mb-2">
            <span className="font-bold text-lg">Have any questions?</span>
            <button
              className="ml-auto text-xl text-gray-400 hover:text-[#915EFF] transition"
              onClick={toggleBot}
              aria-label="Close Question Bot"
            >
              ×
            </button>
          </div>
          
          {showConfirmation ? (
            <div className="w-full text-center py-4 text-green-500">
              <p className="mb-2">✅ Message sent successfully!</p>
              <p className="text-sm">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
              <p className="text-sm text-secondary">
                Your question will be sent directly to me.
              </p>
              <textarea
                className="w-full rounded-lg border border-secondary p-2 text-[15px] bg-white dark:bg-black-100 text-black dark:text-white resize-none"
                rows={4}
                placeholder="Type your question here... (minimum 10 characters)"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                required
                minLength={10}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#915EFF] text-white py-2 rounded-lg font-semibold hover:bg-[#7a4fdc] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                {!loading && <span>📨</span>}
              </button>
              {error && (
                <p className="text-red-500 text-sm text-center mt-2">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      )}

      {/* Simple fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default AboutMeBot; 