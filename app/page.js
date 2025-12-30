'use client';

import { useEffect, useState } from 'react';

export default function NewYearGreeting() {
  const [scene, setScene] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / 600);
      });
    }, 100);

    const sceneTimer = setTimeout(() => setScene(1), 3000);
    const sceneTimer2 = setTimeout(() => setScene(2), 8000);
    const sceneTimer3 = setTimeout(() => setScene(3), 15000);
    const sceneTimer4 = setTimeout(() => setScene(4), 25000);
    const sceneTimer5 = setTimeout(() => setScene(5), 35000);
    const sceneTimer6 = setTimeout(() => setScene(6), 45000);
    const sceneTimer7 = setTimeout(() => setScene(7), 55000);

    return () => {
      clearInterval(timer);
      clearTimeout(sceneTimer);
      clearTimeout(sceneTimer2);
      clearTimeout(sceneTimer3);
      clearTimeout(sceneTimer4);
      clearTimeout(sceneTimer5);
      clearTimeout(sceneTimer6);
      clearTimeout(sceneTimer7);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
        }

        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #1a237e 0%, #0d47a1 25%, #01579b 50%, #006064 75%, #004d40 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .firework {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: explode 2s ease-out infinite;
        }

        @keyframes explode {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y));
            opacity: 0;
          }
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .content {
          text-align: center;
          z-index: 10;
          padding: 40px;
          max-width: 900px;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 900;
          color: #ffd700;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
          margin-bottom: 30px;
          animation: fadeInScale 1.5s ease-out;
        }

        .year {
          font-family: 'Playfair Display', serif;
          font-size: 120px;
          font-weight: 900;
          background: linear-gradient(45deg, #ffd700, #ffed4e, #ffd700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite, float 4s ease-in-out infinite;
          margin: 20px 0;
          text-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .message {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          color: #ffffff;
          line-height: 1.8;
          margin: 30px 0;
          animation: fadeIn 2s ease-out;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .highlight {
          color: #ffd700;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .location {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          color: #b3e5fc;
          margin-top: 20px;
          font-weight: 300;
          animation: fadeIn 2.5s ease-out;
        }

        .progress-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffd700, #ffed4e);
          transition: width 0.1s linear;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        .scale-in {
          animation: fadeInScale 1.2s ease-out;
        }

        @media (max-width: 768px) {
          .logo { font-size: 32px; }
          .year { font-size: 72px; }
          .message { font-size: 18px; padding: 0 20px; }
          .location { font-size: 16px; }
        }
      `}</style>

      <div className="container">
        {/* Stars background */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}

        {/* Fireworks */}
        {scene >= 3 && [...Array(20)].map((_, i) => (
          <div
            key={`fw-${i}`}
            className="firework"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 60 + '%',
              background: ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][Math.floor(Math.random() * 5)],
              '--x': (Math.random() - 0.5) * 200 + 'px',
              '--y': (Math.random() - 0.5) * 200 + 'px',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}

        <div className="content">
          {scene >= 0 && (
            <div className="logo scale-in">
              CENTAGON INTERNATIONAL SCHOOL
            </div>
          )}

          {scene >= 1 && (
            <div className="location fade-in">
              Maitama, Abuja
            </div>
          )}

          {scene >= 2 && (
            <div className="year scale-in">
              2026
            </div>
          )}

          {scene >= 3 && (
            <div className="message fade-in">
              <p style={{ marginBottom: '25px' }}>
                Wishing all our <span className="highlight">wonderful parents</span>,
              </p>
            </div>
          )}

          {scene >= 4 && (
            <div className="message fade-in">
              <p style={{ marginBottom: '25px' }}>
                Our <span className="highlight">brilliant students</span>,
              </p>
            </div>
          )}

          {scene >= 5 && (
            <div className="message fade-in">
              <p style={{ marginBottom: '25px' }}>
                And our <span className="highlight">dedicated staff</span>,
              </p>
            </div>
          )}

          {scene >= 6 && (
            <div className="message fade-in">
              <p style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px' }}>
                A Happy New Year 2026!
              </p>
            </div>
          )}

          {scene >= 7 && (
            <div className="message fade-in">
              <p style={{ fontSize: '26px', lineHeight: '1.9' }}>
                This promises to be the <span className="highlight">best year ever</span> at Centagon!
                <br />
                Together, we will achieve <span className="highlight">excellence</span>,
                <br />
                create <span className="highlight">unforgettable memories</span>,
                <br />
                and reach <span className="highlight">new heights</span> of success.
              </p>
              <p style={{ fontSize: '32px', marginTop: '30px', fontWeight: '700', color: '#ffd700' }}>
                Here's to an extraordinary 2026! 🎉
              </p>
            </div>
          )}
        </div>

        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </>
  );
}
