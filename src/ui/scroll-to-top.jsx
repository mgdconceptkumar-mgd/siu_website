'use client';
import React, { useEffect, useState } from 'react';
import useScrollToTop from '../hooks/use-scroll-to-top';

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '+971556111280'; // 🔹 your WhatsApp number here
  const accountName = 'MGD Support'; // 🔹 Display name
  const avatar = 'https://cdn-icons-png.flaticon.com/512/219/219983.png'; // 🔹 Image in /public folder

  // 🔹 Open WhatsApp when Send is clicked
  const handleSend = () => {
    if (message.trim() !== '') {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(
        /[^\d]/g,
        ''
      )}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank'); // Opens WhatsApp Web/App
      setMessage('');
      setIsOpen(false);
    }
  };

  // 🔹 Scroll progress indicator (optional)
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
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp-container">
        {isOpen ? (
          <div className="whatsapp-popup">
            <div className="whatsapp-header">
              <img src={avatar} alt="avatar" className="whatsapp-avatar" />
              <div>
                <h4>{accountName}</h4>
                <p>Typically replies within 5 mins</p>
              </div>
            </div>
            <div className="whatsapp-body">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <button className="send-btn" onClick={handleSend}>
                Send
              </button>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
        ) : (
          <button
            className={`whatsapp-btn ${!isOpen ? 'whatsapp-attention' : ''}`}
            onClick={() => setIsOpen(true)}
          >

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="whatsapp"
              style={{ width: '35px', height: '35px' }}
            />
          </button>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Scroll to Top Circle */
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
          stroke: #0d6efd;
          fill: none;
          stroke-width: 4;
          transform: rotate(-90deg);
          transform-origin: center;
        }

        /* Floating WhatsApp */
        .floating-whatsapp-container {
          position: fixed;
          bottom: 30px;
          left: 30px; 
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .whatsapp-btn {
          background-color: #25d366;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .whatsapp-btn img {
          width: 35px;
          height: 35px;
        }

        .whatsapp-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .whatsapp-popup {
          background: #fff;
          width: 320px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          position: relative;
          margin-bottom: 12px;
          animation: fadeInUp 0.3s ease-in-out;
        }

        .whatsapp-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background-color: #25d366;
          color: white;
        }

        .whatsapp-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 2px solid white;
        }

        .whatsapp-body {
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        textarea {
          resize: none;
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ddd;
          font-size: 14px;
          min-height: 60px;
        }

        .send-btn {
          background-color: #25d366;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .send-btn:hover {
          background-color: #1ebe5d;
        }

        .close-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }
          /* ===============================
   WHATSAPP ATTENTION ANIMATION
   =============================== */

/* Floating bounce */
.whatsapp-attention {
  animation: whatsapp-float 2.8s ease-in-out infinite;
  position: relative;
}

/* Pulse ring */
.whatsapp-attention::before {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.6);
  animation: whatsapp-pulse 2.8s ease-out infinite;
}

/* Floating effect */
@keyframes whatsapp-float {
  0% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-6px) scale(1.03);
  }
  70% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(0);
  }
}

/* Pulse ring */
@keyframes whatsapp-pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}


        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
          /* =========================================
   MOBILE SIZE OPTIMIZATION (WHATSAPP + SCROLL)
   ========================================= */
@media (max-width: 768px) {

  /* Scroll to top button */
  .rn-progress-parent {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }

  .rn-back-circle {
    stroke-width: 3;
  }

  /* Floating WhatsApp container */
  .floating-whatsapp-container {
    bottom: 20px;
    left: 20px;
  }

  /* WhatsApp button */
  .whatsapp-btn {
    width: 48px;
    height: 48px;
  }

  .whatsapp-btn img {
    width: 26px;
    height: 26px;
  }

  /* Attention ring adjustment */
  .whatsapp-attention::before {
    inset: -4px;
  }

  /* WhatsApp popup */
  .whatsapp-popup {
    width: 280px;
  }

  .whatsapp-header {
    padding: 10px;
  }

  .whatsapp-avatar {
    width: 36px;
    height: 36px;
  }

  textarea {
    font-size: 13px;
    min-height: 50px;
  }

  .send-btn {
    padding: 6px;
    font-size: 14px;
  }
}

      `}</style>
    </>
  );
};

export default ScrollToTop;
