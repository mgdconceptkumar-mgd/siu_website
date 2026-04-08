'use client';
import React, { useEffect, useState } from 'react';
import useScrollToTop from '../hooks/use-scroll-to-top';

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '+971526526674'; // SIU Support WhatsApp number
  const accountName = 'SIU Support';
  const avatar = 'https://cdn-icons-png.flaticon.com/512/219/219983.png';

  const handleSend = () => {
    if (message.trim() !== '') {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const progressPath = document.querySelector('.rn-progress-parent path');
    if (!progressPath) return;
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const height = docHeight - winHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      <div
        className={`rn-progress-parent ${stick && 'rn-backto-top-active'}`}
        role="button"
        onClick={onClickHandler}
        onKeyUp={(e) => e}
        tabIndex={-1}
      >
        <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp-container">
        {isOpen ? (
          <div className="whatsapp-popup">

            {/* Header */}
            <div className="whatsapp-header">
              <div className="wa-header-glow" />
              <div className="wa-avatar-wrap">
                <img src={avatar} alt="SIU Support" className="whatsapp-avatar" />
                <span className="wa-online-dot" />
              </div>
              <div className="wa-header-info">
                <h4>{accountName}</h4>
                <p>
                  <span className="wa-dot-pulse" />
                  Typically replies within 5 mins
                </p>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close">✕</button>
            </div>

            {/* Greeting bubble */}
            <div className="whatsapp-chat-area">
              <div className="wa-bubble">
                👋 Hi there! How can <strong>SIU Support</strong> help you today?
              </div>
            </div>

            {/* Input */}
            <div className="whatsapp-body">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button className="send-btn" onClick={handleSend}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                Send on WhatsApp
              </button>
            </div>

            {/* Footer */}
            <div className="wa-popup-footer">
              Secured via WhatsApp · <span>SIU – Study In UAE</span>
            </div>

          </div>
        ) : (
          <button
            className={`whatsapp-btn ${!isOpen ? 'whatsapp-attention' : ''}`}
            onClick={() => setIsOpen(true)}
            aria-label="Open SIU Support on WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: '35px', height: '35px' }}
            />
          </button>
        )}
      </div>

      {/* ── Styles ── */}
      <style jsx>{`

        /* Scroll to Top */
        .rn-progress-parent {
          position: fixed;
          bottom: 40px;
          right: 40px;
          height: 50px;
          width: 50px;
          cursor: pointer;
          z-index: 900;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .rn-backto-top-active {
          opacity: 1;
          visibility: visible;
        }
        .rn-back-circle {
          stroke: #4ec3ff;
          fill: none;
          stroke-width: 4;
          transform: rotate(-90deg);
          transform-origin: center;
        }

        /* Floating container */
        .floating-whatsapp-container {
          position: fixed;
          bottom: 30px;
          left: 30px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* FAB WhatsApp button */
        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366, #1aad55);
          border: none;
          border-radius: 50%;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.55);
        }

        /* Popup card — SIU dark navy theme */
        .whatsapp-popup {
          width: 340px;
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 14px;
          animation: fadeInUp 0.3s ease-in-out;
          background: #0c1a2e;
          border: 1px solid rgba(78, 195, 255, 0.18);
          box-shadow: 0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04);
        }

        /* Header */
        .whatsapp-header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 42px 14px 16px;
          background: linear-gradient(135deg, #0f2a5a 0%, #1a3d7c 60%, #0c2340 100%);
          border-bottom: 1px solid rgba(78, 195, 255, 0.12);
          overflow: hidden;
        }
        .wa-header-glow {
          position: absolute;
          top: -30px;
          right: -20px;
          width: 120px;
          height: 120px;
          background: rgba(78, 195, 255, 0.08);
          border-radius: 50%;
          filter: blur(30px);
          pointer-events: none;
        }
        .wa-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .whatsapp-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 2px solid rgba(78, 195, 255, 0.5);
          background: #1a3d7c;
          object-fit: cover;
        }
        .wa-online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 11px;
          height: 11px;
          background: #25d366;
          border-radius: 50%;
          border: 2px solid #0f2a5a;
        }
        .wa-header-info h4 {
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 3px;
          letter-spacing: 0.3px;
        }
        .wa-header-info p {
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .wa-dot-pulse {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #25d366;
          animation: dotPulse 1.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.2);
          color: #fff;
        }

        /* Greeting bubble */
        .whatsapp-chat-area {
          padding: 14px 14px 6px;
          background: #0d1f3a;
        }
        .wa-bubble {
          background: linear-gradient(135deg, #132d5e, #1a3977);
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          line-height: 1.6;
          padding: 10px 14px;
          border-radius: 4px 14px 14px 14px;
          border: 1px solid rgba(78,195,255,0.12);
        }
        .wa-bubble strong {
          color: #4ec3ff;
        }

        /* Input area */
        .whatsapp-body {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #0d1f3a;
          border-top: 1px solid rgba(78,195,255,0.08);
        }
        .whatsapp-body textarea {
          resize: none;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(78,195,255,0.2);
          background: rgba(255,255,255,0.04);
          color: #e0eaff;
          font-size: 13.5px;
          min-height: 64px;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .whatsapp-body textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }
        .whatsapp-body textarea:focus {
          border-color: rgba(78,195,255,0.5);
          background: rgba(255,255,255,0.06);
        }
        .send-btn {
          background: linear-gradient(135deg, #25d366, #1aad55);
          color: #fff;
          border: none;
          padding: 11px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(37,211,102,0.3);
          letter-spacing: 0.3px;
        }
        .send-btn:hover {
          background: linear-gradient(135deg, #2ee872, #20c060);
          box-shadow: 0 6px 18px rgba(37,211,102,0.45);
          transform: translateY(-1px);
        }

        /* Popup footer */
        .wa-popup-footer {
          text-align: center;
          font-size: 10.5px;
          color: rgba(255,255,255,0.22);
          padding: 8px 12px 10px;
          background: #0c1a2e;
          letter-spacing: 0.3px;
        }
        .wa-popup-footer span {
          color: rgba(78,195,255,0.5);
          font-weight: 600;
        }

        /* Attention animation */
        .whatsapp-attention {
          animation: whatsapp-float 2.8s ease-in-out infinite;
          position: relative;
        }
        .whatsapp-attention::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.6);
          animation: whatsapp-pulse 2.8s ease-out infinite;
        }

        @keyframes whatsapp-float {
          0%   { transform: translateY(0) scale(1); }
          40%  { transform: translateY(-6px) scale(1.03); }
          70%  { transform: translateY(0) scale(1); }
          100% { transform: translateY(0); }
        }
        @keyframes whatsapp-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .rn-progress-parent {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
          }
          .rn-back-circle { stroke-width: 3; }
          .floating-whatsapp-container {
            bottom: 20px;
            left: 14px;
          }
          .whatsapp-btn {
            width: 52px;
            height: 52px;
          }
          .whatsapp-btn img {
            width: 28px;
            height: 28px;
          }
          .whatsapp-attention::before { inset: -4px; }
          .whatsapp-popup { width: 290px; }
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
