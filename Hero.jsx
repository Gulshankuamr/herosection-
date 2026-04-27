
import { useEffect, useState } from "react";
import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan";

const ROTATING_TEXTS = [
  "Generates High Quality Leads",
  "Automates Your Sales Process",
  "Turn More Leads into Customers",
  "Scales Your Business Faster",
];

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIdx((i) => (i + 1) % ROTATING_TEXTS.length);
        setFade(true);
      }, 260);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        .hero-rotate {
          background: linear-gradient(104deg, #6400A1, #FF1920);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: opacity 0.3s, transform 0.3s;
          display: inline-block;
        }
        .fade-in { opacity: 1; transform: translateY(0); }
        .fade-out { opacity: 0; transform: translateY(10px); }

        .hero-paragraph {
          text-align: justify;
          text-align-last: left;
          -webkit-hyphens: auto;
          hyphens: auto;
          word-spacing: -0.01em;
        }

        @media (max-width: 640px) {
          .hero-paragraph {
            text-align: center;
            text-align-last: center;
          }
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 560px;
          display: inline-block;
          border-radius: 32px;
          padding: 3px;
          background: linear-gradient(135deg, #6400A1 0%, #a855f7 40%, #FF1920 100%);
          box-shadow:
            0 0 40px rgba(100, 0, 161, 0.45),
            0 0 80px rgba(168, 85, 247, 0.25),
            0 0 120px rgba(255, 25, 32, 0.15);
          animation: glowPulse 4s ease-in-out infinite;
        }

        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 34px;
          background: linear-gradient(135deg, #6400A1, #a855f7, #FF1920, #6400A1);
          background-size: 300% 300%;
          animation: borderRotate 6s linear infinite;
          z-index: -1;
          filter: blur(8px);
          opacity: 0.7;
        }

        .hero-image-wrapper img {
          display: block;
          border-radius: 30px;
          width: 100%;
          height: auto;
          position: relative;
          z-index: 1;
        }

        .hero-image-mask {
          border-radius: 30px;
          overflow: hidden;
          position: relative;
        }

        .hero-image-mask::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: radial-gradient(
            ellipse at center,
            transparent 55%,
            rgba(255,255,255,0.18) 80%,
            rgba(255,255,255,0.55) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow:
              0 0 40px rgba(100, 0, 161, 0.45),
              0 0 80px rgba(168, 85, 247, 0.25),
              0 0 120px rgba(255, 25, 32, 0.15);
          }
          50% {
            box-shadow:
              0 0 60px rgba(100, 0, 161, 0.65),
              0 0 110px rgba(168, 85, 247, 0.40),
              0 0 160px rgba(255, 25, 32, 0.25);
          }
        }

        @keyframes borderRotate {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        .hero-image-float {
          animation: floatImage 6s ease-in-out infinite;
          width: 100%;
          max-width: 560px;
        }

        /* 3D Button */
        .btn-primary-3d {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #7B00C2 0%, #a020f0 40%, #FF1920 100%);
          color: #fff;
          font-weight: 700;
          border-radius: 9999px;
          padding: 16px 42px;
          font-size: 17px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.02em;
          box-shadow:
            0 6px 0px #4a0075,
            0 8px 20px rgba(100, 0, 161, 0.45),
            0 0 40px rgba(168, 85, 247, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.25);
          transform: translateY(0);
          transition: transform 0.13s ease, box-shadow 0.13s ease;
          text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .btn-primary-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 60%);
          pointer-events: none;
        }

        .btn-primary-3d:hover {
          transform: translateY(-3px);
          box-shadow:
            0 9px 0px #4a0075,
            0 14px 28px rgba(100, 0, 161, 0.55),
            0 0 60px rgba(168, 85, 247, 0.35),
            inset 0 1px 0 rgba(255,255,255,0.25);
        }

        .btn-primary-3d:active {
          transform: translateY(4px);
          box-shadow:
            0 2px 0px #4a0075,
            0 4px 10px rgba(100, 0, 161, 0.35),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: rgba(255,255,255,0.22);
          border-radius: 50%;
          font-size: 15px;
          transition: transform 0.2s;
        }

        .btn-primary-3d:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* ── CENTER DIVIDER SECTION ── */
        .hero-cta-divider {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 10px 0 32px;
          position: relative;
        }

        .hero-cta-divider::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(100,0,161,0.18), rgba(255,25,32,0.18), transparent);
        }

        .hero-cta-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #a855f7;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .hero-cta-lines {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 520px;
        }

        .hero-cta-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.35));
        }

        .hero-cta-line.right {
          background: linear-gradient(90deg, rgba(255,25,32,0.35), transparent);
        }

        .hero-stats-row {
          display: flex;
          gap: 32px;
          align-items: center;
          margin-top: 4px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .hero-stat-num {
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(104deg, #6400A1, #FF1920);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }

        .hero-stat-label {
          font-size: 11px;
          color: #9ca3af;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-align: center;
        }

        .hero-stat-sep {
          width: 1px;
          height: 32px;
          background: linear-gradient(180deg, transparent, rgba(168,85,247,0.3), transparent);
        }

        /* Mobile */
        @media (max-width: 1023px) {
          .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 100% !important;
          }
          .hero-left h1 { text-align: center; }
          .hero-image-float { max-width: 100%; }
          .hero-cta-divider { padding: 8px 0 24px; }
          .hero-stats-row { gap: 20px; }
        }

        @media (max-width: 480px) {
          .hero-stats-row { gap: 14px; }
          .hero-stat-num { font-size: 18px; }
        }
      `}</style>

      <section className="relative overflow-hidden bg-white pt-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 px-6 py-14 lg:py-16 items-center">

          {/* LEFT */}
          <div className="hero-left max-w-[520px] mt-6 lg:mt-16">
            <h1 className="mt-6 text-[38px] sm:text-[42px] font-bold leading-[1.15] text-[#111]">
              Generate More Leads and Automate Your Sales Process With CRM Automation That{" "}
              <span className={`hero-rotate ${fade ? "fade-in" : "fade-out"}`}>
                {ROTATING_TEXTS[textIdx]}
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#667085] leading-[1.75] hero-paragraph">
              We help small businesses, coaches, tutors, and service providers
              grow using CRM automation, paid ads, funnels, and WhatsApp
              follow-up systems.
            </p>
          </div>

          {/* RIGHT — Hero Image */}
          <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-16 w-full">
            <div className="hero-image-float">
              <div className="hero-image-wrapper">
                <div className="hero-image-mask">
                  <img
                    src="/herohomeimage.webp"
                    alt="10xBizz Growth System"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM CENTER DIVIDER + BUTTON SECTION ── */}
          <div className="hero-cta-divider">

            {/* Stats row */}
            {/* <div className="hero-stats-row">
              <div className="hero-stat">
                <span className="hero-stat-num">500+</span>
                <span className="hero-stat-label">Businesses Grown</span>
              </div>
              <div className="hero-stat-sep" />
              <div className="hero-stat">
                <span className="hero-stat-num">3x</span>
                <span className="hero-stat-label">Avg Lead Increase</span>
              </div>
              <div className="hero-stat-sep" />
              <div className="hero-stat">
                <span className="hero-stat-num">98%</span>
                <span className="hero-stat-label">Client Satisfaction</span>
              </div>
            </div> */}

            {/* Divider lines with label */}
            <div className="hero-cta-lines">
              <div className="hero-cta-line" />
              <span className="hero-cta-label">Start Today</span>
              <div className="hero-cta-line right" />
            </div>

            {/* 3D Button */}
            <button
              onClick={() => setOpenModal(true)}
              className="btn-primary-3d"
            >
              See How It Works
              <span className="btn-arrow">→</span>
            </button>

          </div>

        </div>
      </section>

      {openModal && <FreeMarketingPlan onClose={() => setOpenModal(false)} />}
    </>
  );
}