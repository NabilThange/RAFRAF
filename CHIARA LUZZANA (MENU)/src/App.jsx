import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import './App.css';

gsap.registerPlugin(CSSRulePlugin);

function App() {
  const [isActive, setIsActive] = useState(false);
  const tlRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    const spanBefore = CSSRulePlugin.getRule("#hamburger span:before");
    
    gsap.set(spanBefore, { background: "#000" });
    gsap.set(".menu", { visibility: "hidden" });

    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    const power4 = "power4.inOut";
    const power2 = "power2.inOut";

    tl.to("#hamburger", 1.25, {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    tl.to("#hamburger span", 1, { background: "#e2e2dc", ease: power2 }, "<");
    tl.to(spanBefore, 1, { background: "#e2e2dc", ease: power2 }, "<");

    tl.to(
      ".btn .btn-outline",
      1.25,
      {
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid #e2e2dc",
        ease: power4,
      },
      "<"
    );

    tl.to(pathRef.current, 0.8, { attr: { d: start }, ease: "power2.in" }, "<")
      .to(pathRef.current, 0.8, { attr: { d: end }, ease: "power2.out" }, "-=0.5");

    tl.to(".menu", 1, { visibility: "visible" }, "-=0.5");

    tl.to(
      ".menu-item > a",
      1,
      {
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      },
      "-=1"
    ).reverse();

    return () => {
      tl.kill();
    };
  }, []);

  const handleToggle = () => {
    setIsActive(!isActive);
    if (tlRef.current) {
      tlRef.current.reversed(!tlRef.current.reversed());
    }
  };

  return (
    <>
      <h1 className="hero-title">purity of noise</h1>

      <div className="btn" id="toggle-btn" onClick={handleToggle}>
        <div className="btn-outline btn-outline-1"></div>
        <div className="btn-outline btn-outline-2"></div>
        <div id="hamburger" className={isActive ? 'active' : ''}>
          <span></span>
        </div>
      </div>

      <div className="overlay">
        <svg viewBox="0 0 1000 1000">
          <path ref={pathRef} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>

      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#"><span>I</span>Index</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#"><span>II</span>Work</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#"><span>III</span>About</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">Speaker</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">Blog</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">Contact</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>

            <div className="wrapper">
              <div className="menu-item">
                <a href="#">Credits</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
