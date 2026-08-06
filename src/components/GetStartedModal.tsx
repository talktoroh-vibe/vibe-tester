import React, { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white dark:bg-[#191b24] w-full max-w-md rounded-2xl border border-[#E0E3EB] shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6A6D78] hover:text-[#191b24]"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#0049db] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            analytics
          </span>
          <span className="text-[20px] font-bold text-[#191b24]">MarketWise Terminal</span>
        </div>

        <p className="text-[13px] text-[#6A6D78] mb-6">
          Get real-time market order book execution, custom price alerts, and institutional analytics.
        </p>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubmitted(true);
            }}
            className="flex flex-col gap-3"
          >
            <div>
              <label className="text-[11px] font-bold text-[#6A6D78] uppercase mb-1 block">
                Work Email or Trader Handle
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="trader@marketwise.com"
                className="w-full px-3.5 py-2 rounded-lg border border-[#E0E3EB] bg-[#faf8ff] text-[13px] focus:outline-none focus:border-[#0049db]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#0049db] text-white py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#003ab3] transition-colors mt-2"
            >
              Start Free Trial Access
            </button>
            <p className="text-[10px] text-center text-[#6A6D78]">
              No credit card required. Instant real-time level 2 market feed.
            </p>
          </form>
        ) : (
          <div className="text-center py-6">
            <span className="material-symbols-outlined text-[48px] text-[#089981] mb-2">
              check_circle
            </span>
            <div className="text-[16px] font-bold text-[#191b24] mb-1">Welcome aboard!</div>
            <p className="text-[12px] text-[#6A6D78] mb-4">
              We sent your high-performance credentials to <span className="font-mono text-[#0049db] font-semibold">{email}</span>.
            </p>
            <button
              onClick={onClose}
              className="bg-[#191b24] text-white px-6 py-2 rounded-full text-[12px] font-medium"
            >
              Continue to Terminal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
