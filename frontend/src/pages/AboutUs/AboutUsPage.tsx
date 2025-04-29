import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ParticlesComponent from "../../components/Particles/Particles";
// import styles from "../../components/Particles/Particle.module.css";
import aboutStyles from "./AboutUs.module.css";

import CommunityCard from "./CommunityCard";
import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";

const AboutUs = () => {
  const [isHoveredGem1, setIsHoveredGem1] = useState(false);
  const [isHoveredGem2, setIsHoveredGem2] = useState(false);
  const [isHoveredGem3, setIsHoveredGem3] = useState(false);
  const [isHoveredGem4, setIsHoveredGem4] = useState(false);
  const [isHoveredGem5, setIsHoveredGem5] = useState(false);
  const [isHoveredGem6, setIsHoveredGem6] = useState(false);

  const particles = useMemo(() => {
    return <ParticlesComponent />;
  }, []);

  // state สำหรับข้อมูลที่ต้องการดึงจาก API เช่น Single Type หรือ Blog Posts
  interface CompanyInfo {
    address: string;
    name: string; // Add the name property
    phone: string; // Add the phone property
    // Add other properties as needed
  }
  interface AboutUs {
    address: string;
    name: string; // Add the name property
    phone: string; // Add the phone property
    // Add other properties as needed
  }
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [aboutUs, setAboutUs] = useState<AboutUs | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const location = useLocation();

  const fetchCompanyInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/company-information`);
      const data = await response.json();
      console.log("Company Info:", data.data);
      setCompanyInfo(data.data);
    } catch (error) {
      console.error("Error fetching Company Info:", error);
    }
  };

  const fetchAboutUsApi = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/about-us`);
      const data = await response.json();
      console.log("About us:", data);
      setAboutUs(data.data);
    } catch (error) {
      console.error("Error fetching about us:", error);
    }
  };

  useEffect(() => {
    fetchCompanyInfo();
    fetchAboutUsApi();
  }, [apiUrl]);

  useEffect(() => {
    if (location.state?.scrollToCommunity) {
      const communitySection = document.querySelector(".community-layout");
      if (communitySection) {
        communitySection.scrollIntoView({ behavior: "smooth" });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  if (companyInfo) {
    console.log("Company Info:", companyInfo.address);
  }

  console.log("About Us:", aboutUs);

  return (
    <div>
      {/* hero  */}
      <div
        className="position-relative bg-dark"
        style={{
          zIndex: 1,
          height: "600px",
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <div className={aboutStyles.particleWrapper}>
          {particles}
          <div className={aboutStyles.contentLayout}>
            <div className="p-3">
              <h1
                className={aboutStyles.mainTitle}
                style={{
                  paddingTop: "0px",
                }}
              >
                The Excellent
              </h1>
              <p
                className={`${aboutStyles.mainText} ${aboutStyles.mainTextS32}`}
                style={{
                  fontWeight: "400",
                  lineHeight: "170%",
                  letterSpacing: "-1.9%",
                  marginTop: "30px",
                }}
              >
                The Excellent Communication Company Limited was founded in 2007.
                to be an IT Solution and Engineering company who provide
                product, solution including design and Engineering we
                continuously develop all our solutions to be the most stability,
                efficiency and data safe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* service and solutions */}
      <div
        className="position-relative"
        style={{ height: "293vh", overflow: "hidden" }}
      >
        {" "}
        {/* Background */}
        <img
          src="src/assets/AboutUs/bg_service.jpg"
          alt="Background"
          className={`${aboutStyles.bgFade}`}
        />
        {/* Background */}
        <div
          className="position-absolute text-white"
          style={{
            top: "27% ",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            className="text-white text-center fw-bold display-4 display-md-3 display-lg-1"
            style={{
              fontFamily: "Saira, sans-serif",
              lineHeight: "142%",
            }}
          >
            SERVICE <br />
            and <br />
            SOLUTIONS
          </h1>
        </div>
        {/* Gems 1 */}
        <div
          className={[
            "position-absolute",
            aboutStyles["gem-float-1"], // <-- grab the module class
            isHoveredGem1 ? aboutStyles.hovered : "",
          ].join(" ")}
          style={{
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem1(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem1(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem1.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className={`${aboutStyles.textInGem}`}>Network solution</p>
        </div>
        {/* Gems 2 */}
        <div
          className={[
            "position-absolute",
            aboutStyles["gem-float-2"], // <-- grab the module class
            isHoveredGem2 ? aboutStyles.hovered : "",
          ].join(" ")}
          style={{
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem2(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem2(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem2.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className={`${aboutStyles.textInGem}`}>Data center</p>
        </div>
        {/* Gems 3 */}
        <div
          className={[
            "position-absolute",
            aboutStyles["gem-float-3"], // <-- grab the module class
            isHoveredGem3 ? aboutStyles.hovered : "",
          ].join(" ")}
          style={{
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem3(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem3(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem3.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className={`${aboutStyles.textInGem}`}>Data management</p>
        </div>
        {/* Gems 4 */}
        <div
          className={[
            "position-absolute",
            aboutStyles["gem-float-4"], // <-- grab the module class
            isHoveredGem4 ? aboutStyles.hovered : "",
          ].join(" ")}
          style={{
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem4(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem4(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem4.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className={`${aboutStyles.textInGem}`}>Centralize management</p>
        </div>
        {/* Gems 5 */}
        <div
          className={[
            "position-absolute",
            aboutStyles["gem-float-5"], // <-- grab the module class
            isHoveredGem5 ? aboutStyles.hovered : "",
          ].join(" ")}
          style={{
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem5(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem5(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem5.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className={`${aboutStyles.textInGem}`}>Multimedia solution</p>
        </div>
        {/* Gems 6 */}
        <div
          className={[
            "position-absolute",
            aboutStyles["gem-float-6"], // <-- grab the module class
            isHoveredGem6 ? aboutStyles.hovered : "",
          ].join(" ")}
          style={{
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem6(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem6(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem6.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className={`${aboutStyles.textInGem}`}>Digital transformation</p>
        </div>
        {/* Gems floor */}
        <div
          className="position-absolute"
          style={{
            top: "-12%",
            right: 0,
            width: "100%",
          }}
        >
          <img
            src="src/assets/AboutUs/Gem-floor.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={`${aboutStyles.vl}`}></div>
        <div className={aboutStyles["iso-layout"]}>
          <div className={aboutStyles["iso-item"]}>
            <div className={`${aboutStyles["iso-item-content"]} text-white`}>
              <p>Empower your business with IT solutions by</p>
              <p>
                <span className={aboutStyles["color-gradient-1"]}>
                  Experts understand your every need.
                </span>{" "}
              </p>
              <p>
                <span>
                  Guarantees with The{" "}
                  <span className={aboutStyles["color-gradient-2"]}>
                    ISO 9001:2015
                  </span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* community */}
      <div
        className={`position-relative ${aboutStyles["community-layout"]} ${aboutStyles["bg-community"]}`}
      >
        <div className={aboutStyles["filter-bg-community-1"]}></div>
        <div className={aboutStyles["filter-bg-community-2"]}></div>
        <div className={aboutStyles["circle-bg-community-1"]}></div>
        <div className={aboutStyles["circle-bg-community-2"]}></div>
        <div className="position-absolute w-100 h-100">
          <div
            className={`${aboutStyles["wave-bg-community"]} position-relative  w-100 h-100`}
          >
            <img
              className={`${aboutStyles["bg-wave-filter"]} position-absolute`}
              src="../../src/assets/AboutUs/bg-wave-service.svg"
              alt=""
            />
            <img
              className={`${aboutStyles["bg-wave"]} position-absolute`}
              src="../../src/assets/AboutUs/bg-wave.svg"
              alt=""
            />
          </div>
        </div>
        <div
          className="position-absolute text-white"
          style={{
            zIndex: 6,
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 className={aboutStyles["main-text-s50"]}>
            “ Tailored IT solutions{" "}
          </h1>
          <h1 className={aboutStyles["main-text-s50"]}>
            we're ready to consult and serve you. ”
          </h1>
        </div>
        <div
          className="position-absolute text-white"
          style={{
            zIndex: 6,
            top: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className={aboutStyles["main-text-s64"]}>Our Community</h1>
        </div>
        <CommunityCard />
        <div className={`${aboutStyles["backgroundSVG"]} position-absolute`}>
          <svg
            viewBox="0 0 1440 2090"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              bottom: "1%",
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 3,
            }}
          >
            <g filter="url(#filter0_dddddd_213_108)">
              <ellipse
                cx="238.727"
                cy="247.573"
                rx="239.727"
                ry="247.573"
                transform="matrix(0.992546 0.121869 -0.992546 0.121869 723.457 877)"
                fill="#3D5B89"
                fillOpacity="0.08"
              />
            </g>
            <defs>
              <filter
                id="filter0_dddddd_213_108"
                x="-453.156"
                y="0.800728"
                width="2335.67"
                height="1736.77"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="9.83897" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.719743 0 0 0 0 0.894904 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_213_108"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-8.04927" />
                <feGaussianBlur stdDeviation="19.6779" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.517725 0 0 0 0 0.835172 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_213_108"
                  result="effect2_dropShadow_213_108"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-40.2464" />
                <feGaussianBlur stdDeviation="68.8728" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.55 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_213_108"
                  result="effect3_dropShadow_213_108"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-60.3695" />
                <feGaussianBlur stdDeviation="137.746" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.209028 0 0 0 0 0.716667 0 0 0 0 0.358333 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_213_108"
                  result="effect4_dropShadow_213_108"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-73.785" />
                <feGaussianBlur stdDeviation="236.135" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.784314 0 0 0 0 0.596078 0 0 0 0 0.862745 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect4_dropShadow_213_108"
                  result="effect5_dropShadow_213_108"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-67.0773" />
                <feGaussianBlur stdDeviation="413.237" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.666801 0 0 0 0 0.271181 0 0 0 0 0.916667 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect5_dropShadow_213_108"
                  result="effect6_dropShadow_213_108"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect6_dropShadow_213_108"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default AboutUs;
